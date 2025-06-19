// jQuery is a fast, small, and feature-rich JavaScript library that simplifies tasks like:

// HTML DOM manipulation
// Event handling
// AJAX requests
// Animations

// Not mandatory but reduces LOC of JS written code

// $ is a shortcut for jQuery function
// $() === jQuery()
// Both does same thing

// Selecting elements
// $('#id')        // Select element with ID
// $('.class')     // Select elements with class
// $('tag')        // Select elements with tag name

// console.log($('#heading')); 

// Changing styles
// .css('property', 'value') 
const h1 = $('#heading');
// console.log(h1.css('backgroundColor','cyan'));
// console.log(h1.css('color','red'));
// console.log(h1.css('border','2px solid black'));


// By DOM
// const h2 = document.getElementById('heading');
// console.log(h2.style.backgroundColor="yellow");


// Using on classes
const h3 = $('.fav_mov');
console.log(h3.css('background-color','red')); // all classes with class 'fav_mov' will have this style
// but with DOM we have to iterate over each class


// Anchor Tag
const h4 = $('ul a[href="http://google.com"]');
console.log(h4.css('border', '4px dotted green'));

// Always name properties in .ccs() according to CSS naming conventions

// Obj to style
// const objj = {
//   backgroundColor: 'purple',
//   color:'red',
//   border: '2px solid black'
// };

// console.log(h1.css(objj));



// jQ methods
// 1. .text() - similar to textContent to get value 
const p = $('p');
// console.log(p.text());

// to pass values
// (p.text('New Text');


// 2.html() - similar to innerHTML to get value
// console.log(p.html());

//to pass values
// p.html('<span>This is an added span</span>');



// 3. attr() - similar to getAttribute to get value
const inp = $('input');
// console.log(inp.attr('type')); //text

// to pass values
// inp.attr('type', 'password');
// console.log(inp.attr('type')); //password


// 4.first()  & last()
const ul = $('h2+ul li');
console.log(ul.first().css('color','bisque'));

console.log(ul.last().css('color','green'));


// 5. value() - similar to value to get value
console.log(inp.val());

// to pass values
// inp.val('beu webster');





// CLASS METHODs
// 1. addClass() - adds a class to an element similar to .classList
h1.addClass('one');
h1.addClass('two'); 

// 2. removeClass() 
h1.removeClass('one'); 

// 3. toggleClass() - toggles a class on an element
// h1.toggleClass('one'); // will add the class 
h1.toggleClass('one');    // will remove the class




// jQ Events
// 1. click
$('#btn').click(function(){
    console.log("button clicked");
    $(this).css('border','3px dashed red');
});

// 2.keypress
// $('input').keypress(function(){
    // console.log("KEY PRESSED");
    // console.log($(this).val());
// });

// 3. enter press
$('input').keypress(function(e){
    if(e.which ===13){
        console.log("enter press");
    }
});



//jQ EFFECTS
// 1.fadeOut()
// $('#btn007').click(function(){
//     // $('div').fadeOut();
//     $('div').fadeOut(800,()=>{
//         console.log("Fade out completed");
//     });
// })



// 2. fadeToggle()
// $('#btn007').click(function(){
//     $('div').fadeToggle(800,()=>{
//         console.log("Fade Toggle");
//     });
// })



// 3. slideUp & slidedToggle
// $('#btn007').click(function(){
//     $('div').slideUp(800,()=>{
//         console.log("Slided OUT");
//     });
// })

$('#btn007').click(function(){
    $('div').slideToggle(800,()=>{
        console.log("Slided OUT");
    });
})

// 4. hide() & show()
h1.hide();
h1.show();