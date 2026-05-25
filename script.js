const SUPABASE_URL = "https://wjprzmqbsvdcpwlblupl.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_qdOyqOCZFeKqEmLXtN5Nkw_JbMmetWP";

const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const loginForm = document.getElementById("loginForm");
const loginButton = document.getElementById("loginButton");
const loginError = document.getElementById("loginError");
const loginSection = document.getElementById("loginSection");
const dashboardSection = document.getElementById("dashboardSection");

const studentName = document.getElementById("studentName");
const studentCourse = document.getElementById("studentCourse");
const courseCardText = document.getElementById("courseCardText");
const learningSettingsText = document.getElementById("learningSettingsText");

const subjectsContainer = document.getElementById("subjectsContainer");
const subjectDetail = document.getElementById("subjectDetail");
const subjectDetailTitle = document.getElementById("subjectDetailTitle");
const subjectDetailBody = document.getElementById("subjectDetailBody");

const logoutButton = document.getElementById("logoutButton");

const activityPanel = document.getElementById("activityPanel");
const activityTitle = document.getElementById("activityTitle");
const activityIntro = document.getElementById("activityIntro");
const quizForm = document.getElementById("quizForm");
const quizFeedback = document.getElementById("quizFeedback");

const progressText = document.getElementById("progressText");
const progressFill = document.getElementById("progressFill");
const badgesContainer = document.getElementById("badgesContainer");

const btnTextSize = document.getElementById("btnTextSize");
const btnContrast = document.getElementById("btnContrast");
const btnDyslexia = document.getElementById("btnDyslexia");

let currentStudent = null;
let currentSubjects = [];
let currentActivities = [];
let currentResults = [];
let currentBadges = [];
let currentActivity = null;
let localBadges = [];

document.addEventListener("DOMContentLoaded", async function () {
  const { data } = await supabaseClient.auth.getSession();

  if (data.session) {
    await loadStudentData(data.session.user.id);
  }
});

loginForm.addEventListener("submit", async function (event) {
  event.preventDefault();

  const username = document.getElementById("username").value.trim().toLowerCase();
  const password = document.getElementById("password").value.trim();

  if (!username || !password) {
    showLoginError("Introduce usuario y contraseña.");
    return;
  }

  setLoginLoading(true);
  loginError.textContent = "";

  const email = `${username}@tribeca-aula.local`;

  const { data, error } = await supabaseClient.auth.signInWithPassword({
    email,
    password
  });

  if (error) {
    setLoginLoading(false);

    if (error.message && error.message.toLowerCase().includes("email not confirmed")) {
      showLoginError("El usuario existe, pero falta confirmar el email en Supabase Auth.");
      return;
    }

    showLoginError("Usuario o contraseña incorrectos. Revisa también que el usuario esté confirmado en Supabase.");
    return;
  }

  await loadStudentData(data.user.id);
  setLoginLoading(false);
});

logoutButton.addEventListener("click", async function () {
  await supabaseClient.auth.signOut();

  currentStudent = null;
  currentSubjects = [];
  currentActivities = [];
  currentResults = [];
  currentBadges = [];
  currentActivity = null;
  localBadges = [];

  loginForm.reset();
  loginError.textContent = "";
  subjectDetail.classList.add("hidden");
  activityPanel.classList.add("hidden");
  dashboardSection.classList.add("hidden");
  loginSection.classList.remove("hidden");
});

async function loadStudentData(userId) {
  const profile = await fetchProfile(userId);

  if (!profile) {
    showLoginError("No se ha encontrado el perfil del usuario en la tabla profiles.");
    loginSection.classList.remove("hidden");
    dashboardSection.classList.add("hidden");
    return;
  }

  currentStudent = profile;
  currentSubjects = await fetchSubjects(userId);
  currentActivities = await fetchActivities(currentSubjects);
  currentResults = await fetchResults(userId);
  currentBadges = await fetchBadges(userId);
  localBadges = [];

  renderDashboard();

  loginSection.classList.add("hidden");
  dashboardSection.classList.remove("hidden");
}

async function fetchProfile(userId) {
  const { data, error } = await supabaseClient
    .from("profiles")
    .select("id, username, display_name, learning_settings, role, courses(name, stage)")
    .eq("id", userId)
    .single();

  if (error) {
    console.error("Error cargando perfil:", error);
    return null;
  }

  return {
    id: data.id,
    username: data.username,
    name: data.display_name,
    course: data.courses ? data.courses.name : "Curso no asignado",
    level: data.courses ? data.courses.stage : "Etapa no asignada",
    learningSettings: data.learning_settings || []
  };
}

