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

  const captainName = document.getElementById("captain-name-typed");
  var letters = /^[A-Za-z]+$/;

  var level = 0;

  var aye = document.getElementById("playAye");
  var blimey = document.getElementById("playBlimey");
  var cheer = document.getElementById("playCheer");
  var shiver = document.getElementById("playShiver");
  var bgAudio = document.getElementById("playAudioBackground");
  bgAudio.volume = 0.1;

  //   -------- Mute & Help Icons --------

  $(".fa-volume").mouseenter(function () {
    $('[data-toggle="tooltipVol"]').tooltip("show");
  });

  $(".fa-volume-mute").mouseenter(function () {
    $('[data-toggle="tooltipMute"]').tooltip("show");
  });

  $(".fa-question-circle").mouseenter(function () {
    $('[data-toggle="helpBtn"]').tooltip("show");
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

  //   -------- Logo Modal --------

  $(".heading-logo").hover(function () {
    $(".heading-logo").css("cursor", "pointer");
  });

  $(".heading-logo").click(function () {
    $("#headingTextModal").modal("show");
  });

  $("#restartGame").click(function () {
    window.location.reload();
  });

  //   -------- First Page Submit Button --------

  $(startBtn).click(function () {
    runSubmitPress();
  });

  $(captainName).keypress(function (event) {
    if (event.which == 13 || event.keyCode == 13) {
      runSubmitPress();
      return false;
    }
  });

  //   -------- Second Page --------

  function runSubmitPress() {
    if (captainName.value.length === 0 || !captainName.value.match(letters)) {
      $("#missingName").text("Please enter your name, using letters only");
    } else {
      $(welcomePageRules).addClass("hide");
      $(welcomePageStory).removeClass("hide");
      $("#heading-logo--gif").addClass("hide");
      $("#heading-logo--png").removeClass("hide");
      $("#volume-container").removeClass("hide");
      document.getElementById("captainName").innerHTML = captainName.value;
      bgAudio.play();
      bgAudio.muted = false;
      runWelcomePageStory();
    };
  }

  //   -------- Easy, Medium, Hard Button Choice & Shuffle Questions --------

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

  //   -------- Easy Questions Format --------

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

  //   -------- Easy Question Answer Button and Clues --------

  $(".easy-answer-button").on("click", function () {
    const chosenAnswer = this.id;
    const answerText = this.innerHTML;
    if (chosenAnswer == thisEasyQuestion.cor) {
      $("#correct").append(`${answerText}<br>`);
      $(this).addClass("correctAnswer");
      if (bgAudio.muted === false) {
        aye.play();
      }
    } else {
      $(this).addClass("wrongAnswer");
      if (bgAudio.muted === false) {
        blimey.play();
      }
    }
    if (level === 4) {
      setTimeout(function () {
        $(easyQuestionPage).addClass("hide");
        $("#map-page").removeClass("hide");
        $("#mapEasy").removeClass("hide");
        $(".easy-answer-button").removeClass("wrongAnswer");
        $(".easy-answer-button").removeClass("correctAnswer");
        initMap();
      }, 500);
    } else {
      setTimeout(function () {
        level = level + 1;
        $(".easy-answer-button").removeClass("wrongAnswer");
        $(".easy-answer-button").removeClass("correctAnswer");
        nextEasyQuestion();
      }, 500);
    }
  });

  //   -------- Med Questions Format --------

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

  //   -------- Med Question Answer Button and Clues --------

  $(".med-answer-button").on("click", function () {
    const chosenAnswer = this.id;
    const answerText = this.innerHTML;
    if (chosenAnswer == thisMedQuestion.cor) {
      $("#correct").append(`${answerText}<br>`);
      $(this).addClass("correctAnswer");
      if (bgAudio.muted === false) {
        aye.play();
      }
    } else {
      $(this).addClass("wrongAnswer");
      if (bgAudio.muted === false) {
        blimey.play();
      }
    }
    if (level === 4) {
      setTimeout(function () {
        $(medQuestionPage).addClass("hide");
        $("#map-page").removeClass("hide");
        $("#mapMed").removeClass("hide");
        $(".med-answer-button").removeClass("wrongAnswer");
        $(".med-answer-button").removeClass("correctAnswer");
        initMap();
      }, 500);
    } else {
      setTimeout(function () {
        level = level + 1;
        $(".med-answer-button").removeClass("wrongAnswer");
        $(".med-answer-button").removeClass("correctAnswer");
        nextMedQuestion();
      }, 500);
    }
  });

  //   -------- Hard Question Format --------

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

  //   -------- Hard Question Answer Button and Clues --------

  $(".hard-answer-button").on("click", function () {
    const chosenAnswer = this.id;
    const answerText = this.innerHTML;
    if (chosenAnswer == thisHardQuestion.cor) {
      $("#correct").append(`${answerText}<br>`);
      $(this).addClass("correctAnswer");
      if (bgAudio.muted === false) {
        aye.play();
      }
    } else {
      $(this).addClass("wrongAnswer");
      if (bgAudio.muted === false) {
        blimey.play();
      }
    }
    if (level === 4) {
      setTimeout(function () {
        $(hardQuestionPage).addClass("hide");
        $("#map-page").removeClass("hide");
        $("#mapHard").removeClass("hide");
        $(".hard-answer-button").removeClass("wrongAnswer");
        $(".hard-answer-button").removeClass("correctAnswer");
        initMap();
      }, 500);
    } else {
      setTimeout(function () {
        level = level + 1;
        $(".hard-answer-button").removeClass("wrongAnswer");
        $(".hard-answer-button").removeClass("correctAnswer");
        nextHardQuestion();
      }, 500);
    }
  });

  //   -------- To Final Page --------

  $("#winning-btn").click(function () {
    $("#final-page").removeClass("hide");
    $("#yesCaptain").removeClass("hide");
    $("#journey-page-win").addClass("hide");
    $("#winning-btn").addClass("hide");
    document.getElementById("captainNameWin").innerHTML = captainName.value;
    if (bgAudio.muted === false) {
      cheer.play();
    }
  });

  $("#losing-btn").click(function () {
    $("#final-page").removeClass("hide");
    $("#noCaptain").removeClass("hide");
    $("#journey-page-lose").addClass("hide");
    $("#losing-btn").addClass("hide");
    document.getElementById("captainNameLose").innerHTML = captainName.value;
    if (bgAudio.muted === false) {
      shiver.play();
    }
  });

  //   -------- Restart Game Button --------

  $("#restart").on("click", function () {
    window.location.reload(false);
  });
});