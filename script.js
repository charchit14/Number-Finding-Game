// To store the random numbers to be added on the circular fields
var num_storage = "";

// Creating random numbers to add on the circular fields
for (var i=1; i<=112; i++) {
    random_number = Math.floor(Math.random()*10)
    num_storage += `<div class="fields">${random_number}</div>`;
}

// Adding the random numbers on the fields
document.querySelector("#box_bottom").innerHTML = num_storage;