async function fetchSubjects(userId) {
  const { data, error } = await supabaseClient
    .from("profile_subjects")
    .select("subjects(id, code, name, stage, description)")
    .eq("profile_id", userId);

  if (error) {
    console.error("Error cargando materias:", error);
    return [];
  }

  const subjects = data
    .map(function (item) {
      return item.subjects;
    })
    .filter(Boolean);

  return subjects.sort(sortSubjects);
}

async function fetchActivities(subjects) {
  const subjectIds = subjects.map(function (subject) {
    return subject.id;
  });

  if (subjectIds.length === 0) {
    return [];
  }

  const { data, error } = await supabaseClient
    .from("activities")
    .select("id, subject_id, title, activity_type, description, status, content, created_at")
    .in("subject_id", subjectIds)
    .order("created_at", { ascending: true });

  if (error) {
    console.error("Error cargando actividades:", error);
    return [];
  }

  return data || [];
}

async function fetchResults(userId) {
  const { data, error } = await supabaseClient
    .from("activity_results")
    .select("activity_id, score, max_score, completed, attempts, completed_at")
    .eq("profile_id", userId);

  if (error) {
    console.error("Error cargando resultados:", error);
    return [];
  }

  return data || [];
}

async function fetchBadges(userId) {
  const { data, error } = await supabaseClient
    .from("profile_badges")
    .select("badges(name, description), awarded_at")
    .eq("profile_id", userId);

  if (error) {
    console.error("Error cargando insignias:", error);
    return [];
  }

  return (data || [])
    .map(function (item) {
      return item.badges ? item.badges.name : null;
    })
    .filter(Boolean);
}

function renderDashboard() {
  studentName.textContent = currentStudent.name;
  studentCourse.textContent = `${currentStudent.level}, ${currentStudent.course}`;
  courseCardText.textContent = currentStudent.course;

  if (currentStudent.learningSettings.length > 0) {
    learningSettingsText.textContent = currentStudent.learningSettings.join(". ") + ".";
  } else {
    learningSettingsText.textContent = "Sin ajustes específicos configurados.";
  }

  renderSubjects();
  renderBadges();
  updateProgress();
}

function renderSubjects() {
  subjectsContainer.innerHTML = "";

  if (currentSubjects.length === 0) {
    subjectsContainer.innerHTML = `
      <div class="empty-panel">
        <h3>Sin materias asignadas</h3>
        <p>Este perfil todavía no tiene materias asignadas.</p>
      </div>
    `;
    return;
  }

  currentSubjects.forEach(function (subject) {
    const card = document.createElement("article");
    card.className = "subject-card";

    const title = document.createElement("h3");
    title.textContent = subject.name;

    const description = document.createElement("p");
    description.textContent = subject.description || "Materia pendiente de desarrollar en Tribeca Aula.";

    const button = document.createElement("button");
    button.type = "button";
    button.className = "secondary-button";
    button.textContent = "Abrir materia";
    button.addEventListener("click", function () {
      openSubject(subject);
    });

    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(button);

    subjectsContainer.appendChild(card);
  });
}

