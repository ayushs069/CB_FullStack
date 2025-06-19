const allButtons = document.querySelectorAll('button')
const screen = document.getElementById('screen')


for(let button of allButtons){
    
    button.addEventListener('click', function(e){
        
        const buttonText = e.target.innerText; // to get the text of the clicked button

        if(buttonText === 'C'){
            screen.value=""
        }
        else if(buttonText === 'X'){           // In JS * is used as Multiplication
            screen.value += '*'
        }
        else if(buttonText === '='){
            try{
                screen.value = eval(screen.value) // eval function evaluates the string as a mathematical expression and returns the result.
            }
            catch(e){
                screen.value = 'Invalid Operation' // if the input string is not a valid mathematical expression, it throws an error.
            }
        }
        else{
            screen.value += buttonText;
        }
    })
}