const loginForm = document.getElementById("loginForm");
const loginSection = document.getElementById("loginSection");
const dashboardSection = document.getElementById("dashboardSection");
const studentName = document.getElementById("studentName");
const logoutButton = document.getElementById("logoutButton");

const quizForm = document.getElementById("quizForm");
const quizFeedback = document.getElementById("quizFeedback");
const progressText = document.getElementById("progressText");
const progressFill = document.getElementById("progressFill");
const badgesContainer = document.getElementById("badgesContainer");

const btnTextSize = document.getElementById("btnTextSize");
const btnContrast = document.getElementById("btnContrast");
const btnDyslexia = document.getElementById("btnDyslexia");

const chatWindow = document.getElementById("chatWindow");
const chatButtons = document.querySelectorAll(".chat-options button");

let completedActivities = 0;
let badges = [];

const correctAnswers = {
  q1: "a",
  q2: "b",
  q3: "b"
};

const chatbotAnswers = {
  viaje: "Mi viaje buscaba llegar a Asia navegando hacia el oeste. En aquel momento, las rutas comerciales eran muy importantes. Sin embargo, el resultado histórico fue mucho más amplio y tuvo consecuencias profundas para Europa y para los pueblos originarios de América.",
  naves: "Las tres naves más conocidas del primer viaje fueron la Niña, la Pinta y la Santa María. La Santa María era la nave mayor y en ella viajaba Colón.",
  critica: "Hoy este proceso se estudia con mirada crítica porque no fue solo una aventura marítima. También implicó conquista, violencia, explotación, imposición cultural y enormes transformaciones para las poblaciones indígenas.",
  glosario: "Colonización significa ocupación y control de un territorio por parte de un grupo o Estado externo. Puede implicar dominio político, explotación económica e imposición cultural."
};

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!username || !password) {
    return;
  }

  studentName.textContent = username;
  loginSection.classList.add("hidden");
  dashboardSection.classList.remove("hidden");
  dashboardSection.focus();
});

logoutButton.addEventListener("click", function () {
  loginForm.reset();
  loginSection.classList.remove("hidden");
  dashboardSection.classList.add("hidden");
});

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
    completeActivity();
  } else {
    quizFeedback.className = "feedback warning";
    quizFeedback.textContent = `Resultado: ${score}/${total}. Conviene repasar el tema y repetir la actividad. Fíjate especialmente en las consecuencias históricas del proceso.`;
  }
});

function completeActivity() {
  if (completedActivities === 0) {
    completedActivities = 1;
    addBadge("Primera actividad completada");
    updateProgress();
  }
}

function addBadge(badgeName) {
  if (badges.includes(badgeName)) {
    return;
  }

  badges.push(badgeName);
  renderBadges();
}

function renderBadges() {
  badgesContainer.innerHTML = "";

  badges.forEach(function (badgeName) {
    const badge = document.createElement("span");
    badge.className = "badge";
    badge.textContent = badgeName;
    badgesContainer.appendChild(badge);
  });
}

function updateProgress() {
  progressText.textContent = "Has completado 1 actividad de prueba.";
  progressFill.style.width = "25%";
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

chatButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const questionKey = button.dataset.question;
    const questionText = button.textContent;
    const answer = chatbotAnswers[questionKey];

    addChatMessage(questionText, "user");
    addChatMessage(answer, "bot");
  });
});

function addChatMessage(message, type) {
  const paragraph = document.createElement("p");
  paragraph.className = type === "user" ? "user-message" : "bot-message";
  paragraph.textContent = message;
  chatWindow.appendChild(paragraph);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}