let now = new Date();

let dateLine = document.querySelector(".date");
let timeLine = document.querySelector(".time");

let date = now.getDate();
let hour = now.getHours();
let min = now.getMinutes();
let year = now.getFullYear();

let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
let day = days[now.getDay()];

let months = [
  "Jan",
  "Feb",
  "Mar",
  "April",
  "May",
  "June",
  "July",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
let month = months[now.getMonth()];

dateLine.innerHTML = `${day} ${month} ${date}, ${year}`;
timeLine.innerHTML = `${hour}:${min}`;




