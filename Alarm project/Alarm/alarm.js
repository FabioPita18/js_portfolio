var wakeuptime = 7;
var noon = 12;
var lunchtime = 12;
var naptime = lunchtime + 2;
var partytime;
var evening = 18;

// Getting it to show the current time on the page
var showCurrentTime = function() {
    // display the string on the webpage
    var clock = document.getElementById('clock');

    var currentTime = new Date();

    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";

    // Set hours
    if (hours >= noon) {
        meridian = "PM";
    }

    if (hours > noon) {
        hours = hours - 12;
    }

    // Set Minutes
    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    // Set Seconds
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    // put together the string that displays the time
    var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";

    clock.innerText = clockTime;
};

// Getting the clock to increment on its own and change out messages and pictures
var updateClock = function() {
    var time = new Date().getHours();
    var messageText;
    var image = "https://s3.amazonaws.com/www-inside-design/uploads/2018/01/rick-morty-sq.jpg";

    var timeEventJS = document.getElementById("timeEvent");
    var lolcatImageJS = document.getElementById('rickimage');

    if (time == partytime) {
        image = "https://www.denofgeek.com/wp-content/uploads/2017/07/rick-and-morty.jpg?resize=768%2C432";
        messageText = "Let's party!";
    } else if (time == wakeuptime) {
        image = "https://static.onecms.io/wp-content/uploads/sites/6/2019/11/rick-and-morty-season-4-2000.jpg";
        messageText = "Wake up!";
    } else if (time == lunchtime) {
        image = "https://images.newscientist.com/wp-content/uploads/2019/12/13161738/rick3.jpg";
        messageText = "Let's have some lunch!";
    } else if (time == naptime) {
        image = "https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F60db483a4ef21eb3d8ab3bf7%2F0x0.jpg";
        messageText = "Sleep tight!";
    } else if (time < noon) {
        image = "https://decider.com/wp-content/uploads/2021/05/rick-and-morty.jpg?quality=80&strip=all&w=680&h=356&crop=1";
        messageText = "Good morning!";
    } else if (time >= evening) {
        image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK-dk40V-rH5Baqc4WgC3gZ5znpWG7eDbJ8g&usqp=CAU";
        messageText = "Good evening!";
    } else {
        image = "https://wallpaperaccess.com/full/793614.jpg";
        messageText = "Good afternoon!";
    }

    console.log(messageText);
    timeEventJS.innerText = messageText;
    lolcatImage.src = image;

    showCurrentTime();
};
updateClock();

// Getting the clock to increment once a second
var oneSecond = 1000;
setInterval(updateClock, oneSecond);


// Getting the Party Time Button To Work
var partyButton = document.getElementById("partyTimeButton");

var partyEvent = function() {
    if (partytime < 0) {
        partytime = new Date().getHours();
        partyTimeButton.innerText = "Party Over!";
        partyTimeButton.style.backgroundColor = "#0A8DAB";
    } else {
        partytime = -1;
        partyTimeButton.innerText = "Party Time!";
        partyTimeButton.style.backgroundColor = "#222";
    }
};

partyButton.addEventListener("click", partyEvent);
partyEvent();


// Activates Wake-Up selector
var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");

var wakeUpEvent = function() {
    wakeuptime = wakeUpTimeSelector.value;
};

wakeUpTimeSelector.addEventListener("change", wakeUpEvent);


// Activates Lunch selector
var lunchTimeSelector = document.getElementById("lunchTimeSelector");

var lunchEvent = function() {
    lunchtime = lunchTimeSelector.value;
};

lunchTimeSelector.addEventListener("change", lunchEvent);


// Activates Nap-Time selector
var napTimeSelector = document.getElementById("napTimeSelector");

var napEvent = function() {
    naptime = napTimeSelector.value;
};

napTimeSelector.addEventListener("change", napEvent);