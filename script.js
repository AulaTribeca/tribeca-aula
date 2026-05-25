const students = {
  demo_5p_english: {
    password: "1234",
    name: "Demo 5.º Primaria, English",
    course: "5.º Primaria",
    level: "Educación Primaria",
    subjects: ["English", "Apoyo personalizado"],
    learningSettings: [
      "Panel reducido",
      "Acceso directo a la materia activa",
      "Actividades breves con feedback inmediato"
    ]
  },

  demo_5p_full: {
    password: "1234",
    name: "Demo 5.º Primaria",
    course: "5.º Primaria",
    level: "Educación Primaria",
    subjects: [
      "Matemáticas",
      "Lengua Castellana y Literatura",
      "Lingua Galega",
      "Ciencias Sociales",
      "Ciencias de la Naturaleza",
      "English",
      "Apoyo personalizado"
    ],
    learningSettings: [
      "Panel completo de Primaria",
      "Organización por materias",
      "Apoyo en planificación semanal"
    ]
  },

  demo_6p_full: {
    password: "1234",
    name: "Demo 6.º Primaria",
    course: "6.º Primaria",
    level: "Educación Primaria",
    subjects: [
      "Matemáticas",
      "Lengua Castellana y Literatura",
      "Lingua Galega",
      "Ciencias Sociales",
      "Ciencias de la Naturaleza",
      "English",
      "Apoyo personalizado"
    ],
    learningSettings: [
      "Instrucciones divididas en pasos",
      "Actividades cortas",
      "Refuerzo de autorregulación y control de errores"
    ]
  },

  demo_1eso_full: {
    password: "1234",
    name: "Demo 1.º ESO",
    course: "1.º ESO",
    level: "Educación Secundaria Obligatoria",
    subjects: [
      "Matemáticas",
      "Lengua Castellana y Literatura",
      "Lingua Galega e Literatura",
      "English",
      "Français",
      "Geografía e Historia",
      "Biología y Geología",
      "Tecnología y Digitalización",
      "Apoyo personalizado"
    ],
    learningSettings: [
      "Panel completo de 1.º ESO",
      "Recursos por materia",
      "Actividades con recuperación activa"
    ]
  },

  demo_2eso_full: {
    password: "1234",
    name: "Demo 2.º ESO",
    course: "2.º ESO",
    level: "Educación Secundaria Obligatoria",
    subjects: [
      "Matemáticas",
      "Lengua Castellana y Literatura",
      "Lingua Galega e Literatura",
      "English",
      "Français",
      "Geografía e Historia",
      "Física y Química",
      "Tecnología y Digitalización",
      "Apoyo personalizado"
    ],
    learningSettings: [
      "Panel completo de 2.º ESO",
      "Instrucciones claras",
      "Feedback inmediato y actividades graduadas"
    ]
  },

  demo_4eso_full: {
    password: "1234",
    name: "Demo 4.º ESO",
    course: "4.º ESO",
    level: "Educación Secundaria Obligatoria",
    subjects: [
      "Matemáticas B",
      "Lengua Castellana y Literatura",
      "Lingua Galega e Literatura",
      "English",
      "Français",
      "Geografía e Historia",
      "Física y Química",
      "Biología y Geología",
      "Apoyo personalizado"
    ],
    learningSettings: [
      "Panel completo de 4.º ESO",
      "Preparación de exámenes",
      "Práctica por dificultad progresiva"
    ]
  },

  demo_4eso_math: {
    password: "1234",
    name: "Demo 4.º ESO, Matemáticas",
    course: "4.º ESO",
    level: "Educación Secundaria Obligatoria",
    subjects: ["Matemáticas", "Matemáticas B", "Apoyo personalizado"],
    learningSettings: [
      "Panel reducido",
      "Prioridad en Matemáticas",
      "Práctica de procedimientos y errores frecuentes"
    ]
  },

  demo_4eso_english: {
    password: "1234",
    name: "Demo 4.º ESO, English",
    course: "4.º ESO",
    level: "Educación Secundaria Obligatoria",
    subjects: ["English", "Apoyo personalizado"],
    learningSettings: [
      "Panel reducido",
      "Prioridad en English",
      "Vocabulario, gramática y writing"
    ]
  },

  demo_1bach_full: {
    password: "1234",
    name: "Demo 1.º Bachillerato",
    course: "1.º Bachillerato",
    level: "Bachillerato",
    subjects: [
      "Lengua Castellana y Literatura I",
      "Lingua Galega e Literatura",
      "English",
      "Filosofía",
      "Matemáticas I",
      "Apoyo personalizado"
    ],
    learningSettings: [
      "Panel de Bachillerato",
      "Preparación de pruebas largas",
      "Organización semanal y práctica de examen"
    ]
  },

  demo_1bach_math: {
    password: "1234",
    name: "Demo 1.º Bachillerato, Matemáticas",
    course: "1.º Bachillerato",
    level: "Bachillerato",
    subjects: ["Matemáticas I", "Matemáticas Aplicadas a las Ciencias Sociales I", "Apoyo personalizado"],
    learningSettings: [
      "Panel reducido",
      "Prioridad en Matemáticas",
      "Problemas guiados y práctica tipo examen"
    ]
  },

  demo_pdc: {
    password: "1234",
    name: "Demo ESO PDC",
    course: "ESO PDC",
    level: "Educación Secundaria Obligatoria",
    subjects: [
      "Ámbito Lingüístico y Social",
      "Ámbito Científico-Tecnológico",
      "English",
      "Apoyo personalizado"
    ],
    learningSettings: [
      "Modo baja carga",
      "Instrucciones paso a paso",
      "Actividades breves",
      "Refuerzo motivacional",
      "Sin temporizador obligatorio"
    ]
  }
};

