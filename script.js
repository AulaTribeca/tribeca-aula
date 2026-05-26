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
const progressText = document.getElementById("progressText");
const progressFill = document.getElementById("progressFill");
const badgesContainer = document.getElementById("badgesContainer");

const studentCalendarList = document.getElementById("studentCalendarList");
const studentWallList = document.getElementById("studentWallList");
const subjectsContainer = document.getElementById("subjectsContainer");
const subjectDetail = document.getElementById("subjectDetail");
const subjectDetailTitle = document.getElementById("subjectDetailTitle");
const subjectDetailBody = document.getElementById("subjectDetailBody");

const contentPanel = document.getElementById("contentPanel");
const contentTitle = document.getElementById("contentTitle");
const contentBody = document.getElementById("contentBody");

const teacherPostForm = document.getElementById("teacherPostForm");
const teacherSubject = document.getElementById("teacherSubject");
const teacherPostType = document.getElementById("teacherPostType");
const teacherTitle = document.getElementById("teacherTitle");
const teacherBody = document.getElementById("teacherBody");
const teacherKeyPoints = document.getElementById("teacherKeyPoints");
const teacherUrl = document.getElementById("teacherUrl");
const teacherFile = document.getElementById("teacherFile");
const teacherStudentsList = document.getElementById("teacherStudentsList");
const teacherPostMessage = document.getElementById("teacherPostMessage");

const teacherEventForm = document.getElementById("teacherEventForm");
const teacherEventSubject = document.getElementById("teacherEventSubject");
const teacherEventType = document.getElementById("teacherEventType");
const teacherEventTitle = document.getElementById("teacherEventTitle");
const teacherEventDate = document.getElementById("teacherEventDate");
const teacherEventDescription = document.getElementById("teacherEventDescription");
const teacherEventStudentsList = document.getElementById("teacherEventStudentsList");
const teacherEventMessage = document.getElementById("teacherEventMessage");

const teacherBadgeForm = document.getElementById("teacherBadgeForm");
const teacherBadgeStudent = document.getElementById("teacherBadgeStudent");
const teacherBadge = document.getElementById("teacherBadge");
const teacherBadgeNote = document.getElementById("teacherBadgeNote");
const teacherBadgeMessage = document.getElementById("teacherBadgeMessage");

const teacherPostsList = document.getElementById("teacherPostsList");
const teacherEventsList = document.getElementById("teacherEventsList");

const btnTextSize = document.getElementById("btnTextSize");
const btnContrast = document.getElementById("btnContrast");
const btnDyslexia = document.getElementById("btnDyslexia");
const btnMotion = document.getElementById("btnMotion");

let currentUserId = null;
let currentStudent = null;
let currentSubjects = [];
let currentPosts = [];
let currentEvents = [];
let currentBadgeAwards = [];

let teacherSubjects = [];
let teacherStudents = [];
let teacherPosts = [];
let teacherEvents = [];
let teacherBadges = [];

