let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let messages = {
  Monday: "Start fresh, you got this",
  Tuesday: "Keep pushing forward",
  Wednesday: "You're halfway there",
  Thursday: "Stay strong, weekend is near",
  Friday: "Almost done, good job",
  Saturday: "Relax, it's weekend" ,
  Sunday: "Take a break and rest"
};

let today = new Date();
let currentday = days[today.getDay()];


let day = document.getElementById("day");
day.textContent = currentday;
let msg = document.getElementById("message");
msg.textContent = messages[currentday];
