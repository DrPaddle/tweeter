// This function will count the characters and change it from red to black
$(document).ready(function() {
  $(".textForm").on("input", function() {
    let count = this.text.value.length;
    let remaining = 140 - count;
    console.log("input",count)
    console.log("remaining", remaining)    

    if(remaining < 0) {
      $(".counter").css({"color": "red"})
    } else {
      $(".counter").css({"color": "black"})
    }  
    // Send the remining characters to the counter class in html document
    $(".counter").text(remaining);
  })
});






