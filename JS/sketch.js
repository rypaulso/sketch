var h = 16; //starting number of squares for grid (16x16)
var $row = $("<div></div>", {class: 'row'}); //variable to make rows
var $column = $("<div></div>", {class: 'column'}); //variable to make columns

//I put everything but the button click into one function. I probably could've kept it cleaner
//by making separate functions and then making one final function calling the others.

$(document).ready(function grid(size){
    size = h;
    var square = 500/size; //keeping my set overall size of 500px no matter how many squares are in the grid

    $('.column').remove(); //clear anything in the grid

    for (var i = 0; i < size; i++) { //make the grid by creating an inline row and then repeating it
       $(".wrapper").append($column.clone());
    }

    for (var i = 0; i < size; i++) {
       $(".column").append($row.clone());
    }
    //following sets the size of divs so no matter the number picked they fit the grid of 500px square
    $('.row').css({'height': square, 'width': square});

    $('.row').hover( //hover and color the grid
      function(){
        $(this).addClass("highlight");
      },
      function(){
//        $(this).removeClass("highlight");
      }
    )
    //clear the color, ask for the amount of "squares" in the grid
    document.getElementById("delete").onclick = function(){
      $(".row").removeClass("highlight");
      h = prompt("Enter number of squares for the width");
      grid(h);
    };
});