const subjectContent = {
  "Apoyo personalizado": {
    description:
      "Espacio transversal para técnicas de estudio, organización, planificación semanal, comprensión lectora, preparación de exámenes y seguimiento individual.",
    resources: [
      "Planificador semanal de estudio",
      "Guía breve para preparar exámenes",
      "Registro de dudas y objetivos de la semana"
    ],
    activities: [
      "Revisión de agenda",
      "Planificación de tareas pendientes",
      "Autoevaluación del estudio"
    ],
    hasDemoQuiz: false
  },

  "Matemáticas": {
    description:
      "Espacio para práctica graduada, ejercicios autocorregibles, problemas guiados y repasos antes de examen.",
    resources: [
      "Boletines de operaciones y problemas",
      "Vídeos breves de procedimientos",
      "Retos de cálculo y razonamiento"
    ],
    activities: [
      "Test de repaso",
      "Problemas guiados",
      "Actividad de recuperación de errores frecuentes"
    ],
    hasDemoQuiz: false
  },

  "Matemáticas B": {
    description:
      "Espacio para contenidos de Matemáticas B, con práctica de procedimientos, problemas y preparación de pruebas.",
    resources: [
      "Ejercicios graduados",
      "Problemas tipo examen",
      "Formulario de procedimientos"
    ],
    activities: [
      "Práctica autocorregible",
      "Problemas de consolidación",
      "Revisión de errores"
    ],
    hasDemoQuiz: false
  },

  "Matemáticas I": {
    description:
      "Espacio de 1.º de Bachillerato para funciones, álgebra, trigonometría, geometría y resolución de problemas.",
    resources: [
      "Formulario de procedimientos",
      "Problemas tipo examen",
      "Ejercicios resueltos paso a paso"
    ],
    activities: [
      "Práctica de procedimientos",
      "Problemas guiados",
      "Simulación breve de examen"
    ],
    hasDemoQuiz: false
  },

  "Matemáticas Aplicadas a las Ciencias Sociales I": {
    description:
      "Espacio de 1.º de Bachillerato para funciones, estadística, probabilidad, aritmética y resolución de problemas aplicados.",
    resources: [
      "Formulario básico",
      "Problemas aplicados",
      "Ejercicios resueltos"
    ],
    activities: [
      "Práctica autocorregible",
      "Problemas guiados",
      "Revisión de errores frecuentes"
    ],
    hasDemoQuiz: false
  },

  "Lengua Castellana y Literatura": {
    description:
      "Espacio para comprensión lectora, gramática, ortografía, literatura y producción escrita.",
    resources: [
      "Guías de análisis morfológico y sintáctico",
      "Lecturas breves con preguntas",
      "Modelos de respuesta escrita"
    ],
    activities: [
      "Cuestionario de comprensión",
      "Práctica de gramática",
      "Actividad de escritura guiada"
    ],
    hasDemoQuiz: false
  },

  "Lengua Castellana y Literatura I": {
    description:
      "Espacio de 1.º de Bachillerato para comentario de texto, gramática, literatura y producción escrita académica.",
    resources: [
      "Modelos de comentario",
      "Esquemas de literatura",
      "Prácticas de lengua"
    ],
    activities: [
      "Comentario guiado",
      "Test de literatura",
      "Revisión de respuesta escrita"
    ],
    hasDemoQuiz: false
  },

  "Lingua Galega": {
    description:
      "Espazo de Primaria para traballar comprensión, expresión escrita, vocabulario, ortografía e gramática básica en lingua galega.",
    resources: [
      "Lecturas breves con preguntas",
      "Prácticas de vocabulario",
      "Exercicios de ortografía"
    ],
    activities: [
      "Comprensión lectora",
      "Práctica de léxico",
      "Repaso de erros frecuentes"
    ],
    hasDemoQuiz: false
  },

  "Lingua Galega e Literatura": {
    description:
      "Espazo para lingua galega, comprensión, expresión escrita, gramática, léxico e literatura.",
    resources: [
      "Prácticas de acentuación",
      "Exercicios de morfoloxía",
      "Lecturas con preguntas"
    ],
    activities: [
      "Test de lingua",
      "Comentario breve",
      "Revisión de erros frecuentes"
    ],
    hasDemoQuiz: false
  },

  "English": {
    description:
      "Espacio para vocabulario, gramática, comprensión lectora, listening, speaking y writing.",
    resources: [
      "Vocabulary lists",
      "Essential grammar",
      "Reading and listening practice",
      "Writing models"
    ],
    activities: [
      "Vocabulary test",
      "Grammar practice",
      "Reading with feedback",
      "Guided writing"
    ],
    hasDemoQuiz: false
  },

  "Français": {
    description:
      "Espacio para vocabulario, gramática, comprensión lectora, expresión escrita y práctica básica de comunicación en francés.",
    resources: [
      "Listes de vocabulaire",
      "Grammaire essentielle",
      "Compréhension écrite",
      "Modèles de production écrite"
    ],
    activities: [
      "Test de vocabulaire",
      "Pratique de grammaire",
      "Compréhension écrite",
      "Production écrite guidée"
    ],
    hasDemoQuiz: false
  },

  "Geografía e Historia": {
    description:
      "Espacio para estudiar procesos históricos y geográficos mediante esquemas, mapas, tests y actividades de recuperación activa.",
    resources: [
      "Líneas del tiempo",
      "Mapas y esquemas",
      "Preguntas tipo examen"
    ],
    activities: [
      "Test autocorregible de ejemplo",
      "Actividad de conceptos clave",
      "Repaso mediante preguntas cortas"
    ],
    hasDemoQuiz: true
  },

  "Biología y Geología": {
    description:
      "Espacio para contenidos de ciencias naturales, con apoyo visual, vocabulario específico y actividades de comprensión.",
    resources: [
      "Glosarios científicos",
      "Esquemas visuales",
      "Tests de conceptos"
    ],
    activities: [
      "Cuestionario de vocabulario",
      "Actividad de clasificación",
      "Repaso de conceptos clave"
    ],
    hasDemoQuiz: false
  },

  "Física y Química": {
    description:
      "Espacio para fórmulas, problemas, procedimientos paso a paso y práctica graduada.",
    resources: [
      "Formulario básico",
      "Problemas resueltos",
      "Vídeos de procedimientos"
    ],
    activities: [
      "Práctica de fórmulas",
      "Problemas guiados",
      "Test conceptual"
    ],
    hasDemoQuiz: false
  },

  "Tecnología y Digitalización": {
    description:
      "Espacio para competencias digitales, pensamiento computacional, tecnología básica y proyectos guiados.",
    resources: [
      "Guías paso a paso",
      "Actividades digitales",
      "Retos de pensamiento lógico"
    ],
    activities: [
      "Actividad de conceptos",
      "Práctica guiada",
      "Proyecto breve"
    ],
    hasDemoQuiz: false
  },

  "Ciencias Sociales": {
    description:
      "Espacio para geografía, historia, mapas, vocabulario y comprensión de procesos sociales.",
    resources: [
      "Mapas mudos",
      "Esquemas de tema",
      "Preguntas de repaso"
    ],
    activities: [
      "Test de mapas",
      "Repaso de conceptos",
      "Actividad de línea temporal"
    ],
    hasDemoQuiz: false
  },

  "Ciencias de la Naturaleza": {
    description:
      "Espacio para seres vivos, cuerpo humano, materia, energía y contenidos científicos de Primaria.",
    resources: [
      "Esquemas visuales",
      "Vocabulario científico",
      "Actividades de clasificación"
    ],
    activities: [
      "Test de conceptos",
      "Actividad de observación",
      "Repaso antes de examen"
    ],
    hasDemoQuiz: false
  },

  "Filosofía": {
    description:
      "Espacio para conceptos filosóficos, argumentación, comentario de texto y preparación de pruebas.",
    resources: [
      "Glosario filosófico",
      "Esquemas de autores y problemas",
      "Modelos de comentario"
    ],
    activities: [
      "Test de conceptos",
      "Comentario guiado",
      "Comparación de ideas"
    ],
    hasDemoQuiz: false
  },

  "Ámbito Lingüístico y Social": {
    description:
      "Espacio integrado para comprensión lectora, escritura, lengua, literatura, geografía e historia, con actividades breves y guiadas.",
    resources: [
      "Lecturas graduadas",
      "Esquemas visuales",
      "Preguntas cortas de repaso"
    ],
    activities: [
      "Comprensión guiada",
      "Repaso de vocabulario",
      "Actividad de escritura breve"
    ],
    hasDemoQuiz: false
  },

  "Ámbito Científico-Tecnológico": {
    description:
      "Espacio integrado para matemáticas, ciencias y tecnología, con práctica paso a paso y reducción de carga cuando sea necesario.",
    resources: [
      "Ejercicios graduados",
      "Problemas resueltos",
      "Vídeos breves de procedimientos"
    ],
    activities: [
      "Práctica paso a paso",
      "Test corto",
      "Revisión de errores frecuentes"
    ],
    hasDemoQuiz: false
  }
};

