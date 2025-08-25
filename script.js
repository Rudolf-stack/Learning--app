// 🌙 Toggle Dark Mode
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

// 📝 Quiz Data
const quizData = [
  {
    question: "What is 2 + 2?",
    options: ["3", "4", "5"],
    answer: "4"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Venus"],
    answer: "Mars"
  },
  {
    question: "What is the capital of Kenya?",
    options: ["Nairobi", "Mombasa", "Kisumu"],
    answer: "Nairobi"
  }
];

// 🧑‍🎓 Start Quiz
function startQuiz() {
  let quizContainer = document.getElementById("quiz");
  quizContainer.innerHTML = ""; // Clear old quiz

  quizData.forEach((q, index) => {
    let questionHTML = `
      <div class="question">
        <p><b>Q${index + 1}: ${q.question}</b></p>
        ${q.options.map(opt => `
          <label>
            <input type="radio" name="q${index}" value="${opt}">
            ${opt}
          </label><br>
        `).join("")}
      </div>
    `;
    quizContainer.innerHTML += questionHTML;
  });

  // Add Submit Button
  quizContainer.innerHTML += `
    <button onclick="submitQuiz()">Submit Quiz</button>
    <div id="result"></div>
  `;
}

// ✅ Submit Quiz
function submitQuiz() {
  let score = 0;
  quizData.forEach((q, index) => {
    let selected = document.querySelector(`input[name="q${index}"]:checked`);
    if (selected && selected.value === q.answer) {
      score++;
    }
  });

  let resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `<h3>You scored ${score} / ${quizData.length} 🎉</h3>`;
    }
                   
