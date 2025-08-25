// 🌙 Toggle Dark Mode
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

// 📝 Quiz System
const quizData = {
  math: [
    {
      question: "What is 5 + 7?",
      options: ["10", "11", "12", "13"],
      answer: "12"
    },
    {
      question: "Solve: 9 × 3",
      options: ["18", "27", "30", "21"],
      answer: "27"
    }
  ],
  english: [
    {
      question: "Choose the correct sentence:",
      options: ["She go to school", "She goes to school", "She going to school"],
      answer: "She goes to school"
    },
    {
      question: "What is the plural of 'Child'?",
      options: ["Childs", "Childes", "Children", "Childer"],
      answer: "Children"
    }
  ]
};

let currentQuiz = [];
let currentQuestion = 0;
let score = 0;

// Start Quiz
function startQuiz() {
  const subject = prompt("Choose a subject: Math or English").toLowerCase();
  if (subject === "math") {
    currentQuiz = quizData.math;
  } else if (subject === "english") {
    currentQuiz = quizData.english;
  } else {
    alert("Invalid choice! Please type 'Math' or 'English'.");
    return;
  }

  currentQuestion = 0;
  score = 0;
  loadQuestion();
}

// Load Question
function loadQuestion() {
  const quizContainer = document.getElementById("quiz");
  if (currentQuestion < currentQuiz.length) {
    const q = currentQuiz[currentQuestion];
    quizContainer.innerHTML = `
      <h3>${q.question}</h3>
      ${q.options.map((opt, i) => 
        `<button onclick="checkAnswer('${opt}')">${opt}</button>`
      ).join("<br>")}
    `;
  } else {
    quizContainer.innerHTML = `
      <h3>✅ Quiz Finished!</h3>
      <p>Your Score: ${score}/${currentQuiz.length}</p>
      <button onclick="startQuiz()">Restart Quiz</button>
    `;
  }
}

// Check Answer
function checkAnswer(answer) {
  if (answer === currentQuiz[currentQuestion].answer) {
    score++;
    alert("🎉 Correct!");
  } else {
    alert("❌ Wrong! The correct answer is: " + currentQuiz[currentQuestion].answer);
  }
  currentQuestion++;
  loadQuestion();
}
