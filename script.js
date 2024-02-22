// Creating the numbers
function createNumbers() {
    // To store the random numbers to be added on the circular fields
    var num_storage = "";

    // Creating random numbers to add on the circular fields
    for (var i=1; i<=112; i++) {
        random_number = Math.floor(Math.random()*10)
        num_storage += `<div class="fields">${random_number}</div>`;
    }

    // Adding the random numbers on the fields
    document.querySelector("#box_bottom").innerHTML = num_storage;
}


// Running the clock(time)
function time() {
    // Setting the total time
    var total_time = 60;

    // Each time the time() function is called, this function runs
    // After each second, the time gets reduced by 1sec
    var time_rundown = setInterval(function() {
        if (total_time>0) {
            total_time-- ;
            document.querySelector("#game_time").textContent = total_time;
        }
        else{
            clearInterval(time_rundown);    // The time completely stops after reaching 0
            // 'Game Over' screen once the time runs out
            document.querySelector("#box_bottom").innerHTML = `<h1>Game Over! Your total score is: ${points}</h1>`;
        }
    }, 1000);   
}


// Creating Target Number
var targetNum;
function newTarget() {
    targetNum = Math.floor(Math.random()*10)
    document.querySelector("#target_value").textContent = targetNum;
}


// Creating the points function
var points = 0;
function addPoints () {
    points += 7;
    document.querySelector("#increase_points").textContent = points;
}


// Clicking the number and checking the clicked number with the target value
// Selecting the parent element 'box_bottom' instead of adding event listener to all the 112 number-fields
document.querySelector("#box_bottom").addEventListener("click", 
function(details){
    var clickedNum = Number(details.target.textContent);
    if (clickedNum === targetNum) {
        addPoints();
        createNumbers();
        newTarget();
    }
});


// Function calls
createNumbers();
time();
newTarget();
