//selecting elements from the dom 
const start = document.querySelector('#start'),
      main = document.querySelector('main'),
      header = document.querySelector('.header'),
      instruction = document.querySelector('.instruction'), 
      quizSection = document.querySelector('.quiz'),
      question = document.querySelector('.question'),
      next = document.querySelector('#next'),
      optionsHolder = document.querySelector('div.options'),
      correctlyAnsweredQuestions = document.querySelector('p.correct'),
      currentScores = document.querySelector('p.scores'),
      finalScore = document.querySelector('.final'),
      playAgain = document.querySelector('input#play'),
      last = document.querySelector('.last');
 
 //counter to hold final score 
 let finalScoreCounter = 0;
 
 //counter to hold number of correctly answered questions 
 let correctAnsweredQuestionCounter = 0;

  //counter to hold current score 
  let currentScoreCounter = 0;

  let currentIndex,
      activeQuestion,
      sortQuestions;
   
  // all 3 choices 
  let choice1,
      choice2,
      choice3;
      
//array of question object 
const questionArr = [
        {
            question : "Who won the Ballon d'Or in 2015?",
            choices : ["Messi", "Ronaldo", "Neymar"], 
            answer : 2
        },
        {
            question : "Can you name the former Germany International who went on to become a professional wrestler in WWE?",
            choices : ["Ter Stegen", "Tim Wiese","Oliver Khan"],
            answer : 2
    
        },
        {
            question : "Who is the oldest manager in Premier League history?",
            choices : ["Roy Hodgson", "Alex Ferguson", "Pellegrini"],
            answer : 1
            
        },
        {
            question : "Which country won the Russia 2018 World Cup?",
            choices : ["Croatia", "Brazil", "France"],
            answer : 3
            
        },
        {
            question : "“La Liga” is the name of which European country’s professional football association?",
            choices : ["Italy", "Spain", "Germany"], 
            answer : 2
            
        }
    ]
       
//function to hold all event Listeners 
const eventListeners =()=>{
    start.addEventListener('click',startQuiz);
    next.addEventListener('click', nextQuestion);
}


//this begins the quiz 
const startQuiz = () =>{
    start.classList.add('hide');
    header.classList.add('hide');
    instruction.classList.add('hide');
    currentScores.classList.remove('hide');
    correctlyAnsweredQuestions.classList.remove('hide');
 
    //timer to delay loading of quiz page by milliseconds
    setTimeout(() => { 
        quizSection.classList.remove('hide');   
    }, 100);
    currentScoreCounter = 0;
    currentIndex = 0;

    //shuffles the questions
    sortQuestions = questionArr.sort( () => {
        return Math.random() - 0.5;  
    });
    nextQuestion();
} 

//resets the quiz questions and hides next button 
const resetState = () => {
    next.classList.add('hide');
    if (optionsHolder.firstChild) {
        optionsHolder.innerHTML = "";  
    }
};

//takes us to the next question
const nextQuestion = () => {
    resetState();
    activeQuestion = sortQuestions[currentIndex];
    showQuestions(activeQuestion);   
}

//displays the questions on the click of next button
const showQuestions = (questionArr) => {
    question.textContent = questionArr.question;
    
    questionArr.choices.forEach((choice, index) => {
        index++;
        const button = document.createElement('button'); 
        button.innerHTML = `<span>${choice}</span>`; 
        button.classList.add('abc');
        button.classList.add(`abc-${index}`);
        optionsHolder.classList.remove('disable');
        optionsHolder.appendChild(button);
        if (questionArr.answer === index) {
            button.dataset.correct = questionArr.answer;
        }
        choice1 = document.querySelector('.abc-1');
        choice2 = document.querySelector('.abc-2');
        choice3 = document.querySelector('.abc-3');
        button.addEventListener('click', checkAnswer);     
    });
    
};

// checks the answers and adds the result 
const checkAnswer = (event) => {
    const selectedOption = event.target;
    const correct = selectedOption.dataset.correct;
    if (correct) {
        correctAnsweredQuestionCounter ++;
        currentScoreCounter += 20; 
        correctlyAnsweredQuestions.textContent = `Correctly answered questions: ${correctAnsweredQuestionCounter}/5`;
        currentScores.textContent = `Your current score: ${currentScoreCounter}%`;
     optionsHolder.classList.add('disable');
        selectedOption.classList.add('right');
    } else{
        correctAnsweredQuestionCounter +=0;
        currentScoreCounter += 0; 
        currentScores.textContent = `Your current score: ${currentScoreCounter}%`;
        //currentScores.classList.remove('hide');
     
        correctlyAnsweredQuestions.textContent = `Correctly answered questions: ${correctAnsweredQuestionCounter}/5`
        optionsHolder.classList.add('disable');
        selectedOption.classList.add('wrong');
        
        if (activeQuestion.answer === 1) {
            choice1.classList.add('right');
        }else if(activeQuestion.answer === 2) {
            choice2.classList.add('right');
        }else if(activeQuestion.answer === 3){
            choice3.classList.add('right');
        } 

    }

    optionsHolder.setAttribute('disabled','disabled');
    
    if (sortQuestions.length > currentIndex + 1) {
        next.classList.remove('hide');
   
    } else {
        showResults(); 
    }
}

//this shows the result
const showResults = () => {
    main.innerHTML = '';
    document.body.classList.add('final');
  currentScoreCounter;
  
  if(currentScoreCounter <= 20){
     const finalMarkUp = `<div class="final ">
    <h2 class="final-score blinking "> Your final score is ${currentScoreCounter}%</h2><p class="blink final">E go Be! Find your strength </p>
    <input type="button" name="play" id="play" class="blinking" value="PLAY AGAIN" />
  </div>`
    main.insertAdjacentHTML('afterbegin', finalMarkUp);
  } else if(currentScoreCounter > 20 && currentScoreCounter <= 79){
       const finalMarkUp = `<div class="final ">
    <h2 class="final-score blinking"> Your final score is ${currentScoreCounter}%</h2><p class="blink final">Newbie! You try sha. Go again</p>
    <input type="button" name="play" id="play" class="blinking" value="PLAY AGAIN" />
  </div>`
    main.insertAdjacentHTML('afterbegin', finalMarkUp);
      
  }else {
       finalMarkUp = `<div class="final ">
    <h2 class="final-score blinking"> Your final score is ${currentScoreCounter}%</h2><p class="blink final">tuale!!!, Sabinus. Infact go and coach arsenal. I give up</p>
    <input type="button" name="play" id="play" class="blinking" value="PLAY AGAIN" />
  </div>`
    main.insertAdjacentHTML('afterbegin', finalMarkUp);
      
  }
    
    document.getElementById('play').addEventListener('click', () => {
        window.location.reload(); 
 }); 
   
}

next.addEventListener('click', () => {
    currentIndex++;
    nextQuestion();  
});

//activates all event Listeners 
eventListeners();