const loginForm = document.getElementById("loginForm");
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
const quizForm = document.getElementById("quizForm");
const quizFeedback = document.getElementById("quizFeedback");

const progressText = document.getElementById("progressText");
const progressFill = document.getElementById("progressFill");
const badgesContainer = document.getElementById("badgesContainer");

const btnTextSize = document.getElementById("btnTextSize");
const btnContrast = document.getElementById("btnContrast");
const btnDyslexia = document.getElementById("btnDyslexia");

let currentStudent = null;
let completedActivities = [];
let badges = [];

const correctAnswers = {
  q1: "a",
  q2: "b",
  q3: "b"
};

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  const student = students[username];

  if (!student || student.password !== password) {
    loginError.textContent = "Usuario o contraseña incorrectos. Prueba con demo_1eso_full y contraseña 1234.";
    return;
  }

  currentStudent = student;
  loginError.textContent = "";
  completedActivities = [];
  badges = [];

  renderDashboard();
  loginSection.classList.add("hidden");
  dashboardSection.classList.remove("hidden");
});

logoutButton.addEventListener("click", function () {
  currentStudent = null;
  loginForm.reset();
  subjectDetail.classList.add("hidden");
  activityPanel.classList.add("hidden");
  loginSection.classList.remove("hidden");
  dashboardSection.classList.add("hidden");
});

