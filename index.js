const quizDiv = document.getElementById("mcq__div");
const submitBtn = document.getElementById("submit__btn");
const resultDiv = document.getElementById("result__div");
const myQuestions = [
  {
    question: "Javascript is an _______ language?",
    answers: {
      a: "Object-Oriented",
      b: "Object-Based",
      c: "Procedural",
      d: "None of Above",
    },
    correctAnswer: "a",
  },
  {
    question:
      "What keyword is used to check whether a given property is valid or not?",
    answers: {
      a: "in",
      b: "is in",
      c: "exists",
      d: "lies",
    },
    correctAnswer: "a",
  },
  {
    question: "What is the use of the &lt;noscript&gt; tag in Javascript?",
    answers: {
      a: "The contents are displayed by non-JS based browsers",
      b: "Clears all the cookies and cache.",
      c: "Both A and B",
      d: "None of Above",
    },
    correctAnswer: "a",
  },
  {
    question: "What does the Javascript “debugger” statement do?",
    answers: {
      a: "It will debug all the errors in the program at runtime.",
      b: "It acts as a breakpoint in a program.",
      c: "It will debug error in the current statement if any.",
      d: "All of the Above",
    },
    correctAnswer: "b",
  },
  {
    question:
      "What will be the output of the following code snippet print(NaN === NaN)?",
    answers: {
      a: "true",
      b: "false",
      c: "undefined",
      d: "error",
    },
    correctAnswer: "b",
  },
];

const createQuiz = () => {
  const output = [];
  myQuestions.forEach((currQues, quesNumber) => {
    const answers = [];
    for (letter in currQues.answers) {
      answers.push(
        `<label>
      <input type="radio" name="question${quesNumber}" value="${letter}"/>
      ${letter}:${currQues.answers[letter]}
      </label> <br/>
      `
      );
    }
    output.push(
      `<div class="question">${currQues.question}</div>
      <div class="answer">${answers.join("")}</div>`
    );
  });
  quizDiv.innerHTML = output.join("");
};
const showAnswers = () => {
  const ansContainers = quizDiv.querySelectorAll(".answer");
  let correct = 0;
  myQuestions.forEach((currQues, quesNum) => {
    const ansContainer = ansContainers[quesNum];
    const select = `input[name=question${quesNum}]:checked`;
    const userAns = (ansContainer.querySelector(select) || {}).value;
    if (userAns == currQues.correctAnswer) {
      correct++;
    }
  });

  // alert(`You've scored ${correct}`);
  if (correct >= 4) {
    alert("Yes");
  } else if (correct <= 3 && correct >= 2) {
    alert("Maybe");
  } else {
    alert("No");
  }
};
createQuiz();
submitBtn.addEventListener("click", () => {
  showAnswers();
});
