function hide(element) {
    element.remove();
}



// function endtheGame() {
//     alert("The Ninjas have won!");
// }
// setTimeout(endtheGame,13000);


var count = 314;
var counter = document.querySelector (".ninjaScore");
counter.innerHTML = count;
counter.addEventListener("click", function() {
    counter.innerHTML = ++count;

});
var count1 = 159;
var counter1 = document.querySelector (".pirateScore");
counter1.innerHTML = count1;
counter1.addEventListener("click", function() {
    counter1.innerHTML = ++count1;

});