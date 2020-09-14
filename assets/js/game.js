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

  var shuffleEasyQuestions = [];
  var currentEasyQuestion;
  var thisEasyQuestion;

  var shuffleMedQuestions = [];
  var currentMedQuestion;
  var thisMedQuestion;

  var shuffleHardQuestions = [];
  var currentHardQuestion;
  var thisHardQuestion;

  var captainName;
  var level = 0;

//   -------- Background Audio --------

  var bgAudio = document.getElementById("playAudioBackground");
  bgAudio.volume = 0.3;


  $(".fa-volume").mouseenter(function() {
    $('[data-toggle="tooltipVol"]').tooltip("show")
  });

    $(".fa-volume-mute").mouseenter(function() {
    $('[data-toggle="tooltipMute"]').tooltip("show")
  });

      $(".fa-question-circle").mouseenter(function() {
    $('[data-toggle="helpBtn"]').tooltip("show")
  });

  $(".fa-volume").click(function () {
    $("#volume-container").addClass("hide");
    $("#mute-container").removeClass("hide");
    bgAudio.muted = true;
  });

    $(".fa-volume-mute").click(function () {
    $("#mute-container").addClass("hide");
    $("#volume-container").removeClass("hide");
    bgAudio.muted = false;
  });

  $(".heading-logo").hover(function () {
    $(".heading-logo").css("cursor", "pointer");
  });

  $(".heading-logo").click(function () {
    $("#headingTextModal").modal("show");
  });

  $("#restartGame").click(function () {
    window.location.reload();
  });

  $(startBtn).click(function () {
    captainName = document.getElementById("captain-name-typed").value;
    if (captainName.length === 0) {
      $("#missingName").text("Please enter your name");
    } else {
      $(welcomePageRules).addClass("hide");
      $(welcomePageStory).removeClass("hide");
      $("#heading-logo--gif").addClass("hide");
      $("#heading-logo--png").removeClass("hide");
      $("#volume-container").removeClass("hide");
      bgAudio.play();
      bgAudio.muted = false;
      document.getElementById("captainName").innerHTML = captainName;
      runWelcomePageStory();
    }
  });

  function runWelcomePageStory() {
    $(easyClues).click(function () {
      $(welcomePageStory).addClass("hide");
      shuffleEasyQuestions = questionEasy.sort(() => Math.random() - 0.5);
      currentEasyQuestion = 0;
      $(easyQuestionPage).removeClass("hide");
      $("#correct-answers").removeClass("hide");
      nextEasyQuestion();
    });
    $(medClues).click(function () {
      $(welcomePageStory).addClass("hide");
      shuffleMedQuestions = questionMed.sort(() => Math.random() - 0.5);
      currentMedQuestion = 0;
      $(medQuestionPage).removeClass("hide");
      $("#correct-answers").removeClass("hide");
      nextMedQuestion();
    });
    $(hardClues).click(function () {
      $(welcomePageStory).addClass("hide");
      shuffleHardQuestions = questionHard.sort(() => Math.random() - 0.5);
      currentHardQuestion = 0;
      $(hardQuestionPage).removeClass("hide");
      $("#correct-answers").removeClass("hide");
      nextHardQuestion();
    });
  }

  //   --------- Easy Questions ----------

  function nextEasyQuestion() {
    showEasyQuestion(shuffleEasyQuestions[currentEasyQuestion]);
  }

  function showEasyQuestion(questionEasy) {
    thisEasyQuestion = {
      q: shuffleEasyQuestions[level].question,
      a: shuffleEasyQuestions[level].easyA,
      b: shuffleEasyQuestions[level].easyB,
      c: shuffleEasyQuestions[level].easyC,
      cor: shuffleEasyQuestions[level].correct,
    };

    $("#easy-question").text(thisEasyQuestion.q);
    $("#easyA").text(thisEasyQuestion.a);
    $("#easyB").text(thisEasyQuestion.b);
    $("#easyC").text(thisEasyQuestion.c);
  }

  $(".easy-answer-button").on("click", function () {
    const chosenAnswer = this.id;
    const answerText = this.innerHTML;
    if (chosenAnswer == thisEasyQuestion.cor) {
      $("#correct").append(`${answerText}<br>`);
    } else {
      console.log("wrong");
    }
    if (level === 4) {
      $(easyQuestionPage).addClass("hide");
      $("#map-page").removeClass("hide");
      $("#mapEasy").removeClass("hide");
      initMap();
    } else {
      level = level + 1;
      nextEasyQuestion();
    }
  });

  //   --------- Med Questions ----------

  function nextMedQuestion() {
    showMedQuestion(shuffleMedQuestions[currentMedQuestion]);
  }

  function showMedQuestion(questionMed) {
    thisMedQuestion = {
      q: shuffleMedQuestions[level].question,
      a: shuffleMedQuestions[level].medA,
      b: shuffleMedQuestions[level].medB,
      c: shuffleMedQuestions[level].medC,
      cor: shuffleMedQuestions[level].correct,
    };

    $("#med-question").text(thisMedQuestion.q);
    $("#medA").text(thisMedQuestion.a);
    $("#medB").text(thisMedQuestion.b);
    $("#medC").text(thisMedQuestion.c);
  }

  $(".med-answer-button").on("click", function () {
    const chosenAnswer = this.id;
    const answerText = this.innerHTML;
    if (chosenAnswer == thisMedQuestion.cor) {
      $("#correct").append(`${answerText}<br>`);
    } else {
      console.log("wrong");
    }
    if (level === 4) {
      $(medQuestionPage).addClass("hide");
      $("#map-page").removeClass("hide");
      $("#mapMed").removeClass("hide");
      initMap();
    } else {
      level = level + 1;
      nextMedQuestion();
    }
  });

  //   --------- Hard Questions ----------

  function nextHardQuestion() {
    showHardQuestion(shuffleHardQuestions[currentHardQuestion]);
  }

  function showHardQuestion(questionHard) {
    thisHardQuestion = {
      q: shuffleHardQuestions[level].question,
      a: shuffleHardQuestions[level].hardA,
      b: shuffleHardQuestions[level].hardB,
      c: shuffleHardQuestions[level].hardC,
      cor: shuffleHardQuestions[level].correct,
    };

    $("#hard-question").text(thisHardQuestion.q);
    $("#hardA").text(thisHardQuestion.a);
    $("#hardB").text(thisHardQuestion.b);
    $("#hardC").text(thisHardQuestion.c);
  }

  $(".hard-answer-button").on("click", function () {
    const chosenAnswer = this.id;
    const answerText = this.innerHTML;
    if (chosenAnswer == thisHardQuestion.cor) {
      $("#correct").append(`${answerText}<br>`);
    } else {
      console.log("wrong");
    }
    if (level === 4) {
      $(hardQuestionPage).addClass("hide");
      $("#map-page").removeClass("hide");
      $("#mapHard").removeClass("hide");
      initMap();
    } else {
      level = level + 1;
      nextHardQuestion();
    }
  });

  //   -------- restart button ----------

  $("#restart").on("click", function () {
    window.location.reload();
  });
});