document.addEventListener("DOMContentLoaded", async function () {
  restoreAccessibilitySettings();

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

  currentUserId = null;
  currentStudent = null;
  currentSubjects = [];
  currentPosts = [];
  currentEvents = [];
  currentBadgeAwards = [];

  teacherSubjects = [];
  teacherStudents = [];
  teacherPosts = [];
  teacherEvents = [];
  teacherBadges = [];

  loginForm.reset();
  loginError.textContent = "";

  subjectDetail.classList.add("hidden");
  contentPanel.classList.add("hidden");
  studentDashboardSection.classList.add("hidden");
  teacherDashboardSection.classList.add("hidden");
  loginSection.classList.remove("hidden");
}

async function loadUserData(userId) {
  currentUserId = userId;

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
  currentSubjects = await fetchStudentSubjects(profile.id);
  currentPosts = await fetchStudentPosts();
  currentEvents = await fetchStudentEvents();
  currentBadgeAwards = await fetchStudentBadgeAwards(profile.id);

  renderStudentDashboard();
}

async function loadTeacherPanel() {
  teacherSubjects = await fetchAllSubjects();
  teacherStudents = await fetchAllStudents();
  teacherPosts = await fetchAllPosts();
  teacherEvents = await fetchAllEvents();
  teacherBadges = await fetchAllBadges();

  renderTeacherSubjects();
  renderTeacherStudents();
  renderTeacherBadges();
  renderTeacherPosts();
  renderTeacherEvents();
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

async function fetchStudentSubjects(userId) {
  const { data, error } = await supabaseClient
    .from("profile_subjects")
    .select("subjects(id, code, name, stage, description, icon)")
    .eq("profile_id", userId);

  if (error) {
    console.error("Error cargando asignaturas:", error);
    return [];
  }

  return data.map(item => item.subjects).filter(Boolean).sort(sortSubjects);
}

async function fetchStudentPosts() {
  const { data, error } = await supabaseClient
    .from("posts")
    .select("id, subject_id, title, body, post_type, content, due_at, created_at, subjects(name, code, icon)")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error cargando publicaciones:", error);
    return [];
  }

  return data || [];
}

async function fetchStudentEvents() {
  const { data, error } = await supabaseClient
    .from("calendar_events")
    .select("id, subject_id, title, description, event_type, starts_at, created_at, subjects(name, code, icon)")
    .order("starts_at", { ascending: true });

  if (error) {
    console.error("Error cargando calendario:", error);
    return [];
  }

  return data || [];
}

async function fetchStudentBadgeAwards(userId) {
  const { data, error } = await supabaseClient
    .from("badge_awards")
    .select("id, note, source, awarded_at, badges(code, name, emoji, description)")
    .eq("profile_id", userId)
    .order("awarded_at", { ascending: false });

  if (error) {
    console.error("Error cargando insignias:", error);
    return [];
  }

  return data || [];
}

async function fetchAllSubjects() {
  const { data, error } = await supabaseClient
    .from("subjects")
    .select("id, code, name, stage, description, icon")
    .order("name", { ascending: true });

  if (error) {
    console.error("Error cargando asignaturas docentes:", error);
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

async function fetchAllPosts() {
  const { data, error } = await supabaseClient
    .from("posts")
    .select("id, subject_id, title, body, post_type, content, due_at, created_at, subjects(name, icon)")
    .order("created_at", { ascending: false })
    .limit(30);

  if (error) {
    console.error("Error cargando publicaciones docentes:", error);
    return [];
  }

  return data || [];
}

async function fetchAllEvents() {
  const { data, error } = await supabaseClient
    .from("calendar_events")
    .select("id, subject_id, title, description, event_type, starts_at, created_at, subjects(name, icon)")
    .order("starts_at", { ascending: false })
    .limit(30);

  if (error) {
    console.error("Error cargando eventos docentes:", error);
    return [];
  }

  return data || [];
}

async function fetchAllBadges() {
  const { data, error } = await supabaseClient
    .from("badges")
    .select("id, code, name, emoji, description")
    .order("name", { ascending: true });

  if (error) {
    console.error("Error cargando insignias docentes:", error);
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

  renderBadges();
  renderProgress();
  renderStudentCalendar();
  renderStudentWall();
  renderSubjects();
}

function renderProgress() {
  const assignedTests = currentPosts.filter(post => post.post_type === "interactive_test").length;
  const badgeCount = currentBadgeAwards.length;
  const percentage = assignedTests > 0 ? Math.min(Math.round((badgeCount / (assignedTests + badgeCount)) * 100), 100) : 0;

  if (assignedTests === 0) {
    progressText.textContent = "No tienes tests interactivos asignados por ahora.";
  } else {
    progressText.textContent = `Tienes ${assignedTests} test interactivo(s) asignado(s).`;
  }

  progressFill.style.width = `${percentage}%`;
}

function renderBadges() {
  badgesContainer.innerHTML = "";

  if (currentBadgeAwards.length === 0) {
    badgesContainer.innerHTML = '<p class="empty-state">Aún no hay insignias conseguidas.</p>';
    return;
  }

  currentBadgeAwards.forEach(function (award) {
    if (!award.badges) {
      return;
    }

    const badge = document.createElement("span");
    badge.className = "badge";
    badge.innerHTML = `
      <span class="badge-emoji">${escapeHtml(award.badges.emoji)}</span>
      <span>${escapeHtml(award.badges.name)}</span>
    `;
    badgesContainer.appendChild(badge);
  });
}

function renderStudentCalendar() {
  const upcomingEvents = currentEvents
    .filter(event => new Date(event.starts_at).getTime() >= Date.now() - 24 * 60 * 60 * 1000)
    .slice(0, 6);

  renderCalendarList(upcomingEvents, studentCalendarList, "No hay fechas próximas asignadas.");
}

function renderStudentWall() {
  renderPostList(currentPosts.slice(0, 12), studentWallList, "No hay publicaciones asignadas todavía.");
}

function renderSubjects() {
  subjectsContainer.innerHTML = "";

  if (currentSubjects.length === 0) {
    subjectsContainer.innerHTML = `
      <div class="empty-panel">
        <h3>Sin asignaturas asignadas</h3>
        <p>Este perfil todavía no tiene asignaturas asignadas.</p>
      </div>
    `;
    return;
  }

  currentSubjects.forEach(function (subject) {
    const subjectPosts = currentPosts.filter(post => post.subject_id === subject.id);
    const card = document.createElement("article");
    card.className = "subject-card";

    card.innerHTML = `
      <div class="subject-card-header">
        <span class="subject-icon" aria-hidden="true">${escapeHtml(subject.icon || "📘")}</span>
        <div>
          <h3>${escapeHtml(subject.name)}</h3>
          <p>${subjectPosts.length} publicación(es) asignada(s)</p>
        </div>
      </div>
      <p>${escapeHtml(subject.description || "Asignatura pendiente de desarrollar.")}</p>
    `;

    const button = document.createElement("button");
    button.type = "button";
    button.className = "secondary-button";
    button.textContent = "Abrir asignatura";
    button.addEventListener("click", function () {
      openSubject(subject);
    });

    card.appendChild(button);
    subjectsContainer.appendChild(card);
  });
}

function openSubject(subject) {
  const subjectPosts = currentPosts.filter(post => post.subject_id === subject.id);
  const subjectEvents = currentEvents.filter(event => event.subject_id === subject.id);

  subjectDetailTitle.textContent = `${subject.icon || "📘"} ${subject.name}`;
  contentPanel.classList.add("hidden");

  subjectDetailBody.innerHTML = `
    <p class="subject-description">${escapeHtml(subject.description || "Asignatura pendiente de desarrollar.")}</p>

    <div class="tabs" aria-label="Secciones de la asignatura">
      <div class="tab-list" role="tablist" aria-label="Contenido de ${escapeHtml(subject.name)}">
        <button type="button" class="tab-button active" role="tab" aria-selected="true" data-tab="wall">Tablón</button>
        <button type="button" class="tab-button" role="tab" aria-selected="false" data-tab="notes">Apuntes</button>
        <button type="button" class="tab-button" role="tab" aria-selected="false" data-tab="tests">Tests</button>
        <button type="button" class="tab-button" role="tab" aria-selected="false" data-tab="worksheets">Boletines</button>
        <button type="button" class="tab-button" role="tab" aria-selected="false" data-tab="calendar">Calendario</button>
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
      contentPanel.classList.add("hidden");

      renderSubjectTab(button.dataset.tab, subjectPosts, subjectEvents, tabPanel);
    });
  });

  renderSubjectTab("wall", subjectPosts, subjectEvents, tabPanel);
  subjectDetail.scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderSubjectTab(tabName, subjectPosts, subjectEvents, tabPanel) {
  if (tabName === "wall") {
    renderPostList(subjectPosts, tabPanel, "No hay publicaciones en esta asignatura.");
    return;
  }

  if (tabName === "notes") {
    renderPostList(
      subjectPosts.filter(post => post.post_type === "notes"),
      tabPanel,
      "No hay apuntes asignados en esta asignatura."
    );
    return;
  }

  if (tabName === "tests") {
    renderPostList(
      subjectPosts.filter(post => post.post_type === "interactive_test"),
      tabPanel,
      "No hay tests interactivos asignados en esta asignatura."
    );
    return;
  }

  if (tabName === "worksheets") {
    renderPostList(
      subjectPosts.filter(post => post.post_type === "worksheet"),
      tabPanel,
      "No hay boletines asignados en esta asignatura."
    );
    return;
  }

  if (tabName === "calendar") {
    renderCalendarList(subjectEvents, tabPanel, "No hay fechas asignadas en esta asignatura.");
  }
}

function renderPostList(posts, container, emptyMessage) {
  if (!posts || posts.length === 0) {
    container.innerHTML = `
      <div class="empty-panel">
        <h3>Sin contenido</h3>
        <p>${escapeHtml(emptyMessage)}</p>
      </div>
    `;
    return;
  }

  container.innerHTML = posts.map(post => createPostCard(post)).join("");

  container.querySelectorAll(".open-post-button").forEach(function (button) {
    button.addEventListener("click", async function () {
      const post = currentPosts.find(item => item.id === button.dataset.postId)
        || teacherPosts.find(item => item.id === button.dataset.postId);

      if (post) {
        await openPost(post);
      }
    });
  });
}

function createPostCard(post) {
  const subjectIcon = post.subjects && post.subjects.icon ? post.subjects.icon : "📘";
  const subjectName = post.subjects && post.subjects.name ? post.subjects.name : "Asignatura";
  const date = formatDate(post.created_at);

  return `
    <article class="post-card">
      <div class="post-topline">
        <span class="post-type">${escapeHtml(readablePostType(post.post_type))}</span>
        <span class="post-subject">${escapeHtml(subjectIcon)} ${escapeHtml(subjectName)}</span>
        <span class="post-date">${escapeHtml(date)}</span>
      </div>
      <h3>${escapeHtml(post.title)}</h3>
      <p>${escapeHtml(shorten(post.body, 180))}</p>
      <button type="button" class="primary-button open-post-button" data-post-id="${post.id}">
        Abrir
      </button>
    </article>
  `;
}

async function openPost(post) {
  contentTitle.textContent = post.title;

  const content = post.content || {};
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

  let html = `
    <div class="content-card">
      <p><strong>${escapeHtml(readablePostType(post.post_type))}</strong></p>
      <p>${escapeHtml(post.body || "")}</p>
  `;

  if (Array.isArray(content.key_points) && content.key_points.length > 0) {
    html += `
      <h3>Indicaciones</h3>
      <ul class="key-points">
        ${content.key_points.map(point => `<li>${escapeHtml(point)}</li>`).join("")}
      </ul>
    `;
  }

  if (content.file_path && !fileUrl) {
    html += `
      <p class="feedback warning">
        El archivo existe, pero no se ha podido generar el acceso temporal. Revisa las políticas de Storage.
      </p>
    `;
  }

  if (fileUrl && content.file_mime_type === "application/pdf") {
    html += `
      <iframe class="pdf-frame" src="${escapeHtml(fileUrl)}" title="${escapeHtml(post.title)}"></iframe>
      <a class="external-link" href="${escapeHtml(fileUrl)}" target="_blank" rel="noopener noreferrer">
        Abrir o descargar PDF
      </a>
    `;
  }

  if (fileUrl && ["image/png", "image/jpeg", "image/webp"].includes(content.file_mime_type)) {
    html += `
      <img class="uploaded-image" src="${escapeHtml(fileUrl)}" alt="${escapeHtml(post.title)}" />
      <a class="external-link" href="${escapeHtml(fileUrl)}" target="_blank" rel="noopener noreferrer">
        Abrir imagen
      </a>
    `;
  }

  if (fileUrl && content.file_mime_type === "video/mp4") {
    html += `<video class="video-upload" controls src="${escapeHtml(fileUrl)}"></video>`;
  }

  if (content.url) {
    if (post.post_type === "interactive_test") {
      html += `
        <a class="external-link" href="${escapeHtml(content.url)}" target="_blank" rel="noopener noreferrer">
          Abrir test interactivo
        </a>
      `;
    } else {
      const embedUrl = getYoutubeEmbedUrl(content.url);

      if (embedUrl) {
        html += `
          <iframe
            class="video-frame"
            src="${escapeHtml(embedUrl)}"
            title="${escapeHtml(post.title)}"
            allowfullscreen>
          </iframe>
        `;
      }

      html += `
        <a class="external-link" href="${escapeHtml(content.url)}" target="_blank" rel="noopener noreferrer">
          Abrir enlace
        </a>
      `;
    }
  }

  html += `</div>`;

  contentBody.innerHTML = html;
  contentPanel.classList.remove("hidden");
  contentPanel.scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderCalendarList(events, container, emptyMessage) {
  if (!events || events.length === 0) {
    container.innerHTML = `
      <div class="empty-panel">
        <h3>Sin fechas</h3>
        <p>${escapeHtml(emptyMessage)}</p>
      </div>
    `;
    return;
  }

  container.innerHTML = events.map(function (event) {
    const subjectIcon = event.subjects && event.subjects.icon ? event.subjects.icon : "📘";
    const subjectName = event.subjects && event.subjects.name ? event.subjects.name : "Asignatura";

    return `
      <article class="calendar-card">
        <div class="calendar-topline">
          <span class="event-type">${escapeHtml(readableEventType(event.event_type))}</span>
          <span class="calendar-subject">${escapeHtml(subjectIcon)} ${escapeHtml(subjectName)}</span>
          <span class="calendar-date">${escapeHtml(formatDateTime(event.starts_at))}</span>
        </div>
        <h3>${escapeHtml(event.title)}</h3>
        <p>${escapeHtml(event.description || "Sin descripción adicional.")}</p>
      </article>
    `;
  }).join("");
}

function renderTeacherSubjects() {
  const options = teacherSubjects.map(function (subject) {
    return `<option value="${subject.id}">${escapeHtml(subject.icon || "📘")} ${escapeHtml(subject.name)}</option>`;
  }).join("");

  teacherSubject.innerHTML = options;
  teacherEventSubject.innerHTML = options;
}

function renderTeacherStudents() {
  const html = createStudentCheckboxes(teacherStudents);

  teacherStudentsList.innerHTML = html;
  teacherEventStudentsList.innerHTML = html;

  teacherBadgeStudent.innerHTML = teacherStudents.map(function (student) {
    const courseName = student.courses ? student.courses.name : "Curso sin asignar";
    return `<option value="${student.id}">${escapeHtml(student.display_name)} · ${escapeHtml(courseName)}</option>`;
  }).join("");
}

function createStudentCheckboxes(students) {
  if (!students || students.length === 0) {
    return `<p class="empty-state">Todavía no hay alumnado disponible.</p>`;
  }

  return students.map(function (student) {
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

function renderTeacherBadges() {
  teacherBadge.innerHTML = teacherBadges.map(function (badge) {
    return `<option value="${badge.id}">${escapeHtml(badge.emoji)} ${escapeHtml(badge.name)}</option>`;
  }).join("");
}

function renderTeacherPosts() {
  renderPostList(teacherPosts, teacherPostsList, "Aún no se han creado publicaciones.");
}

function renderTeacherEvents() {
  renderCalendarList(teacherEvents, teacherEventsList, "Aún no se han creado fechas.");
}

teacherPostForm.addEventListener("submit", async function (event) {
  event.preventDefault();

  const selectedStudentIds = getCheckedStudentIds(teacherStudentsList);

  if (selectedStudentIds.length === 0) {
    showMessage(teacherPostMessage, "Selecciona al menos un alumno o alumna.", "warning");
    return;
  }

  const postType = teacherPostType.value;
  const url = teacherUrl.value.trim();
  const selectedFile = teacherFile.files[0] || null;

  if (postType === "interactive_test" && !url) {
    showMessage(teacherPostMessage, "Para un test interactivo debes pegar el enlace.", "warning");
    return;
  }

  let filePath = "";
  let fileName = "";
  let fileMimeType = "";

  if (selectedFile) {
    const validationMessage = validateFile(selectedFile);

    if (validationMessage) {
      showMessage(teacherPostMessage, validationMessage, "warning");
      return;
    }

    const safeName = sanitizeFileName(selectedFile.name);
    filePath = `materials/${makeId()}-${safeName}`;
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
      showMessage(teacherPostMessage, "No se pudo subir el archivo. Revisa Storage y sus políticas.", "warning");
      return;
    }
  }

  const keyPoints = teacherKeyPoints.value
    .split("\n")
    .map(line => line.trim())
    .filter(Boolean);

  const content = {
    key_points: keyPoints,
    url,
    file_path: filePath,
    file_name: fileName,
    file_mime_type: fileMimeType
  };

  const { data: createdPost, error: postError } = await supabaseClient
    .from("posts")
    .insert({
      subject_id: teacherSubject.value,
      created_by: currentUserId,
      title: teacherTitle.value.trim(),
      body: teacherBody.value.trim(),
      post_type: postType,
      content,
      is_published: true
    })
    .select("id")
    .single();

  if (postError) {
    console.error(postError);
    showMessage(teacherPostMessage, "No se pudo crear la publicación.", "warning");
    return;
  }

  const assignments = selectedStudentIds.map(function (studentId) {
    return {
      post_id: createdPost.id,
      profile_id: studentId
    };
  });

  const { error: assignmentError } = await supabaseClient
    .from("post_assignments")
    .insert(assignments);

  if (assignmentError) {
    console.error(assignmentError);
    showMessage(teacherPostMessage, "La publicación se creó, pero no se pudo asignar correctamente.", "warning");
    return;
  }

  teacherPostForm.reset();
  teacherPosts = await fetchAllPosts();
  renderTeacherPosts();

  showMessage(teacherPostMessage, "Publicación creada y asignada correctamente.", "success");
});

teacherEventForm.addEventListener("submit", async function (event) {
  event.preventDefault();

  const selectedStudentIds = getCheckedStudentIds(teacherEventStudentsList);

  if (selectedStudentIds.length === 0) {
    showMessage(teacherEventMessage, "Selecciona al menos un alumno o alumna.", "warning");
    return;
  }

  const startsAt = new Date(teacherEventDate.value).toISOString();

  const { data: createdEvent, error: eventError } = await supabaseClient
    .from("calendar_events")
    .insert({
      subject_id: teacherEventSubject.value,
      created_by: currentUserId,
      title: teacherEventTitle.value.trim(),
      description: teacherEventDescription.value.trim(),
      event_type: teacherEventType.value,
      starts_at: startsAt,
      is_published: true
    })
    .select("id")
    .single();

  if (eventError) {
    console.error(eventError);
    showMessage(teacherEventMessage, "No se pudo crear la fecha.", "warning");
    return;
  }

  const assignments = selectedStudentIds.map(function (studentId) {
    return {
      event_id: createdEvent.id,
      profile_id: studentId
    };
  });

  const { error: assignmentError } = await supabaseClient
    .from("calendar_event_assignments")
    .insert(assignments);

  if (assignmentError) {
    console.error(assignmentError);
    showMessage(teacherEventMessage, "La fecha se creó, pero no se pudo asignar correctamente.", "warning");
    return;
  }

  teacherEventForm.reset();
  teacherEvents = await fetchAllEvents();
  renderTeacherEvents();

  showMessage(teacherEventMessage, "Fecha creada y asignada correctamente.", "success");
});

teacherBadgeForm.addEventListener("submit", async function (event) {
  event.preventDefault();

  const { error } = await supabaseClient
    .from("badge_awards")
    .insert({
      profile_id: teacherBadgeStudent.value,
      badge_id: teacherBadge.value,
      awarded_by: currentUserId,
      source: "manual",
      note: teacherBadgeNote.value.trim()
    });

  if (error) {
    console.error(error);
    showMessage(teacherBadgeMessage, "No se pudo asignar la insignia.", "warning");
    return;
  }

  teacherBadgeForm.reset();
  showMessage(teacherBadgeMessage, "Insignia asignada correctamente.", "success");
});

function getCheckedStudentIds(container) {
  return Array.from(container.querySelectorAll("input[type='checkbox']:checked"))
    .map(input => input.value);
}

function validateFile(file) {
  const maxSize = 50 * 1024 * 1024;
  const allowedTypes = [
    "application/pdf",
    "image/png",
    "image/jpeg",
    "image/webp",
    "video/mp4"
  ];

  if (file.size > maxSize) {
    return "El archivo supera el límite de 50 MB.";
  }

  if (!allowedTypes.includes(file.type)) {
    return "Solo se admiten PDF, PNG, JPG, WEBP o MP4.";
  }

  return "";
}

function readablePostType(type) {
  const labels = {
    announcement: "Publicación",
    notes: "Apuntes",
    worksheet: "Boletín",
    interactive_test: "Test interactivo"
  };

  return labels[type] || "Publicación";
}

function readableEventType(type) {
  const labels = {
    deadline: "Entrega",
    exam: "Examen",
    reminder: "Recordatorio",
    class: "Clase",
    other: "Fecha"
  };

  return labels[type] || "Fecha";
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

function sanitizeFileName(fileName) {
  return fileName
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9.\-_]/g, "-")
    .replace(/-+/g, "-");
}

function makeId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
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

function formatDate(value) {
  if (!value) {
    return "";
  }

  return new Intl.DateTimeFormat("es-ES", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  }).format(new Date(value));
}

function formatDateTime(value) {
  if (!value) {
    return "";
  }

  return new Intl.DateTimeFormat("es-ES", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  }).format(new Date(value));
}

function shorten(text, maxLength) {
  const value = String(text || "");

  if (value.length <= maxLength) {
    return value;
  }

  return `${value.slice(0, maxLength).trim()}...`;
}

function setLoginLoading(isLoading) {
  loginButton.disabled = isLoading;
  loginButton.textContent = isLoading ? "Entrando..." : "Entrar";
}

function showLoginError(message) {
  loginError.textContent = message;
}

function showMessage(element, message, type) {
  element.className = type === "success" ? "feedback success" : "feedback warning";
  element.textContent = message;
}

function escapeHtml(value) {
  return String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function restoreAccessibilitySettings() {
  const settings = JSON.parse(localStorage.getItem("tribecaAccessibility") || "{}");

  if (settings.largeText) {
    document.body.classList.add("large-text");
  }

  if (settings.highContrast) {
    document.body.classList.add("high-contrast");
  }

  if (settings.readingMode) {
    document.body.classList.add("reading-mode");
  }

  if (settings.reducedMotion) {
    document.body.classList.add("reduced-motion");
  }
}

function saveAccessibilitySettings() {
  const settings = {
    largeText: document.body.classList.contains("large-text"),
    highContrast: document.body.classList.contains("high-contrast"),
    readingMode: document.body.classList.contains("reading-mode"),
    reducedMotion: document.body.classList.contains("reduced-motion")
  };

  localStorage.setItem("tribecaAccessibility", JSON.stringify(settings));
}

btnTextSize.addEventListener("click", function () {
  document.body.classList.toggle("large-text");
  saveAccessibilitySettings();
});

btnContrast.addEventListener("click", function () {
  document.body.classList.toggle("high-contrast");
  saveAccessibilitySettings();
});

btnDyslexia.addEventListener("click", function () {
  document.body.classList.toggle("reading-mode");
  saveAccessibilitySettings();
});

btnMotion.addEventListener("click", function () {
  document.body.classList.toggle("reduced-motion");
  saveAccessibilitySettings();
});