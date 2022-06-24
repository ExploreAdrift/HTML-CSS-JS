var count = 0;
var button = document.querySelector(".likes");
var counter = document.querySelector (".likecount");
counter.innerHTML = count;
button.addEventListener("click", function() {
    counter.innerHTML = ++count;

});
var count1 = 0;
var button1 = document.querySelector(".likes1");
var counter1 = document.querySelector (".likecount1");
counter1.innerHTML = count1;
button1.addEventListener("click", function() {
    counter1.innerHTML = ++count1;

});

var count2 = 0;
var button2 = document.querySelector(".likes2");
var counter2 = document.querySelector (".likecount2");
counter2.innerHTML = count2;
button2.addEventListener("click", function() {
    counter2.innerHTML = ++count2;

});

