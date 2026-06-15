// Quiz simples sobre agronegócio sustentável

let questions = [
  {
    question: "O que significa agronegócio equilibrado?",
    options: ["Produzir sem limites", "Equilibrar produção e meio ambiente", "Apenas exportar alimentos"],
    answer: 1
  },
  {
    question: "Qual prática ajuda a sustentabilidade no campo?",
    options: ["Desmatamento", "Monocultura sem controle", "Rotação de culturas"],
    answer: 2
  },
  {
    question: "Por que a sustentabilidade é importante?",
    options: ["Para aumentar o desperdício", "Para preservar recursos naturais", "Para reduzir a produção"],
    answer: 1
  }
];

let current = 0;
let score = 0;
let started = false;

function startQuiz() {
  current = 0;
  score = 0;
  started = true;
  showQuestion();
}

function showQuestion() {
  let q = questions[current];
  document.getElementById("question").innerHTML =
    q.question +
    "<br><br>" +
    q.options.map((opt, i) =>
      `<button onclick="checkAnswer(${i})">${opt}</button>`
    ).join("");
}

function checkAnswer(selected) {
  if (!started) return;

  if (selected === questions[current].answer) {
    score++;
  }

  nextQuestion();
}

function nextQuestion() {
  if (!started) return;

  current++;

  if (current < questions.length) {
    showQuestion();
  } else {
    document.getElementById("question").innerHTML = "Quiz finalizado!";
    document.getElementById("score").innerHTML =
      `Sua pontuação: ${score} de ${questions.length}`;
    started = false;
  }
}
