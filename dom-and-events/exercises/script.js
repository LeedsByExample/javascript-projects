function init () {
    const missionAbort = document.getElementById("abortMission");
    const button = document.getElementById("liftoffButton");
    const paragraph = document.getElementById("statusReport");

    function takeOff() {
        paragraph.innerHTML = "Houston, we have liftoff!";
        console.log("Houston, we have liftoff!");
    };
    button.addEventListener("click", takeOff);

    missionAbort.addEventListener("mouseover", function(event) {
        event.target.className = 'redAbortButton';
    });

    missionAbort.addEventListener("mouseout", function(event) {
        event.target.className = "";
    })

    missionAbort.addEventListener("click", function(event) {
        let confirmAbort = window.confirm("Are you sure you want to abort the mission?");
        if (confirmAbort) {
            paragraph.innerHTML = "Mission aborted! Space shuttle returning home.";
        } else {
            paragraph.innerHTML = "k then why'd you click the button";
        }
    })
    
}

window.addEventListener("load", init);
