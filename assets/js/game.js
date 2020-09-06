$(document).ready(function () {
  const startBtn = document.getElementById("start-btn");
  const welcomePageRules = document.getElementById("welcome-page-rules");
  const welcomePageStory = document.getElementById("welcome-page-story");
  const easyClues = document.getElementById("start-game-easy");
  const medClues = document.getElementById("start-game-med");
  const hardClues = document.getElementById("start-game-hard");
  const easyQuestionPage = document.getElementById("question-page-easy");
  const medQuestionPage = document.getElementById("question-page-med");
  const hardQuestionPage = document.getElementById("question-page-hard");
  const easyQuestion = document.getElementById("easy-question");
  const answerButton = document.getElementsByClassName("answer-button");
  var shuffleEasyQuestions = [];
  var currentEasyQuestion;
  var thisEasyQuestion;
  var captainName;
  var level = 0;



  $(startBtn).click(function () {
      captainName = document.getElementById('captain-name-typed').value;
      if (captainName.length === 0) {
          $("#missingName").text("Please enter your name");
      } else {
    $(welcomePageRules).addClass("hide");
    $(welcomePageStory).removeClass("hide");
    document.getElementById('captainName').innerHTML = captainName;
    runWelcomePageStory();
    }
  });

  function runWelcomePageStory() {
    $(easyClues).click(function () {
      $(welcomePageStory).addClass("hide");
      shuffleEasyQuestions = questionEasy.sort(() => Math.random() - 0.5);
      currentEasyQuestion = 0;
      $(easyQuestionPage).removeClass("hide");
      nextEasyQuestion();
    });
  }

  function nextEasyQuestion() {
    showEasyQuestion(shuffleEasyQuestions[currentEasyQuestion]);
  }

  function showEasyQuestion(question) {
    thisEasyQuestion = {
    q: shuffleEasyQuestions[level].question,
    a: shuffleEasyQuestions[level].easyA,
    b: shuffleEasyQuestions[level].easyB,
    c: shuffleEasyQuestions[level].easyC,
    correct: shuffleEasyQuestions[level].correct
    };

        $("#easy-question").text(thisEasyQuestion.q);
        $("#easyA").text(thisEasyQuestion.a);
        $("#easyB").text(thisEasyQuestion.b);
        $("#easyC").text(thisEasyQuestion.c);
       

  }

  $('.answer-button').click(
    function() {
        const chosenAnswer = this.value;
        if (level === 2) {
            $(easyQuestionPage).addClass("hide");
            $("#map-page").removeClass("hide");
        } else {
            $('#easy-correct').text(`${thisEasyQuestion.correct}`);
            if (chosenAnswer == thisEasyQuestion.correct) {
                
                level = level + 1;
                nextEasyQuestion();
            } else {
                level = level + 1;
                nextEasyQuestion();
            }
        }
    }
);

  // ------ QUESTIONS ------

  const questionEasy = [
    {
      question: "Easy question 1",
      "easyA": "easy answer 1",
      "easyB": "easy answer 2",
      "easyC": "easy answer 3",
      "correct": "easyA"
    },
    {
      question: "Easy question 2",
      "easyA": "easy answer 1",
      "easyB": "easy answer 2",
      "easyC": "easy answer 3",
      "correct": "easyB"
    },
    {
      question: "Easy question 3",
      "easyA": "easy answer 1",
      "easyB": "easy answer 2",
      "easyC": "easy answer 3",
      "correct": "easyC"
    },
  ];

  const questionMed = [
    {
      id: 1,
      question: "Med question 1",
      answers: {
        a: "answer 1",
        b: "answer 2",
        c: "answer 3",
      },
      correctAnswer: "b",
    },
  ];

  const questionHard = [
    {
      id: 1,
      question: "Hard question 1",
      answers: {
        a: "answer 1",
        b: "answer 2",
        c: "answer 3",
      },
      correctAnswer: "c",
    },
  ];
});
