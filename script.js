const students = {
  alumno_5p: {
    password: "1234",
    name: "Alumno 5.º Primaria",
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
    ]
  },

  alumno_1eso: {
    password: "1234",
    name: "Alumno 1.º ESO",
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
      "Apoyo personalizado"
    ]
  },

  alumno_4eso: {
    password: "1234",
    name: "Alumno 4.º ESO",
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
    ]
  },

  alumno_2bach: {
    password: "1234",
    name: "Alumno 2.º Bachillerato",
    course: "2.º Bachillerato",
    level: "Bachillerato",
    subjects: [
      "Lengua Castellana y Literatura II",
      "Lingua Galega e Literatura",
      "English",
      "Historia de España",
      "Historia de la Filosofía",
      "Matemáticas Aplicadas a las Ciencias Sociales II",
      "Apoyo personalizado"
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

  "Lengua Castellana y Literatura II": {
    description:
      "Espacio de Bachillerato para comentario de texto, literatura, lengua y preparación de pruebas.",
    resources: [
      "Esquemas de literatura",
      "Modelos de comentario",
      "Prácticas de lengua"
    ],
    activities: [
      "Comentario guiado",
      "Test de literatura",
      "Revisión de respuesta larga"
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

  "Historia de España": {
    description:
      "Espacio para repaso cronológico, conceptos históricos, temas de desarrollo y preparación de pruebas.",
    resources: [
      "Ejes cronológicos",
      "Respuestas modelo",
      "Esquemas de temas"
    ],
    activities: [
      "Test de cronología",
      "Pregunta de desarrollo guiada",
      "Repaso de conceptos"
    ],
    hasDemoQuiz: false
  },

  "Historia de la Filosofía": {
    description:
      "Espacio para autores, textos, conceptos filosóficos y preparación de comentarios.",
    resources: [
      "Fichas de autores",
      "Glosario filosófico",
      "Modelos de comentario"
    ],
    activities: [
      "Test de autores",
      "Comentario guiado",
      "Comparación de conceptos"
    ],
    hasDemoQuiz: false
  },

  "Matemáticas Aplicadas a las Ciencias Sociales II": {
    description:
      "Espacio para funciones, estadística, probabilidad, matrices y preparación de pruebas de Bachillerato.",
    resources: [
      "Formulario",
      "Problemas tipo",
      "Ejercicios resueltos"
    ],
    activities: [
      "Problemas guiados",
      "Test de procedimientos",
      "Revisión de errores"
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
    loginError.textContent = "Usuario o contraseña incorrectos. Prueba con alumno_1eso y contraseña 1234.";
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