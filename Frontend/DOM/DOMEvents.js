// DOM EVENTS - Listening to events on HTML elements
// An event is something that happens in the browser, like a click or keypress.
// There are two main ways to attach events:
// 1. Inline – directly in the HTML tag
// 2. External – using JavaScript separately 

// Inline Event - in html directly writing event like onClick or onMouseHover

// External Event - Using JavaScript code for attaching events to elements
const btn = document.getElementById('btn');
const h1 =document.querySelector('h1');

// To get the properties of the button
// console.dir(btn); 

// Adding functionality for clicking on a button
// btn.onclick=()=>{
//     console.log('Button clicked by you');
// }


// Adding functionality for hovering over a heading
// h1.onclick = () => {
//     h1.style.color ='red';
//     h1.style.backgroundColor ='yellow';
//     h1.style.fontSize ='40px';
//     h1.style.border ='2px solid black';
// }

// Adding functionality for hovering on a button
// btn.onmouseover = () => {
//     btn.style.backgroundColor ='green';
//     btn.style.color ='white';
// }






// A button can only be assigned only 1 function at a time
// If we try to add another function, the previous one will be overridden
function scream(){
    console.log('SCREAM !!!!');
}

function shout(){
    console.log('SHOUT!!!!');
}

// btn.onclick = scream;
// btn.onclick = shout; // shout overwrites scream when button is clicked again



// To solve this issue we can use EVENT LISTENERS
btn.addEventListener('click', scream);
btn.addEventListener('click', shout); 
// both functions will be called when button is clicked.



//***************************mouse events **********************************************
// SYNTAX - addEventListener(eventType, callBFun, options)
h1.addEventListener('mouseenter', () => {
    console.log("mouse enter");
    h1.style.border ='4px solid red';
    h1.style.color ='blue';
    h1.style.backgroundColor ='yellow';
    h1.style.fontSize ='30px';
});

h1.addEventListener('mouseleave', () => {
    console.log("mouse leave");
    h1.style.border ='';
    h1.style.color ='';
    h1.style.backgroundColor ='';
    h1.style.fontSize ='';
});


// Keyboard events
const inp = document.querySelector('#inp');


// inp.addEventListener('keypress', (event) => {
//     console.log(event.target); // get the input field in console.log
//     console.log(event.target.value); // get the current value of the input field in console.log

// });

// to check if enter is pressed
// inp.addEventListener('keypress', (event) => {
//     if(event.keyCode === 13){            // or event.key === 'Enter'
//         console.log('Enter key pressed');
//     }
// });



// form Event
const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // to prevent form from submitting normally and reloading the page
    // console.log('Form submitted');

    // console.dir(form); // to get all the form properties in console.log

    //to get value of ussername and age
    const username = form.elements[1].value;
    const age = form.elements[2].value;
    console.log(username);
    console.log(age);

});
