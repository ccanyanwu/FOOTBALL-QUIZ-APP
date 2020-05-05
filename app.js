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

  //counter to hold  current score 
  let currentScoreCounter = 0;

  let currentIndex,  
      sortQuestions;
      
//array of question object 
const questionArr = [
        {
            question : "Who won the Ballon d'Or in 2015?",
            choices : [
                {option:"Messi", correct: false},
                {option:"Ronaldo", correct: true}, 
                {option:"Neymar", correct: false}] 
            
        },
        {
            question : "Can you name the former Germany International who went on to become a professional wrestler in WWE?",
            choices : [
                {option:"Ter Stegen", correct: false},
                {option:"Tim Wiese", correct: true}, 
                {option:"Oliver Khan", correct: false}] 
            
        },
        {
            question : "Who is the oldest manager in Premier League history?",
            choices : [
                {option:"Roy Hodgson", correct: true},
                {option:"Alex Ferguson", correct: false}, 
                {option:"Pellegrini", correct: false}] 
            
        },
        {
            question : "Which country won the Russia 2018 World Cup?",
            choices : [
                {option:"Croatia", correct: false},
                {option:"Brazil", correct: false}, 
                {option:"France", correct: true}] 
            
        },
        {
            question : "“La Liga” is the name of which European country’s professional football association?",
            choices : [
                {option:"Italy", correct: false},
                {option:"Spain", correct: true}, 
                {option:"Germany", correct: false}] 
            
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

    //timer to delay loading of quiz page by milliseconds
    setTimeout(() => { 
        quizSection.classList.remove('hide');   
    }, 100);
    currentScoreCounter = 0;
    currentIndex = 0;

    //shuffles the questions
    sortQuestions = questionArr.sort( () => {
        return Math.random() - .5;  
    });
    nextQuestion();
} 

//resets the quiz questions
const resetState = () => {
    next.classList.add('hide');
    if (optionsHolder.firstChild) {
        optionsHolder.innerHTML = "";  
    }
}

//takes us to the next question
const nextQuestion = () => {
    resetState();
    showQuestions(sortQuestions[currentIndex]);   
}

//displays the questions on the click of next button
const showQuestions = (questionArr  => {
    question.innerText = questionArr.question; 
    questionArr.choices.forEach(choice => {
        const button = document.createElement('button'); 
        button.innerHTML = `<span>${choice.option}</span>`; 
        button.classList.add('abc');
        
        if (choice.correct) {
            button.dataset.correct = choice.correct;
            
        }
        button.addEventListener('click', checkAnswer); 
        optionsHolder.appendChild(button);
    });
    
});

// checks the answers and adds the result 
const checkAnswer = (event) => {
    selectedOption = event.target;
    correct = selectedOption.dataset.correct;
    if (correct) {
        
        currentScoreCounter += 20; 
        currentScores.textContent = `Your current score: ${currentScoreCounter}%`;
        currentScores.classList.remove('hide');
    

        correctAnsweredQuestionCounter ++;
        correctlyAnsweredQuestions.textContent = `Correctly answered questions: ${correctAnsweredQuestionCounter}/5`;
        correctlyAnsweredQuestions.classList.remove('hide'); 

    } else{
        currentScoreCounter += 0; 
        currentScores.textContent = `Your current score: ${currentScoreCounter}%`;
        currentScores.classList.remove('hide');
        

        correctAnsweredQuestionCounter +=0;
        correctlyAnsweredQuestions.textContent = `Correctly answered questions: ${correctAnsweredQuestionCounter}/5`;
        correctlyAnsweredQuestions.classList.remove('hide');
    }


    Array.from(optionsHolder.children).forEach(button => {
        setStatus(button, button.dataset.correct); 
    }); 

    

    if (sortQuestions.length > currentIndex + 1) {
        next.classList.remove('hide');
   
    } else {
        showResults(); 
    }



}

//this changes the color of the button
const setStatus = (element, correct) => {
    clearStatus(element); 
    if (correct) { 
        element.classList.add('right'); 
        element.classList.remove('wrong');
    }
     else {
        element.classList.add('wrong');  
    }
    element.setAttribute('disabled', 'disabled');
}

const clearStatus = (element) => {
    element.classList.remove('right');
    element.classList.remove('wrong'); 
}

//this shows the result
const showResults = () => {
    main.innerHTML = '';
    document.body.classList.add('final');
   // const finalMarkUp;
  currentScoreCounter;
    /*const finalMarkUp = `<div class="final blinking">
    <h2 class="final-score "> Your final score is ${currentScoreCounter}%</h2>
    <input type="button" name="play" id="play" class="blinking" value="PLAY AGAIN" />
  </div>`;*/
  if(currentScoreCounter <= 20){
     const finalMarkUp =  `<div class="final ">
    <h2 class="final-score blinking "> Your final score is ${currentScoreCounter}%</h2><p class="blink">you need whipping o!, anyway pay for your cable subscription and start watching from 1997</p>
    <input type="button" name="play" id="play" class="blinking" value="PLAY AGAIN" />
  </div>`
    main.insertAdjacentHTML('afterbegin', finalMarkUp);
  } else if(currentScoreCounter > 20 && currentScoreCounter <= 79){
       const finalMarkUp =  `<div class="final ">
    <h2 class="final-score blinking"> Your final score is ${currentScoreCounter}%</h2><p class="blink">you watch just because you want to charge your phone in viewing center</p>
    <input type="button" name="play" id="play" class="blinking" value="PLAY AGAIN" />
  </div>`
    main.insertAdjacentHTML('afterbegin', finalMarkUp);
      
  }else {
       finalMarkUp =  `<div class="final ">
    <h2 class="final-score blinking"> Your final score is ${currentScoreCounter}%</h2><p class="blink" {
        constructor() {
            this.prop = ""
        }
    }>tuale baba!!! Infact create your own quiz. I give up</p>
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
