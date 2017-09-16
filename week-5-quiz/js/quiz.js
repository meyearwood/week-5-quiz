(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
  const myQuestions = [
    {
      question: "Which of these is NOT one of Tim Taylor's sons from Home Improvement?",
      answers: {
        a: "Randy",
        b: "Brad",
        c: "Joe",
        d: "Mark",
      },
      correctAnswer: "c"
    },
    {
      question: "Which show's theme song started with the line: When I wake up in the morning and the 'larm gives out a warning?",
      answers: {
        a: "Degrassi Jr High",
        b: "Saved by the Bell",
        c: "Boy Meets World",
        d: "Rugrats",
      },
      correctAnswer: "b"
    },
    {
      question: "Full House is set in which city?",
      answers: {
        a: "Los Angeles",
        b: "Detroit",
        c: "New York",
        d: "San Francisco",
      },
      correctAnswer: "d"
    },

    {
      question: "Which Big Bang Theory actress starred in Blossom?",
      answers: {
        a: "Mayim Bialik",
        b: "Kaley Cuoco",
        c: "Aarti Mann",
        d: "Melissa Rauch",
      },
      correctAnswer: "a"
    },

    {
      question: "What house number do the Simpsons live at?",
      answers: {
        a: "740",
        b: "741",
        c: "742",
        d: "743",
      },
      correctAnswer: "c"
    },

    {
      question: "'Did I do that?' is the catchphrase from which TV show?",
      answers: {
        a: "Doug",
        b: "Rugrats",
        c: "Family Matters",
        d: "Sabrina, The Teenage Witch",
      },
      correctAnswer: "c"
    },

    {
      question: "In the TV show Martin starring Martin Lawrence, what was the name of the neighbor that climbed the stairs to enter Martin's appartment through the window",
      answers: {
        a: "Bruh Mane",
        b: "Tommy",
        c: "Pam",
        d: "Clarence",
      },
      correctAnswer: "a"
    },
  ];

  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