function renderDashboard() {
  studentName.textContent = currentStudent.name;
  studentCourse.textContent = `${currentStudent.level}, ${currentStudent.course}`;
  courseCardText.textContent = currentStudent.course;

  if (learningSettingsText) {
    learningSettingsText.textContent = currentStudent.learningSettings.join(". ") + ".";
  }

  renderSubjects();
  renderBadges();
  updateProgress();
}

function renderSubjects() {
  subjectsContainer.innerHTML = "";

  currentStudent.subjects.forEach(function (subjectName) {
    const card = document.createElement("article");
    card.className = "subject-card";

    const title = document.createElement("h3");
    title.textContent = subjectName;

    const content = subjectContent[subjectName];
    const description = document.createElement("p");
    description.textContent = content
      ? content.description
      : "Materia pendiente de desarrollar en Tribeca Aula.";

    const button = document.createElement("button");
    button.type = "button";
    button.className = "secondary-button";
    button.textContent = "Abrir materia";
    button.addEventListener("click", function () {
      openSubject(subjectName);
    });

    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(button);

    subjectsContainer.appendChild(card);
  });
}

function openSubject(subjectName) {
  const content = subjectContent[subjectName];

  subjectDetailTitle.textContent = subjectName;

  if (!content) {
    subjectDetailBody.innerHTML = `
      <p>Esta materia todavía no tiene contenidos configurados.</p>
    `;
    subjectDetail.classList.remove("hidden");
    activityPanel.classList.add("hidden");
    return;
  }

  const resources = content.resources
    .map(function (resource) {
      return `<li>${resource}</li>`;
    })
    .join("");

  const activities = content.activities
    .map(function (activity) {
      return `<li>${activity}</li>`;
    })
    .join("");

  subjectDetailBody.innerHTML = `
    <div class="detail-layout">
      <div>
        <h3>Descripción</h3>
        <p>${content.description}</p>
      </div>

      <div>
        <h3>Recursos disponibles</h3>
        <ul class="resource-list">${resources}</ul>
      </div>

      <div>
        <h3>Actividades previstas</h3>
        <ul class="resource-list">${activities}</ul>
      </div>
    </div>
  `;

  subjectDetail.classList.remove("hidden");

  if (content.hasDemoQuiz) {
    activityPanel.classList.remove("hidden");
    quizForm.reset();
    quizFeedback.className = "feedback";
    quizFeedback.textContent = "";
  } else {
    activityPanel.classList.add("hidden");
  }

  subjectDetail.scrollIntoView({ behavior: "smooth", block: "start" });
}

quizForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(quizForm);
  let score = 0;
  let unanswered = 0;

  Object.keys(correctAnswers).forEach(function (question) {
    const answer = formData.get(question);

    if (!answer) {
      unanswered += 1;
      return;
    }

    if (answer === correctAnswers[question]) {
      score += 1;
    }
  });

  if (unanswered > 0) {
    quizFeedback.className = "feedback warning";
    quizFeedback.textContent = "Falta alguna pregunta por responder. Revisa la actividad antes de corregirla.";
    return;
  }

  const total = Object.keys(correctAnswers).length;
  const percentage = Math.round((score / total) * 100);

  if (percentage >= 70) {
    quizFeedback.className = "feedback success";
    quizFeedback.textContent = `Resultado: ${score}/${total}. Buen trabajo. Has demostrado una comprensión adecuada de las ideas principales.`;

    completeActivity("Test autocorregible de Geografía e Historia");
  } else {
    quizFeedback.className = "feedback warning";
    quizFeedback.textContent = `Resultado: ${score}/${total}. Conviene repasar el tema y repetir la actividad. Fíjate especialmente en las consecuencias históricas del proceso.`;
  }
});

function completeActivity(activityName) {
  if (!completedActivities.includes(activityName)) {
    completedActivities.push(activityName);
  }

  if (completedActivities.length === 1) {
    addBadge("Primera actividad completada");
  }

  updateProgress();
}

function addBadge(badgeName) {
  if (!badges.includes(badgeName)) {
    badges.push(badgeName);
  }

  renderBadges();
}

function renderBadges() {
  badgesContainer.innerHTML = "";

  if (badges.length === 0) {
    badgesContainer.innerHTML = '<p class="empty-state">Aún no hay insignias conseguidas.</p>';
    return;
  }

  badges.forEach(function (badgeName) {
    const badge = document.createElement("span");
    badge.className = "badge";
    badge.textContent = badgeName;
    badgesContainer.appendChild(badge);
  });
}

function updateProgress() {
  const totalDemoActivities = 4;
  const completed = completedActivities.length;
  const percentage = Math.min(Math.round((completed / totalDemoActivities) * 100), 100);

  if (completed === 0) {
    progressText.textContent = "Todavía no has completado actividades.";
  } else {
    progressText.textContent = `Has completado ${completed} actividad de prueba.`;
  }

  progressFill.style.width = `${percentage}%`;
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