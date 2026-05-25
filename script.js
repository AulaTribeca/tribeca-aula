const SUPABASE_URL = "https://wjprzmqbsvdcpwlblupl.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_qdOyqOCZFeKqEmLXtN5Nkw_JbMmetWP";
const STORAGE_BUCKET = "tribeca-materials";

const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const loginForm = document.getElementById("loginForm");
const loginButton = document.getElementById("loginButton");
const loginError = document.getElementById("loginError");
const loginSection = document.getElementById("loginSection");

const studentDashboardSection = document.getElementById("studentDashboardSection");
const teacherDashboardSection = document.getElementById("teacherDashboardSection");

const studentLogoutButton = document.getElementById("studentLogoutButton");
const teacherLogoutButton = document.getElementById("teacherLogoutButton");

const studentName = document.getElementById("studentName");
const studentCourse = document.getElementById("studentCourse");
const courseCardText = document.getElementById("courseCardText");
const learningSettingsText = document.getElementById("learningSettingsText");

const subjectsContainer = document.getElementById("subjectsContainer");
const subjectDetail = document.getElementById("subjectDetail");
const subjectDetailTitle = document.getElementById("subjectDetailTitle");
const subjectDetailBody = document.getElementById("subjectDetailBody");

const contentPanel = document.getElementById("contentPanel");
const contentTitle = document.getElementById("contentTitle");
const contentBody = document.getElementById("contentBody");

const activityPanel = document.getElementById("activityPanel");
const activityTitle = document.getElementById("activityTitle");
const activityIntro = document.getElementById("activityIntro");
const quizForm = document.getElementById("quizForm");
const quizFeedback = document.getElementById("quizFeedback");

const progressText = document.getElementById("progressText");
const progressFill = document.getElementById("progressFill");
const badgesContainer = document.getElementById("badgesContainer");

const teacherMaterialForm = document.getElementById("teacherMaterialForm");
const teacherSubject = document.getElementById("teacherSubject");
const teacherKind = document.getElementById("teacherKind");
const teacherTitle = document.getElementById("teacherTitle");
const teacherDescription = document.getElementById("teacherDescription");
const teacherKeyPoints = document.getElementById("teacherKeyPoints");
const teacherUrl = document.getElementById("teacherUrl");
const teacherFile = document.getElementById("teacherFile");
const teacherStudentsList = document.getElementById("teacherStudentsList");
const teacherMessage = document.getElementById("teacherMessage");
const teacherMaterialsList = document.getElementById("teacherMaterialsList");

const btnTextSize = document.getElementById("btnTextSize");
const btnContrast = document.getElementById("btnContrast");
const btnDyslexia = document.getElementById("btnDyslexia");

let currentStudent = null;
let currentSubjects = [];
let currentActivities = [];
let currentResults = [];
let currentBadges = [];
let currentActivity = null;

let teacherSubjects = [];
let teacherStudents = [];
let teacherActivities = [];

document.addEventListener("DOMContentLoaded", async function () {
  const { data } = await supabaseClient.auth.getSession();

  if (data.session) {
    await loadUserData(data.session.user.id);
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
    showLoginError("Usuario o contraseña incorrectos. Revisa que el usuario esté confirmado en Supabase.");
    return;
  }

  await loadUserData(data.user.id);
  setLoginLoading(false);
});

studentLogoutButton.addEventListener("click", logout);
teacherLogoutButton.addEventListener("click", logout);

async function logout() {
  await supabaseClient.auth.signOut();

  currentStudent = null;
  currentSubjects = [];
  currentActivities = [];
  currentResults = [];
  currentBadges = [];
  currentActivity = null;

  teacherSubjects = [];
  teacherStudents = [];
  teacherActivities = [];

  loginForm.reset();
  loginError.textContent = "";

  subjectDetail.classList.add("hidden");
  contentPanel.classList.add("hidden");
  activityPanel.classList.add("hidden");
  studentDashboardSection.classList.add("hidden");
  teacherDashboardSection.classList.add("hidden");
  loginSection.classList.remove("hidden");
}

