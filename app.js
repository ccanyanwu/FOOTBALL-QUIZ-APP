//selecting elements from the dom 
const start = document.querySelector('#start'),
      header = document.querySelector('.header'),
      instruction = document.querySelector('.instruction'), 
      quizSection = document.querySelector('.quiz'),
      question = document.querySelector('.question'),
      next = document.querySelector('#next'),
      buttonA = document.querySelector('button#a span'),
      buttonB = document.querySelector('button#b span'),
      buttonC = document.querySelector('button#c span'),
      correctlyAnsweredQuestions = document.querySelector('p.correct'),
      finalScore = document.querySelector('h2.final-score'),
      playAgain = document.querySelector('input#play');
 
 //counter to hold final score 
 let scoreCounter = 0;
 
 //counter to hold number of correctly answered questions 
 let correctCounter = 0;
      
//array of question object 
const questionArr = [
        {
            question : "Question 1. Who won the Ballon d'Or in 2015?",
            optionA : "Messi",
            optionB : "Ronaldo", 
            optionC : "Neymar", 
            answer : "A"
        }, 
        {
            question : "Question 2. Can you name the former Germany International who went on to become a professional wrestler in WWE?",
            optionA : "Ter Stegen",
            optionB : "Tim Wiese", 
            optionC : "Oliver Khan", 
            answer : "B"
        },
        {
            question: "Question 3. Who is the oldest manager in Premier League history?",
            optionA: "Roy Hodgson",
            optionB: "Alex Ferguson",
            optionC: "Pellegrini",
            answer: "A"
        }, 
        {
            question: "Question 4. Which country won the Russia 2018 World Cup?",
            optionA: "Croatia",
            optionB: "Brazil",
            optionC: "France",
            answer: "C"
        },
        {
            question: "Question 5. “La Liga” is the name of which European country’s professional football association?",
            optionA: "Italy",
            optionB: "Spain",
            optionC: "Germany",
            answer: "B"
        }
    ]
       

//function to hold all event Listeners 
const eventListeners =()=>{
        start.addEventListener('click',startQuiz);
        next.addEventListener('click', nextQuestion);
}

//this begins the quiz 
const startQuiz = (e) =>{
        header.style.display = 'none';
        instruction.style.display = 'none';
        start.style.display = 'none';
        
        quizSection.style.display = 'block';
        question.textContent = questionArr[0].question;
        buttonA.textContent = questionArr[0].optionA;
        buttonB.textContent = questionArr[0].optionB;
        buttonC.textContent = questionArr[0].optionC;
        
        e.preventDefault();
} 


//goes to the next question 
const nextQuestion = () => {
        
} 

eventListeners();
