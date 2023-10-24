// Define the array of questions, choices, and correct answers
const questions = [
    {
      question: "What does HTML stand for?",
      choices: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "Hyper Text Makeup Language"],
      correctAnswer: 0,
    },
    {
      question: "Which HTML tag is used to define an unordered list?",
      choices: ["<ol>", "<dl>", "<ul>", "<list>"],
      correctAnswer: 2,
    },
    {
      question: "Which CSS property is used to change the text color of an element?",
      choices: ["text-color", "color", "font-color", "text-style"],
      correctAnswer: 1,
    },
    {
      question: "In JavaScript, which keyword is used to declare a variable that cannot be reassigned?",
      choices: ["var", "let", "const", "mutable"],
      correctAnswer: 2,
    },
    {
      question: "Which HTML tag is used to create a hyperlink?",
      choices: ["<a>", "<link>", "<href>", "<hyper>"],
      correctAnswer: 0,
    },
    {
      question: "Which CSS property is used to add spacing around elements?",
      choices: ["margin", "padding", "border", "spacing"],
      correctAnswer: 0,
    },
    {
      question: "In JavaScript, what is the result of 10 + '5'?",
      choices: ["15", "105", "10 + 5", "Error"],
      correctAnswer: 1,
    },
    {
      question: "Which HTML tag is used to define a table row?",
      choices: ["<tr>", "<table>", "<td>", "<th>"],
      correctAnswer: 0,
    },
    {
      question: "What is the correct way to comment out a single line of CSS code?",
      choices: ["// This is a comment", "/* This is a comment */", "' This is a comment", "<!-- This is a comment -->"],
      correctAnswer: 1,
    },
    {
      question: "In JavaScript, how do you declare a function named 'myFunction'?",
      choices: ["function:myFunction()", "myFunction():function", "function myFunction()", "myFunction()"],
      correctAnswer: 2,
    },
  ];
  
  // Define a class to represent the Quiz
  class Quiz {
    constructor(questions) {
      this.questions = questions;
      this.currentQuestionIndex = 0;
      this.score = 0;
    }
  
    get currentQuestion() {
      return this.questions[this.currentQuestionIndex];
    }
  
    isQuizEnd() {
      return this.currentQuestionIndex === this.questions.length;
    }
  
    checkAnswer(selectedChoice) {
      if (selectedChoice === this.currentQuestion.correctAnswer) {
        this.score++;
      }
      this.currentQuestionIndex++;
    }
  
    getFinalScore() {
      return this.score;
    }
  }
  
  // Create a new Quiz instance
  const quiz = new Quiz(questions);
  
  // Function to display the current question
  function displayQuestion() {
    const questionElement = document.getElementById("question");
    const choicesContainer = document.querySelector(".choice-container");
  
    questionElement.textContent = quiz.currentQuestion.question;
    choicesContainer.innerHTML = "";
  
    quiz.currentQuestion.choices.forEach((choice, index) => {
      const choiceDiv = document.createElement("div");
      choiceDiv.classList.add("choice-container");
      choiceDiv.innerHTML = `
        <p class="choice-prefix">${String.fromCharCode(65 + index)}</p>
        <p class="choice-text">${choice}</p>
      `;
      choiceDiv.addEventListener("click", () => handleChoiceClick(index));
      choicesContainer.appendChild(choiceDiv);
    });
  }
  
  // Function to handle choice selection
  function handleChoiceClick(selectedIndex) {
    quiz.checkAnswer(selectedIndex);
  
    if (quiz.isQuizEnd()) {
      displayFinalScore();
    } else {
      displayQuestion();
    }
  }
  
  // Function to display the final score and message
  function displayFinalScore() {
    const questionElement = document.getElementById("question");
    const choicesContainer = document.querySelector(".choice-container");
  
    questionElement.textContent = `Your Final Score: ${quiz.getFinalScore()}/10`;
  
    if (quiz.getFinalScore() < 5) {
      choicesContainer.textContent = "You scored less than 5/10. Please take the quiz again.";
    } else {
      choicesContainer.textContent = "Congratulations! You completed the quiz.";
    }
  }
  
  // Initial display of the first question
  displayQuestion();
  
