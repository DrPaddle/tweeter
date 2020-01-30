/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const renderTweets = function(tweets) {
  let markupArray = [];

  for (const tweet of tweets) {
    markupArray.push(createTweetElement(tweet));
  }
  let contain = markupArray.join("");
  $("#tweets-container").append(contain);
};

const createTweetElement = function(data) {
  const markup = `
  <article class="tweet"> 

  <header class="tweetHeader"> 
    <div class="userInfo">
      <img class="userAvatar" src="${data.user.avatars}">
      <p class="userName"> ${data.user.name} </p>
    </div>
    <p class="handle"> ${data.user.handle}</p>
  </header>

    <div class="actualTweet">
    ${data.content.text}
    </div>


  <footer>
    <div class="date"> ${moment(data.created_at).fromNow()} </div>

    <div class="icons">     
      <img src="https://image.flaticon.com/icons/svg/2288/2288826.svg" width="20" height="20" align="right">
      <img src="https://image.flaticon.com/icons/svg/1388/1388946.svg" width="20" height="20" align="right">
      <img src="https://www.flaticon.com/premium-icon/icons/svg/1549/1549775.svg" width="20" height="20" align="right">
    </div>
  </footer>

</article>
  `;
  return markup;
};

$(document).ready(function() {
 

  $(".textForm").submit(function(event) {
    alert("Handler for .submit() called.");
    event.preventDefault();
    $.ajax("/tweets", {
      method: "POST",
      data: $(this).serialize()
    })
    .then(function(response) {
      console.log('Success: ', response);
      console.log($(event).serialize());
    }) 
  });

const loadTweets = function() {
    $.ajax("/tweets", { 
      method: "GET" 
    })
    .then( response => {
      renderTweets(response);
    })
  };
loadTweets();
});





