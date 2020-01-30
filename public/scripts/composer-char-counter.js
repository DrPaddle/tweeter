$(document).ready(function() {

  console.log("Is this working?")

  $(".textForm").on("keypress", function(e) {
    //console.log(e)
    
    //console.log(this.text.value);
    //console.log(this.text.value.length);
  })

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
       
    $(".counter").text(remaining);
    


  })


  
});






