
const mcqs = [
  {
    mcq: "Which planet do we live on?",
    options: ["Earth", "Venus", "Jupiter", "Saturn"],
    keys: "A",
  },
  {
    mcq: "How many days are there in a week?",
    options: ["7", "8", "5", "10"],
    keys: "A",
  },
  {
    mcq: "Which vehicle can fly in the sky?",
    options: ["Car", "Bicycle", "Airplane", "Train"],
    keys: "C",
  },
  {
    mcq: "Which language is primarily used for styling web pages?",
    options: ["HTML", "CSS", "JS", "Dart"],
    keys: "B",
  },
  {
    mcq: "What does HTML stand for?",
    options: ["Hyper Text Markup Language", "High-Level Text Markup Language", "Hyperlink and Text Markup Language", "Hyper Text Multi Language"],
    keys: "A",
  }
];

let activeMcq = 0;
let score = 0;

mcqsQuestions();

function mcqsQuestions() {
  const mcqQuestion = document.getElementById("mcq");
  const mcqOptions = [
    document.getElementById("optionA"),
    document.getElementById("optionB"),
    document.getElementById("optionC"),
    document.getElementById("optionD"),
  ];

  mcqQuestion.textContent = mcqs[activeMcq].mcq;

  for (let i = 0; i < mcqOptions.length; i++) {
    mcqOptions[i].textContent = mcqs[activeMcq].options[i];
  }

  const resetRadios = document.querySelectorAll('input[name="option"]');
  for (let i = 0; i < resetRadios.length; i++) {
    resetRadios[i].checked = false;
  }

  const nextButton = document.getElementById("next-button");
  if (activeMcq === mcqs.length - 1) {
    nextButton.textContent = "Finish";
  } else {
    nextButton.textContent = "Next";
  }
}

document.getElementById("next-button").addEventListener("click", nextMcq);
document.getElementById("prev-button").addEventListener("click", prevMcq);

const radioButtons = document.querySelectorAll('input[name="option"]');
for (let i = 0; i < radioButtons.length; i++) {
  radioButtons[i].addEventListener("change", function () {
    document.getElementById("next-button").disabled = false;
  });
}

function nextMcq() {
  const optionChoose = document.querySelector(
    'input[name="option"]:checked'
  ).value;

  if (optionChoose === mcqs[activeMcq].keys) {
    score++;
  }

  activeMcq++;

  if (activeMcq < mcqs.length) {
    mcqsQuestions();
  } else {
    results();
  }
}

function results() {
  const scoreResult = document.querySelector(".container");
  const perc = ((score / mcqs.length) * 100);
  const percentage = perc.toFixed(2);

  scoreResult.innerHTML = `
    <h1>Your Score: ${score}/${mcqs.length}</h1>
    <h2>Percentage: ${percentage}%</h2>
  `;
}

function prevMcq() {
  if (activeMcq > 0) {
    activeMcq--;
    mcqsQuestions();
  }
}


