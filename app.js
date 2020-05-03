//selecting elements from the dom 
const start = document.querySelector('#start'),
      header = document.querySelector('.header'),
      instruction = document.querySelector('.instruction'); 

//function to hold all event Listeners 
const eventListeners =()=>{
        start.addEventListener('click',startQuiz);
}



const startQuiz = (e) =>{
        header.style.display = 'none';
        instruction.style.display = 'none';
        e.preventDefault();
} 

eventListeners();