async function loadUserData(userId) {
  const profile = await fetchProfile(userId);

  if (!profile) {
    showLoginError("No se ha encontrado el perfil del usuario.");
    loginSection.classList.remove("hidden");
    studentDashboardSection.classList.add("hidden");
    teacherDashboardSection.classList.add("hidden");
    return;
  }

  loginSection.classList.add("hidden");

  if (profile.role === "teacher") {
    await loadTeacherPanel();
    teacherDashboardSection.classList.remove("hidden");
    studentDashboardSection.classList.add("hidden");
    return;
  }

  await loadStudentPanel(profile);
  studentDashboardSection.classList.remove("hidden");
  teacherDashboardSection.classList.add("hidden");
}

async function loadStudentPanel(profile) {
  currentStudent = profile;
  currentSubjects = await fetchSubjects(profile.id);
  currentActivities = await fetchActivities(currentSubjects);
  currentResults = await fetchResults(profile.id);
  currentBadges = await fetchBadges(profile.id);

  renderStudentDashboard();
}

async function loadTeacherPanel() {
  teacherSubjects = await fetchAllSubjects();
  teacherStudents = await fetchAllStudents();
  teacherActivities = await fetchAllActivities();

  renderTeacherSubjects();
  renderTeacherStudents();
  renderTeacherMaterials();
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
    role: data.role,
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

  return data.map(item => item.subjects).filter(Boolean).sort(sortSubjects);
}

async function fetchActivities(subjects) {
  const subjectIds = subjects.map(subject => subject.id);

  if (subjectIds.length === 0) {
    return [];
  }

  const { data, error } = await supabaseClient
    .from("activities")
    .select("id, subject_id, title, activity_type, description, status, content, created_at")
    .in("subject_id", subjectIds)
    .order("created_at", { ascending: false });

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

  return (data || []).map(item => item.badges ? item.badges.name : null).filter(Boolean);
}

async function fetchAllSubjects() {
  const { data, error } = await supabaseClient
    .from("subjects")
    .select("id, code, name, stage, description")
    .order("name", { ascending: true });

  if (error) {
    console.error("Error cargando materias docentes:", error);
    return [];
  }

  return data || [];
}

async function fetchAllStudents() {
  const { data, error } = await supabaseClient
    .from("profiles")
    .select("id, username, display_name, role, courses(name, stage)")
    .eq("role", "student")
    .order("display_name", { ascending: true });

  if (error) {
    console.error("Error cargando alumnado:", error);
    return [];
  }

  return data || [];
}

async function fetchAllActivities() {
  const { data, error } = await supabaseClient
    .from("activities")
    .select("id, subject_id, title, activity_type, description, status, created_at, content, subjects(name)")
    .order("created_at", { ascending: false })
    .limit(30);

  if (error) {
    console.error("Error cargando publicaciones docentes:", error);
    return [];
  }

  return data || [];
}

function renderStudentDashboard() {
  studentName.textContent = currentStudent.name;
  studentCourse.textContent = `${currentStudent.level}, ${currentStudent.course}`;
  courseCardText.textContent = currentStudent.course;

  learningSettingsText.textContent = currentStudent.learningSettings.length > 0
    ? currentStudent.learningSettings.join(". ") + "."
    : "Sin ajustes específicos configurados.";

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

    card.innerHTML = `
      <h3>${escapeHtml(subject.name)}</h3>
      <p>${escapeHtml(subject.description || "Materia pendiente de desarrollar.")}</p>
    `;

    const button = document.createElement("button");
    button.type = "button";
    button.className = "secondary-button";
    button.textContent = "Abrir materia";
    button.addEventListener("click", function () {
      openSubject(subject);
    });

    card.appendChild(button);
    subjectsContainer.appendChild(card);
  });
}

