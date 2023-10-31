window.addEventListener("load", function () {
    const takeoffButton = document.getElementById("takeoff");
    const landButton = document.getElementById("landing");
    const abortButton = document.getElementById("missionAbort");
    const upButton = document.getElementById("up");
    const downButton = document.getElementById("down");
    const rightButton = document.getElementById("right");
    const leftButton = document.getElementById("left");
    const flightStatus = document.getElementById("flightStatus");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    const rocket = document.getElementById("rocket");

    takeoffButton.addEventListener("click", function () {
        // Confirm that the shuttle is ready for takeoff
        let readyForTakeoff = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (readyForTakeoff) {
            // Update flight status
            flightStatus.innerHTML = "Shuttle in flight";
            // Change background color
            shuttleBackground.style.backgroundColor = "blue";
            // Increase shuttle height by 10,000 miles
            let currentHeight = parseInt(spaceShuttleHeight.innerHTML, 10);
            spaceShuttleHeight.innerHTML = (currentHeight + 10000) + " miles";
        }
    });

    landButton.addEventListener("click", function () {
        // Show alert that the shuttle is landing
        window.alert("The shuttle is landing. Landing gear engaged.");
        // Update flight status
        flightStatus.innerHTML = "The shuttle has landed";
        // Change background color
        shuttleBackground.style.backgroundColor = "green";
        // Reset shuttle height to 0
        spaceShuttleHeight.innerHTML = "0 miles";
    });

    abortButton.addEventListener("click", function () {
        // Confirm that the user wants to abort the mission
        let abortConfirmed = window.confirm("Confirm that you want to abort the mission.");
        if (abortConfirmed) {
            // Update flight status
            flightStatus.innerHTML = "Mission aborted";
            // Change background color
            shuttleBackground.style.backgroundColor = "green";
            // Reset shuttle height to 0
            spaceShuttleHeight.innerHTML = "0 miles";
        }
    });

    upButton.addEventListener("click", function () {
        // Move the rocket image up by 10 pixels
        moveRocket(0, -10);
        // Increase shuttle height by 10,000 miles
        let currentHeight = parseInt(spaceShuttleHeight.innerHTML, 10);
        spaceShuttleHeight.innerHTML = (currentHeight + 10000) + " miles";
    });

    downButton.addEventListener("click", function () {
        // Move the rocket image down by 10 pixels
        moveRocket(0, 10);
        // Decrease shuttle height by 10,000 miles
        let currentHeight = parseInt(spaceShuttleHeight.innerHTML, 10);
        spaceShuttleHeight.innerHTML = (currentHeight - 10000) + " miles";
    });

    rightButton.addEventListener("click", function () {
        // Move the rocket image to the right by 10 pixels
        moveRocket(10, 0);
    });

    leftButton.addEventListener("click", function () {
        // Move the rocket image to the left by 10 pixels
        moveRocket(-10, 0);
    });

    // Function to move the rocket image
    function moveRocket(dx, dy) {
        let rocketStyle = window.getComputedStyle(rocket);
        let currentX = parseInt(rocketStyle.left, 10);
        let currentY = parseInt(rocketStyle.top, 10);
        rocket.style.left = (currentX + dx) + "px";
        rocket.style.top = (currentY + dy) + "px";
    }
});
