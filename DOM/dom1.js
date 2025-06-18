//DOM Manipultion- Document Object Model 
// Used to access and manipulate HTML elements by using JavaScript
// Document means the HTML document

// console.dir(document); //  gives the structure of the document
// document is the root element of the HTML document

//2 steps in DOM Manipulation-
// 1. Selecting the elements in the document
// 2. Manipulating the elements in the document

// Selecting elements in the document using SELECTORS

// 1. getElementById - Selects an element by its ID

// let d = document.getElementById('heading'); 
// console.log(d);

// returns the element with id 'heading'
//O/P : <h1 id="heading">DOM BASICS</h1>

// Manipulating the element
// d.style.color = 'red';
// d.style.backgroundColor = 'cyan';
// d.style.border = '2px solid black';



// 2. getElementsByTagName - Selects elements by their tag name(HTML tag) & gives a HTMLCollection(array-like object) of elements
// let d1 = document.getElementsByTagName('section');
// console.log(d1); // returns a HTMLCollection of elements with the tag name 'section'

// Accessing the first element in the HTMLCollection of 'section' elements
// console.log(d1[0]); // O/P : <section class="section">...</section>

// d1[0].style.backgroundColor = 'lightblue'; 
// changes the background color of the first section element



// 3. getElementsByClassName - Selects elements by their class name and returns a HTMLCollection of elements
// const favMovies = document.getElementsByClassName('fav_mov');
// console.log(favMovies); // returns a HTMLCollection of elements with the class name 'fav_mov'

// for(let movie of favMovies){        // iterating through the (array-like object) so using for...of loop

//     movie.style.color ="orange"; 
//     movie.style.fontSize = "20px";
//     movie.style.fontWeight = "bold";
// }




// 4. getElementsByName - Selects elements by their name attribute and returns a NodeList of elements
// const inp = document.getElementsByName("username");
// console.log(inp);       // returns a NodeList of elements with the name attribute 'username'
//NodeList is similar to HTMLCollection 
// console.log(inp[0]);    // O/P : <input type="text" name="username">




// 5. querySelector - selects first element that matches the selector
// const h1 = document.querySelector("#heading")
// console.log(h1);        // using the ID selector to select the first element 

// const moviee = document.querySelector(".fav_mov");
// console.log(moviee);    // using the class selector to select the first element with class 'fav_mov'





// 6.querySelectorAll - returns a NodeList of all elements that match the selector
// const moviesss =document.querySelectorAll(".fav_mov");
// console.log(moviesss);  // returns a NodeList of all elements with class 'fav_mov'

// O/P : NodeList(3) [li.fav_mov, li.fav_mov, li.fav_mov]

// console.log(moviesss[0]); // shows the first element in the NodeList



// @ For Descendents with querySelector
// const anchor = document.querySelector("ul a");
// console.log(anchor);       // returns the first anchor tag inside the ul element
// const anchors = document.querySelectorAll("ul a");
// console.log(anchors);      // returns a NodeList of all anchor tags inside the ul element

// anchor.style.color = "green"; 
// anchors[2].style.backgroundColor= "red"; 






// DOM TRAVERSAL
//html is the root element of the document
// we can traverse from the root element to any other element in the document and vice versa
// const strong = document.querySelector("strong");
// console.log(strong); 


//Traversing from children to parent (parentElement property)
// console.log(strong.parentElement);              // p is returned

// console.log(strong.parentElement.parentElement); // body returned

// console.log(strong.parentElement.parentElement.parentElement); // html returned

// console.log(strong.parentElement.parentElement.parentElement.parentElement); // null returned - no parent element exists for html


// Traversing from parent to children (children property)
// const para = document.querySelector("p");

// console.log(para.children); // returns a HTMLCollection of all children elements of the p 

// console.log(para.children[0]); 
// console.log(para.children[1]);


// Traversing from parent to next sibling (nextElementSibling & previousElementSibling property) then one sibling to other
// either nextElementSibling or previousElementSibling can be used.
// const sib  = document.querySelector('h2');

// console.log(sib.nextElementSibling);        // returns the next sibling element of h2 - ul
// console.log(sib.previousElementSibling);    // returns the previous sibling element of h2 - input


// Chaining
// console.log(sib.nextElementSibling.nextElementSibling);         // returns the next sibling element of ul - h2
// console.log(sib.previousElementSibling.previousElementSibling); // returns the previous sibling element of input - img






// Properties
// const paraa = document.querySelector("p");
// console.log(paraa); 

// 1.innerText - returns only the visible text content of the element (ignores hidden elements and styles).
// Aware of styling like display: none, visibility: hidden, etc.
// console.log(paraa.innerText);  // display:"none" => span is not visible


// 2. textContent - returns the text content of the element including hidden elements.
// Not aware of styling like display: none, visibility: hidden, etc.
// console.log(paraa.textContent);  // display:none => span is also visible here


// 3. innerHTML - returns whole text of the element along with the "HTML TAGS".
// console.log(paraa.innerHTML);  






// ClassList Property (add,remove,toggle,contains)
// const h1 = document.querySelector("#heading");
// console.log(h1); 

// h1.style.color="red";
// h1.style.backgroundColor="cyan";
// h1.style.border="4px solid grey";
// h1.style.padding="14px";
// All these are added to h1 as inline styles - from elements (inspect)


//External CSS is best practice to style elements
// const h1 = document.querySelector("#heading");

// console.log(h1.classList); // returns an empty list as we havent defined anything yet
// classList has all the CSS classes that can be added to the h1

// .heading-class can be put directly in html but we have to do it with the DOM manipulation
const h1 = document.getElementById("heading");



//using classList
h1.classList.add("heading-class"); 
//Hence added external CSS by DOM manipultion in h1

//another class added
h1.classList.add("one");




//removing a class
h1.classList.remove("heading-class");




//toggle the classes (add - remove)
h1.classList.toggle("heading-class"); // added

h1.classList.toggle("heading-class"); // removed

h1.classList.toggle("heading-class"); // added

// & so on....................................




// contains functon
console.log(h1.classList.contains("one"));  // true

console.log(h1.classList.contains("ten"));  // false

//