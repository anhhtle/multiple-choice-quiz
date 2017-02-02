var state = {
  userName : "",
  userChoice : "",
  answerCorrect : 0,
  questionNumber : 1,
  
  questionArray : ["nothing",
    {
      question : 'Which of these is not a football team?',
      choices: ['Eagle', 'Falcon', 'Dolphine', 'Tom Brady'],
      answer : '4',
    },
    {
      question : 'Pick the NFL player',
      choices: ['Serena William', 'Steph Curry', 'Tiger Wood', 'Tom Brady'],
      answer : '4',
    },
    {
      question : 'Who is the most Patriotic player?',
      choices: ['Collin Kap.', 'Derek Carr', 'Flaggy McEagle', 'Tom Brady'],
      answer : '4',
    },
    {
      question : 'Who was the oldest player in this year ProBowl?',
      choices: ['David Johnson', 'Benjamin Button', 'Old-man Logan', 'Tom Brady'],
      answer : '4',
    },
    {
      question : 'Most popular person in Boston?',
      choices: ['Kevin Garnet', 'Larry Bird', 'Paul Pierce', 'Tom Brady'],
      answer : '4',
    },
    {
      question : "Most famous Tom",
      choices: ['Tom and Jerry', 'Tom Hank', 'Pepping Tom', 'Tom Brady'],
      answer : '4',
    },
    {
      question : 'Most famous Brady',
      choices: ['the Brady Bunch', 'THE Brady Bunch', 'Bill Brady', 'Tom Brady'],
      answer : '4',
    },
    {
      question : 'Two.. more.. questions',
      choices: ['Two', 'more', 'questions', 'Tom Brady'],
      answer : '4',
    },
    {
      question : 'Question 9',
      choices: ['One', 'more', 'question', 'Tom Brady'],
      answer : '4',
    },
    {
      question : 'Just pick Tom Brady',
      choices: ['No', 'Nope', 'none', 'Tom Brady'],
      answer : '4',
    }
  ] 
}


function renderQuestion(state) {
  $('.container h2').text(state.questionArray[state.questionNumber].question);
  $('#label-1').text(state.questionArray[state.questionNumber].choices[0]);
  $('#label-2').text(state.questionArray[state.questionNumber].choices[1]);
  $('#label-3').text(state.questionArray[state.questionNumber].choices[2]);
  $('#label-4').text(state.questionArray[state.questionNumber].choices[3]);
  $('input[type=radio]').prop('checked',false);
  $('#question-number').text(state.questionNumber);
}

function getUserChoice(state) {
  state.userChoice = $('input[type=radio]:checked').val();
}

function checkUserAnswer(state) {
  if(state.userChoice === state.questionArray[state.questionNumber].answer){
    state.answerCorrect++;
    renderCorrectAnswer(state);
    state.questionNumber++;
  }
  else {
    renderWrongtAnswer(state);
    state.questionNumber++;
  }
  state.userChoice = "";
  $('#submit-button').prop("disabled",true);
}


 $('#next-button').click(function(event){
   $('.result-div').toggleClass('hidden');
   $('#submit-button').prop("disabled",false);
   if(state.questionNumber === 11){
     window.location.href = "index3.html";
   }
   renderQuestion(state);
 })


function renderCorrectAnswer(state) {
  var location = $('.result');
  location.text('You are correct! Press next to continue')
  location.parent().toggleClass('hidden');
  $('.answer-correct').text(state.answerCorrect + '/' + state.questionNumber);
}

function renderWrongtAnswer(state) {
  var location = $('.result');
  location.text('Nope! Press next to continue')
  location.parent().toggleClass('hidden');
  $('.answer-correct').text(state.answerCorrect + '/' + state.questionNumber);
}

//submit button
$('#quiz-form').submit(function(event) {
    event.preventDefault();
    getUserChoice(state);
    checkUserAnswer(state);
  })

$('#sign-in-form').submit(function(event) {
  event.preventDefault();
  state.userName = $('#user-name').val();
  window.location.href = "index2.html";
});

$(function(){
  renderQuestion(state);
})