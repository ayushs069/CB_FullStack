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
console.dir(btn); 

// Adding functionality for clicking on a button
btn.onclick=()=>{
    console.log('Button clicked by you');
}


// Adding functionality for hovering over a heading
h1.onclick = () => {
    h1.style.color ='red';
    h1.style.backgroundColor ='yellow';
    h1.style.fontSize ='40px';
    h1.style.border ='2px solid black';
}

// Adding functionality for hovering on a button
btn.onmouseover = () => {
    btn.style.backgroundColor ='green';
    btn.style.color ='white';
}