function openSubject(subject) {
  const subjectActivities = currentActivities.filter(function (activity) {
    return activity.subject_id === subject.id;
  });

  subjectDetailTitle.textContent = subject.name;
  activityPanel.classList.add("hidden");

  subjectDetailBody.innerHTML = `
    <p class="subject-description">${escapeHtml(subject.description || "Materia pendiente de desarrollar.")}</p>

    <div class="tabs" aria-label="Secciones de la materia">
      <div class="tab-list" role="tablist" aria-label="Contenido de ${escapeHtml(subject.name)}">
        <button type="button" class="tab-button active" role="tab" aria-selected="true" data-tab="resources">
          Recursos
        </button>
        <button type="button" class="tab-button" role="tab" aria-selected="false" data-tab="activities">
          Actividades
        </button>
        <button type="button" class="tab-button" role="tab" aria-selected="false" data-tab="tests">
          Tests
        </button>
        <button type="button" class="tab-button" role="tab" aria-selected="false" data-tab="worksheets">
          Boletines
        </button>
        <button type="button" class="tab-button" role="tab" aria-selected="false" data-tab="progress">
          Progreso
        </button>
      </div>

      <div id="tabPanel" class="tab-panel" role="tabpanel"></div>
    </div>
  `;

  subjectDetail.classList.remove("hidden");

  const tabButtons = subjectDetailBody.querySelectorAll(".tab-button");
  const tabPanel = document.getElementById("tabPanel");

  tabButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      tabButtons.forEach(function (otherButton) {
        otherButton.classList.remove("active");
        otherButton.setAttribute("aria-selected", "false");
      });

      button.classList.add("active");
      button.setAttribute("aria-selected", "true");

      renderSubjectTab(button.dataset.tab, subject, subjectActivities, tabPanel);
    });
  });

  renderSubjectTab("resources", subject, subjectActivities, tabPanel);
  subjectDetail.scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderSubjectTab(tabName, subject, subjectActivities, tabPanel) {
  if (tabName === "resources") {
    renderMaterialList(
      subjectActivities.filter(function (activity) {
        return activity.activity_type === "resource";
      }),
      "Recurso",
      "No hay recursos disponibles todavía.",
      tabPanel
    );
    return;
  }

  if (tabName === "activities") {
    renderMaterialList(
      subjectActivities.filter(function (activity) {
        return activity.activity_type === "activity";
      }),
      "Actividad",
      "No hay actividades disponibles todavía.",
      tabPanel
    );
    return;
  }

  if (tabName === "tests") {
    renderMaterialList(
      subjectActivities.filter(function (activity) {
        return activity.activity_type === "test";
      }),
      "Test",
      "No hay tests autocorregibles disponibles todavía.",
      tabPanel
    );
    return;
  }

  if (tabName === "worksheets") {
    renderMaterialList(
      subjectActivities.filter(function (activity) {
        return activity.activity_type === "worksheet";
      }),
      "Boletín",
      "No hay boletines disponibles todavía.",
      tabPanel
    );
    return;
  }

  if (tabName === "progress") {
    const subjectActivityIds = subjectActivities.map(function (activity) {
      return activity.id;
    });

    const subjectResults = currentResults.filter(function (result) {
      return subjectActivityIds.includes(result.activity_id);
    });

    const completed = subjectResults.filter(function (result) {
      return result.completed;
    }).length;

    tabPanel.innerHTML = `
      <div class="material-list">
        <article class="material-item">
          <div>
            <span class="status-pill available">Seguimiento</span>
            <h3>Progreso de ${escapeHtml(subject.name)}</h3>
            <p>Actividades completadas en esta materia: ${completed}.</p>
            <p>
              Aquí se irá mostrando el historial real de intentos, puntuaciones y actividades completadas.
            </p>
          </div>
        </article>
      </div>
    `;
  }
}

function renderMaterialList(items, label, emptyMessage, tabPanel) {
  if (!items || items.length === 0) {
    tabPanel.innerHTML = `
      <div class="empty-panel">
        <h3>Sin elementos disponibles</h3>
        <p>${escapeHtml(emptyMessage)}</p>
      </div>
    `;
    return;
  }

  const html = items
    .map(function (item) {
      const statusLabel = item.status === "pending" ? "Próximamente" : "Disponible";
      const statusClass = item.status === "pending" ? "pending" : "available";
      const isTestAvailable = item.activity_type === "test" && item.status === "available";

      return `
        <article class="material-item">
          <div>
            <span class="status-pill ${statusClass}">${statusLabel}</span>
            <h3>${escapeHtml(item.title)}</h3>
            <p>${escapeHtml(item.description || "Material pendiente de descripción.")}</p>
          </div>
          ${
            isTestAvailable
              ? `<button type="button" class="primary-button open-test-button" data-activity-id="${item.id}">Abrir test</button>`
              : ""
          }
        </article>
      `;
    })
    .join("");

  tabPanel.innerHTML = `<div class="material-list">${html}</div>`;

  const testButtons = tabPanel.querySelectorAll(".open-test-button");

  testButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const activityId = button.dataset.activityId;
      const selectedActivity = currentActivities.find(function (activity) {
        return activity.id === activityId;
      });

      if (selectedActivity) {
        openTest(selectedActivity);
      }
    });
  });
}

function openTest(activity) {
  currentActivity = activity;

  activityTitle.textContent = activity.title;
  activityIntro.textContent = activity.description || "Responde a las preguntas. Al terminar recibirás feedback inmediato.";
  quizFeedback.className = "feedback";
  quizFeedback.textContent = "";

  const questions = activity.content && Array.isArray(activity.content.questions)
    ? activity.content.questions
    : [];

  if (questions.length === 0) {
    quizForm.innerHTML = `
      <div class="empty-panel">
        <h3>Test sin preguntas</h3>
        <p>Esta actividad todavía no tiene preguntas configuradas.</p>
      </div>
    `;
    activityPanel.classList.remove("hidden");
    activityPanel.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }

  const questionHtml = questions
    .map(function (question, index) {
      const optionsHtml = question.options
        .map(function (option) {
          return `
            <label>
              <input type="radio" name="${escapeHtml(question.id)}" value="${escapeHtml(option.value)}" />
              ${escapeHtml(option.text)}
            </label>
          `;
        })
        .join("");

      return `
        <fieldset>
          <legend>${index + 1}. ${escapeHtml(question.text)}</legend>
          ${optionsHtml}
        </fieldset>
      `;
    })
    .join("");

  quizForm.innerHTML = `
    ${questionHtml}
    <button type="submit" class="primary-button">Corregir actividad</button>
  `;

  activityPanel.classList.remove("hidden");
  activityPanel.scrollIntoView({ behavior: "smooth", block: "start" });
}