function openSubject(subject) {
  const subjectActivities = currentActivities.filter(activity => activity.subject_id === subject.id);

  subjectDetailTitle.textContent = subject.name;
  activityPanel.classList.add("hidden");
  contentPanel.classList.add("hidden");

  subjectDetailBody.innerHTML = `
    <p class="subject-description">${escapeHtml(subject.description || "Materia pendiente de desarrollar.")}</p>
    <div class="tabs" aria-label="Secciones de la materia">
      <div class="tab-list" role="tablist" aria-label="Contenido de ${escapeHtml(subject.name)}">
        <button type="button" class="tab-button active" role="tab" aria-selected="true" data-tab="board">Tablón</button>
        <button type="button" class="tab-button" role="tab" aria-selected="false" data-tab="tests">Tests</button>
        <button type="button" class="tab-button" role="tab" aria-selected="false" data-tab="worksheets">Boletines</button>
        <button type="button" class="tab-button" role="tab" aria-selected="false" data-tab="progress">Progreso</button>
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
      activityPanel.classList.add("hidden");
      contentPanel.classList.add("hidden");

      renderSubjectTab(button.dataset.tab, subject, subjectActivities, tabPanel);
    });
  });

  renderSubjectTab("board", subject, subjectActivities, tabPanel);
  subjectDetail.scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderSubjectTab(tabName, subject, subjectActivities, tabPanel) {
  if (tabName === "board") {
    const boardItems = subjectActivities.filter(function (activity) {
      return activity.activity_type === "resource" || activity.activity_type === "activity";
    });

    renderMaterialList(boardItems, tabPanel);
    return;
  }

  if (tabName === "tests") {
    renderMaterialList(
      subjectActivities.filter(activity => activity.activity_type === "test"),
      tabPanel
    );
    return;
  }

  if (tabName === "worksheets") {
    renderMaterialList(
      subjectActivities.filter(activity => activity.activity_type === "worksheet"),
      tabPanel
    );
    return;
  }

  if (tabName === "progress") {
    const subjectActivityIds = subjectActivities.map(activity => activity.id);
    const subjectResults = currentResults.filter(result => subjectActivityIds.includes(result.activity_id));
    const completed = subjectResults.filter(result => result.completed).length;

    tabPanel.innerHTML = `
      <div class="material-list">
        <article class="material-item">
          <div>
            <span class="status-pill available">Seguimiento</span>
            <h3>Progreso de ${escapeHtml(subject.name)}</h3>
            <p>Tests completados en esta materia: ${completed}.</p>
          </div>
        </article>
      </div>
    `;
  }
}

function renderMaterialList(items, tabPanel) {
  if (!items || items.length === 0) {
    tabPanel.innerHTML = `
      <div class="empty-panel">
        <h3>Sin publicaciones disponibles</h3>
        <p>No hay materiales asignados en esta sección.</p>
      </div>
    `;
    return;
  }

  const html = items.map(function (item) {
    const statusLabel = item.status === "pending" ? "Próximamente" : "Publicado";
    const statusClass = item.status === "pending" ? "pending" : "available";
    const kind = item.content && item.content.kind ? item.content.kind : item.activity_type;

    return `
      <article class="material-item">
        <div>
          <span class="status-pill ${statusClass}">${statusLabel}</span>
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.description || "Publicación sin descripción.")}</p>
          <p><strong>Tipo:</strong> ${escapeHtml(readableKind(kind))}</p>
        </div>
        ${
          item.status === "available"
            ? `<button type="button" class="primary-button open-material-button" data-activity-id="${item.id}">Abrir</button>`
            : ""
        }
      </article>
    `;
  }).join("");

  tabPanel.innerHTML = `<div class="material-list">${html}</div>`;

  tabPanel.querySelectorAll(".open-material-button").forEach(function (button) {
    button.addEventListener("click", function () {
      const selectedActivity = currentActivities.find(activity => activity.id === button.dataset.activityId);

      if (!selectedActivity) {
        return;
      }

      if (selectedActivity.activity_type === "test") {
        openTest(selectedActivity);
      } else {
        openContent(selectedActivity);
      }
    });
  });
}

async function openContent(activity) {
  currentActivity = null;
  activityPanel.classList.add("hidden");

  contentTitle.textContent = activity.title;

  const content = activity.content || {};
  const kind = content.kind || activity.activity_type;

  let fileUrl = "";

  if (content.file_path) {
    const { data, error } = await supabaseClient
      .storage
      .from(STORAGE_BUCKET)
      .createSignedUrl(content.file_path, 3600);

    if (!error && data && data.signedUrl) {
      fileUrl = data.signedUrl;
    }
  }

  let bodyHtml = `
    <div class="content-card">
      <p>${escapeHtml(activity.description || "Publicación de aula.")}</p>
  `;

  if (Array.isArray(content.key_points) && content.key_points.length > 0) {
    bodyHtml += `
      <h3>Indicaciones</h3>
      <ul class="key-points">
        ${content.key_points.map(point => `<li>${escapeHtml(point)}</li>`).join("")}
      </ul>
    `;
  }

  if (kind === "pdf" && fileUrl) {
    bodyHtml += `
      <iframe class="pdf-frame" src="${escapeHtml(fileUrl)}" title="${escapeHtml(activity.title)}"></iframe>
      <a class="external-link" href="${escapeHtml(fileUrl)}" target="_blank" rel="noopener noreferrer">
        Descargar o abrir PDF en una pestaña nueva
      </a>
    `;
  }

  if (kind === "image" && fileUrl) {
    bodyHtml += `
      <img class="uploaded-image" src="${escapeHtml(fileUrl)}" alt="${escapeHtml(activity.title)}" />
      <a class="external-link" href="${escapeHtml(fileUrl)}" target="_blank" rel="noopener noreferrer">
        Abrir imagen en una pestaña nueva
      </a>
    `;
  }

  if (kind === "uploaded_video" && fileUrl) {
    bodyHtml += `
      <video class="video-upload" controls src="${escapeHtml(fileUrl)}"></video>
    `;
  }

  if (kind === "external_video" && content.url) {
    const embedUrl = getYoutubeEmbedUrl(content.url);

    if (embedUrl) {
      bodyHtml += `
        <iframe
          class="video-frame"
          src="${escapeHtml(embedUrl)}"
          title="${escapeHtml(activity.title)}"
          allowfullscreen>
        </iframe>
      `;
    }

    bodyHtml += `
      <a class="external-link" href="${escapeHtml(content.url)}" target="_blank" rel="noopener noreferrer">
        Abrir vídeo en una pestaña nueva
      </a>
    `;
  }

  if (kind === "external_link" && content.url) {
    bodyHtml += `
      <a class="external-link" href="${escapeHtml(content.url)}" target="_blank" rel="noopener noreferrer">
        Abrir enlace externo
      </a>
    `;
  }

  if (kind === "gemini" && content.url) {
    bodyHtml += `
      <div class="gemini-card">
        <h3>Test externo de Gemini</h3>
        <p>
          Este recurso se abre fuera de Tribeca Aula. Si Gemini solicita acceso o no permite visualizarlo,
          habrá que revisar la configuración del enlace compartido.
        </p>
        <a class="external-link" href="${escapeHtml(content.url)}" target="_blank" rel="noopener noreferrer">
          Abrir test externo de Gemini
        </a>
      </div>
    `;
  }

  if (kind === "announcement" && !content.url && !fileUrl) {
    bodyHtml += `
      <p>Esta publicación no incluye archivos ni enlaces adicionales.</p>
    `;
  }

  bodyHtml += `</div>`;

  contentBody.innerHTML = bodyHtml;
  contentPanel.classList.remove("hidden");
  contentPanel.scrollIntoView({ behavior: "smooth", block: "start" });
}

function openTest(activity) {
  currentActivity = activity;
  contentPanel.classList.add("hidden");

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

  quizForm.innerHTML = questions.map(function (question, index) {
    const optionsHtml = question.options.map(function (option) {
      return `
        <label>
          <input type="radio" name="${escapeHtml(question.id)}" value="${escapeHtml(option.value)}" />
          ${escapeHtml(option.text)}
        </label>
      `;
    }).join("");

    return `
      <fieldset>
        <legend>${index + 1}. ${escapeHtml(question.text)}</legend>
        ${optionsHtml}
      </fieldset>
    `;
  }).join("") + `<button type="submit" class="primary-button">Corregir actividad</button>`;

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
  let detailHtml = "";

  questions.forEach(function (question, index) {
    const answer = formData.get(question.id);
    const selectedOption = question.options.find(option => option.value === answer);
    const correctOption = question.options.find(option => option.value === question.correct);

    if (!answer) {
      unanswered += 1;
      return;
    }

    const isCorrect = answer === question.correct;

    if (isCorrect) {
      score += 1;
    }

    const feedback = selectedOption && selectedOption.feedback
      ? selectedOption.feedback
      : isCorrect
        ? "Respuesta correcta."
        : `Respuesta incorrecta. La opción correcta era: ${correctOption ? correctOption.text : "no configurada"}.`;

    detailHtml += `
      <p><strong>Pregunta ${index + 1}:</strong> ${isCorrect ? "Correcta" : "Incorrecta"}. ${escapeHtml(feedback)}</p>
    `;
  });

  if (unanswered > 0) {
    quizFeedback.className = "feedback warning";
    quizFeedback.textContent = "Falta alguna pregunta por responder. Revisa la actividad antes de corregirla.";
    return;
  }

  const total = questions.length;
  const percentage = Math.round((score / total) * 100);
  const completed = percentage >= 70;

  quizFeedback.className = completed ? "feedback success" : "feedback warning";
  quizFeedback.innerHTML = `
    <p>Resultado: ${score}/${total}.</p>
    ${detailHtml}
  `;

  await saveActivityResult(currentActivity.id, score, total, completed);
  currentResults = await fetchResults(currentStudent.id);

  if (completed) {
    await awardFirstActivityBadge();
    currentBadges = await fetchBadges(currentStudent.id);
  }

  renderBadges();
  updateProgress();
});

async function saveActivityResult(activityId, score, maxScore, completed) {
  const previousResult = currentResults.find(result => result.activity_id === activityId);
  const attempts = previousResult ? previousResult.attempts + 1 : 1;
  const bestScore = previousResult ? Math.max(Number(previousResult.score || 0), score) : score;
  const alreadyCompleted = previousResult ? previousResult.completed : false;
  const completedToSave = alreadyCompleted || completed;
  const completedAt = previousResult && previousResult.completed_at
    ? previousResult.completed_at
    : completedToSave
      ? new Date().toISOString()
      : null;

  const { error } = await supabaseClient
    .from("activity_results")
    .upsert(
      {
        profile_id: currentStudent.id,
        activity_id: activityId,
        score: bestScore,
        max_score: maxScore,
        completed: completedToSave,
        attempts,
        completed_at: completedAt
      },
      { onConflict: "profile_id,activity_id" }
    );

  if (error) {
    console.error("Error guardando resultado:", error);
    quizFeedback.className = "feedback warning";
    quizFeedback.textContent = "La actividad se corrigió, pero no se pudo guardar el resultado.";
  }
}

async function awardFirstActivityBadge() {
  const { error } = await supabaseClient.rpc("award_first_activity_badge");

  if (error) {
    console.error("Error concediendo insignia:", error);
  }
}

function renderBadges() {
  badgesContainer.innerHTML = "";

  if (currentBadges.length === 0) {
    badgesContainer.innerHTML = '<p class="empty-state">Aún no hay insignias conseguidas.</p>';
    return;
  }

  currentBadges.forEach(function (badgeName) {
    const badge = document.createElement("span");
    badge.className = "badge";
    badge.textContent = badgeName;
    badgesContainer.appendChild(badge);
  });
}

function updateProgress() {
  const trackableActivities = currentActivities.filter(activity => activity.status === "available" && activity.activity_type === "test");
  const completedResults = currentResults.filter(result => result.completed);

  const total = trackableActivities.length;
  const completed = completedResults.length;

  if (total === 0) {
    progressText.textContent = "Todavía no hay tests evaluables disponibles.";
    progressFill.style.width = "0%";
    return;
  }

  const percentage = Math.min(Math.round((completed / total) * 100), 100);
  progressText.textContent = `Has completado ${completed} de ${total} tests disponibles.`;
  progressFill.style.width = `${percentage}%`;
}

function renderTeacherSubjects() {
  teacherSubject.innerHTML = teacherSubjects.map(function (subject) {
    return `<option value="${subject.id}">${escapeHtml(subject.name)}</option>`;
  }).join("");
}

function renderTeacherStudents() {
  if (teacherStudents.length === 0) {
    teacherStudentsList.innerHTML = `<p class="empty-state">Todavía no hay alumnado disponible.</p>`;
    return;
  }

  teacherStudentsList.innerHTML = teacherStudents.map(function (student) {
    const courseName = student.courses ? student.courses.name : "Curso sin asignar";

    return `
      <label class="checkbox-card">
        <input type="checkbox" value="${student.id}" />
        <span>
          ${escapeHtml(student.display_name)}
          <small>${escapeHtml(courseName)} · ${escapeHtml(student.username)}</small>
        </span>
      </label>
    `;
  }).join("");
}

function renderTeacherMaterials() {
  if (teacherActivities.length === 0) {
    teacherMaterialsList.innerHTML = `
      <div class="empty-panel">
        <h3>Sin publicaciones todavía</h3>
        <p>Aún no se han creado publicaciones.</p>
      </div>
    `;
    return;
  }

  teacherMaterialsList.innerHTML = teacherActivities.map(function (activity) {
    const kind = activity.content && activity.content.kind ? activity.content.kind : activity.activity_type;

    return `
      <article class="material-item">
        <div>
          <span class="status-pill available">${escapeHtml(readableKind(kind))}</span>
          <h3>${escapeHtml(activity.title)}</h3>
          <p>${escapeHtml(activity.subjects ? activity.subjects.name : "Materia no disponible")}</p>
          <p>${escapeHtml(activity.description || "")}</p>
        </div>
      </article>
    `;
  }).join("");
}

teacherMaterialForm.addEventListener("submit", async function (event) {
  event.preventDefault();

  const selectedStudentIds = Array.from(teacherStudentsList.querySelectorAll("input[type='checkbox']:checked"))
    .map(input => input.value);

  if (selectedStudentIds.length === 0) {
    showTeacherMessage("Selecciona al menos un alumno o alumna.", "warning");
    return;
  }

  const kind = teacherKind.value;
  const selectedFile = teacherFile.files[0] || null;
  const url = teacherUrl.value.trim();

  if ((kind === "pdf" || kind === "image") && !selectedFile) {
    showTeacherMessage("Para este tipo de publicación debes seleccionar un archivo.", "warning");
    return;
  }

  if ((kind === "external_link" || kind === "external_video" || kind === "gemini") && !url) {
    showTeacherMessage("Para este tipo de publicación debes pegar un enlace.", "warning");
    return;
  }

  let filePath = "";
  let fileName = "";
  let fileMimeType = "";

  if (selectedFile) {
    const validationMessage = validateFile(kind, selectedFile);

    if (validationMessage) {
      showTeacherMessage(validationMessage, "warning");
      return;
    }

    const safeName = sanitizeFileName(selectedFile.name);
    filePath = `materials/${crypto.randomUUID()}-${safeName}`;
    fileName = selectedFile.name;
    fileMimeType = selectedFile.type;

    const { error: uploadError } = await supabaseClient
      .storage
      .from(STORAGE_BUCKET)
      .upload(filePath, selectedFile, {
        cacheControl: "3600",
        upsert: false,
        contentType: selectedFile.type
      });

    if (uploadError) {
      console.error(uploadError);
      showTeacherMessage("No se pudo subir el archivo. Revisa las políticas de Storage.", "warning");
      return;
    }
  }

  const lines = teacherKeyPoints.value
    .split("\n")
    .map(line => line.trim())
    .filter(Boolean);

  const content = {
    kind,
    key_points: lines,
    url,
    file_path: filePath,
    file_name: fileName,
    file_mime_type: fileMimeType
  };

  const activityType = kind === "worksheet" ? "worksheet" : "resource";

  const { data: createdActivity, error: activityError } = await supabaseClient
    .from("activities")
    .insert({
      subject_id: teacherSubject.value,
      title: teacherTitle.value.trim(),
      activity_type: activityType,
      description: teacherDescription.value.trim(),
      status: "available",
      content,
      is_published: true
    })
    .select("id")
    .single();

  if (activityError) {
    console.error(activityError);
    showTeacherMessage("No se pudo crear la publicación.", "warning");
    return;
  }

  const assignments = selectedStudentIds.map(function (studentId) {
    return {
      activity_id: createdActivity.id,
      profile_id: studentId
    };
  });

  const { error: assignmentError } = await supabaseClient
    .from("activity_assignments")
    .insert(assignments);

  if (assignmentError) {
    console.error(assignmentError);
    showTeacherMessage("La publicación se creó, pero no se pudo asignar correctamente.", "warning");
    return;
  }

  teacherMaterialForm.reset();
  teacherActivities = await fetchAllActivities();
  renderTeacherMaterials();

  showTeacherMessage("Publicación creada y asignada correctamente.", "success");
});

function validateFile(kind, file) {
  const maxSize = 50 * 1024 * 1024;

  if (file.size > maxSize) {
    return "El archivo supera el límite de 50 MB.";
  }

  if (kind === "pdf" && file.type !== "application/pdf") {
    return "Para una publicación PDF debes subir un archivo PDF.";
  }

  if (kind === "image" && !["image/png", "image/jpeg", "image/webp"].includes(file.type)) {
    return "Para una imagen debes subir PNG, JPG, JPEG o WEBP.";
  }

  return "";
}

function sanitizeFileName(fileName) {
  return fileName
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9.\-_]/g, "-")
    .replace(/-+/g, "-");
}

function readableKind(kind) {
  const labels = {
    announcement: "Aviso",
    external_link: "Enlace externo",
    external_video: "Vídeo externo",
    pdf: "PDF",
    image: "Imagen",
    gemini: "Test externo de Gemini",
    worksheet: "Boletín",
    uploaded_video: "Vídeo subido",
    resource: "Recurso",
    activity: "Actividad"
  };

  return labels[kind] || kind;
}

function getYoutubeEmbedUrl(url) {
  try {
    const parsedUrl = new URL(url);

    if (parsedUrl.hostname.includes("youtube.com") && parsedUrl.searchParams.get("v")) {
      return `https://www.youtube.com/embed/${parsedUrl.searchParams.get("v")}`;
    }

    if (parsedUrl.hostname.includes("youtu.be")) {
      return `https://www.youtube.com/embed/${parsedUrl.pathname.replace("/", "")}`;
    }

    return "";
  } catch {
    return "";
  }
}

function showTeacherMessage(message, type) {
  teacherMessage.className = type === "success" ? "feedback success" : "feedback warning";
  teacherMessage.textContent = message;
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
  return String(value || "")
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