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
        }
    }, 1000);   
}


// Creating Target Number
function newTarget() {
    var new_number = Math.floor(Math.random()*10)
    document.querySelector("#target_value").textContent = new_number;
}





createNumbers();
time();
newTarget();