quizForm.addEventListener("submit", async function (event) {
  event.preventDefault();

  if (!currentActivity) {
    quizFeedback.className = "feedback warning";
    quizFeedback.textContent = "No hay ninguna actividad activa.";
    return;
  }

  const questions = currentActivity.content && Array.isArray(currentActivity.content.questions)
    ? currentActivity.content.questions
    : [];

  const formData = new FormData(quizForm);
  let score = 0;
  let unanswered = 0;

  questions.forEach(function (question) {
    const answer = formData.get(question.id);

    if (!answer) {
      unanswered += 1;
      return;
    }

    if (answer === question.correct) {
      score += 1;
    }
  });

  if (unanswered > 0) {
    quizFeedback.className = "feedback warning";
    quizFeedback.textContent = "Falta alguna pregunta por responder. Revisa la actividad antes de corregirla.";
    return;
  }

  const total = questions.length;
  const percentage = Math.round((score / total) * 100);
  const completed = percentage >= 70;

  if (completed) {
    quizFeedback.className = "feedback success";
    quizFeedback.textContent = `Resultado: ${score}/${total}. Buen trabajo. Has demostrado una comprensión adecuada de las ideas principales.`;
    addLocalBadge("Primera actividad completada");
  } else {
    quizFeedback.className = "feedback warning";
    quizFeedback.textContent = `Resultado: ${score}/${total}. Conviene repasar el contenido y repetir la actividad.`;
  }

  await saveActivityResult(currentActivity.id, score, total, completed);
  currentResults = await fetchResults(currentStudent.id);

  renderBadges();
  updateProgress();
});

async function saveActivityResult(activityId, score, maxScore, completed) {
  const previousResult = currentResults.find(function (result) {
    return result.activity_id === activityId;
  });

  const attempts = previousResult ? previousResult.attempts + 1 : 1;

  const { error } = await supabaseClient
    .from("activity_results")
    .upsert(
      {
        profile_id: currentStudent.id,
        activity_id: activityId,
        score: score,
        max_score: maxScore,
        completed: completed,
        attempts: attempts,
        completed_at: completed ? new Date().toISOString() : null
      },
      {
        onConflict: "profile_id,activity_id"
      }
    );

  if (error) {
    console.error("Error guardando resultado:", error);
    quizFeedback.className = "feedback warning";
    quizFeedback.textContent = "La actividad se corrigió, pero no se pudo guardar el resultado en Supabase.";
  }
}

function addLocalBadge(badgeName) {
  if (!localBadges.includes(badgeName) && !currentBadges.includes(badgeName)) {
    localBadges.push(badgeName);
  }
}

function renderBadges() {
  badgesContainer.innerHTML = "";

  const allBadges = [...currentBadges, ...localBadges];

  if (allBadges.length === 0) {
    badgesContainer.innerHTML = '<p class="empty-state">Aún no hay insignias conseguidas.</p>';
    return;
  }

  allBadges.forEach(function (badgeName) {
    const badge = document.createElement("span");
    badge.className = "badge";
    badge.textContent = badgeName;
    badgesContainer.appendChild(badge);
  });
}

function updateProgress() {
  const trackableActivities = currentActivities.filter(function (activity) {
    return activity.status === "available" && ["activity", "test", "worksheet"].includes(activity.activity_type);
  });

  const completedResults = currentResults.filter(function (result) {
    return result.completed;
  });

  const total = trackableActivities.length;
  const completed = completedResults.length;

  if (total === 0) {
    progressText.textContent = "Todavía no hay actividades evaluables disponibles.";
    progressFill.style.width = "0%";
    return;
  }

  const percentage = Math.min(Math.round((completed / total) * 100), 100);

  progressText.textContent = `Has completado ${completed} de ${total} actividades disponibles.`;
  progressFill.style.width = `${percentage}%`;
}

function sortSubjects(a, b) {
  if (a.name === "Apoyo personalizado") {
    return -1;
  }

  if (b.name === "Apoyo personalizado") {
    return 1;
  }

  return a.name.localeCompare(b.name, "es");
}

function setLoginLoading(isLoading) {
  loginButton.disabled = isLoading;
  loginButton.textContent = isLoading ? "Entrando..." : "Entrar";
}

function showLoginError(message) {
  loginError.textContent = message;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

btnTextSize.addEventListener("click", function () {
  document.body.classList.toggle("large-text");
});

btnContrast.addEventListener("click", function () {
  document.body.classList.toggle("high-contrast");
});

btnDyslexia.addEventListener("click", function () {
  document.body.classList.toggle("reading-mode");
});