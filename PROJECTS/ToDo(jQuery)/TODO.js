//Strike-through,color change on for click list items

// $('li').click(function(){
//     $(this).toggleClass('completed');
// });
// It will only work on predadded li's So using on method to also 
// make it work on Dynamically made li's


// Done for all li's
$('ul').on('click', 'li', function(){
    $(this).toggleClass('completed');
});

// To add input to list
$('#inp').keypress(function(e){
    const todoText = $(this).val(); // got the input

    // adding text on enter in list
    if(e.which === 13){
        $('#list').append(`<li><span><img class="delete-icon" src="image.png" alt="delete"></span> ${todoText}</li>`);
        $(this).val('');            // clearing input after adding text to list
    }
});

// Delete functionality 
$('ul').on('click','span',function(e){
    
    $(this).parent().fadeOut(500, function(){
        $(this).remove();            // removing li when fadeOut is done
    });
    e.stopPropagation();            // prevents completed class to work on 'X' (li)
});



// Plus Button
$('#plus').click(function(){
   $('#inp').fadeToggle(); 
})
