// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function() {
    console.log('window loaded');

    let flightStatus = document.getElementById("flightStatus");
    let shuttleHeight = document.getElementById("spaceShuttleHeight");
    let shuttleBackground = document.getElementById("shuttleBackground");
    let rocket = document.getElementById("rocket");
    let rocketBottom = 0;
    let rocketLeft = 330;
    
    let takeOffButton = document.getElementById("takeoff");
    takeOffButton.addEventListener("click", function(event) {
        let confirmTakeOff = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (confirmTakeOff) {
            flightStatus.innerHTML = "Shuttle in flight.";
            shuttleBackground.style.backgroundColor = "blue";
            shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) + 10000;
        };
    });

    let landButton = document.getElementById("landing");
    landButton.addEventListener("click", function(event) {
        window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed.";
        shuttleBackground.style.backgroundColor = "green";
        shuttleHeight.innerHTML = 0;
        if (rocketBottom > 0) {
            rocketBottom = 0;
            rocket.style.bottom = rocketBottom + "px";
        };
    });

    let abortButton = document.getElementById("missionAbort");
    abortButton.addEventListener("click", function(event) {
        let confirmAbort = window.confirm("Confirm that you want to abort the mission.");
        if (confirmAbort) {
            flightStatus.innerHTML = "Mission aborted.";
            shuttleBackground.style.backgroundColor = "green";
            shuttleHeight.innerHTML = 0;
            if (rocketBottom > 0) {
                rocketBottom = 0;
                rocket.style.bottom = rocketBottom + "px";
            };
        };
    });

    let left = document.getElementById("left");
    left.addEventListener("click", function() {
        if (rocketLeft <= -20) {
            window.alert("Rocket cannot go any further left.");
        } else {
            rocketLeft -= 10;
            rocket.style.left = rocketLeft + "px";
        }
    })

    let right = document.getElementById("right");
    right.addEventListener("click", function() {
        if (rocketLeft >= 700) {
            window.alert("Rocket cannot go any further right.");
        } else {
            rocketLeft += 10;
            rocket.style.left = rocketLeft + "px";
        };
    });

    let up = document.getElementById("up");
    up.addEventListener("click", function() {
        if (rocketBottom >= 250) {
            window.alert("Maximum height reached.");
        } else {
            rocketBottom += 10;
            rocket.style.bottom = rocketBottom + "px";
            shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) + 10000;
        }
    })

    let down = document.getElementById("down");
    down.addEventListener("click", function() {
        if (rocketBottom <= 0) {
            window.alert("Rocket is already on the ground and cannot go any lower.");
        } else {
            rocketBottom -= 10;
            rocket.style.bottom = rocketBottom + "px";
            shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) - 10000;
        }
    })
});

//when and why am I supposed to add an event parameter to event listener function?????
//I don't like my solution for keeping the rocket on the screen
//Also, try to fix the positioning later? It's slightly off-center on the webpage and it's driving me mad