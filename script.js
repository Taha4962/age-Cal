
// INPUTS
const dayInp = document.getElementById("DD");
const monthInp = document.getElementById("MM");
const yearInp = document.getElementById("YY");

// OUTPUT
const dayOtp = document.getElementById("day");
const monthOtp = document.getElementById("month");
const yearOtp = document.getElementById("year");

// FORM ELEMENT
const form = document.querySelector("form");

// ADDING THE SUBMIT EVENTLISTENER TO FORM
form.addEventListener("submit", handleSubmit);

const date = new Date();
let day = date.getDate();
let month = 1 + date.getMonth();
let year = date.getFullYear();

const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];


function validate() {
    const dayValue = parseInt(dayInp.value, 10);
    const monthValue = parseInt(monthInp.value, 10);
    const yearValue = parseInt(yearInp.value, 10);
  
    if (isNaN(dayValue) || dayValue <= 0 || dayValue > 31) {
      dayInp.style.borderColor = "red";
      dayInp.parentElement.querySelector("small").innerHTML = "Day must be a valid day";
      return false;
    }
  
    if (isNaN(monthValue) || monthValue <= 0 || monthValue > 12) {
      monthInp.style.borderColor = "red";
      monthInp.parentElement.querySelector("small").innerHTML = "Month must be a valid month";
      return false;
    }
  
    return true;
  }
  
  function calculateAge() {
    const dayOfBirth = parseInt(dayInp.value, 10);
    const monthOfBirth = parseInt(monthInp.value, 10);
    const yearOfBirth = parseInt(yearInp.value, 10);
  
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;  // Months are 0-indexed
    const currentDay = currentDate.getDate();
  
    let ageYear, ageMonth, ageDay;
  
    // Calculate years
    ageYear = currentYear - yearOfBirth;
  
    // Calculate months
    if (currentMonth >= monthOfBirth) {
      ageMonth = currentMonth - monthOfBirth;
    } else {
      ageYear--;
      ageMonth = 12 + currentMonth - monthOfBirth;
    }
  
    // Calculate days
    if (currentDay >= dayOfBirth) {
      ageDay = currentDay - dayOfBirth;
    } else {
      ageMonth--;
      const daysInLastMonth = new Date(currentYear, currentMonth - 1, 0).getDate();
      ageDay = daysInLastMonth + currentDay - dayOfBirth;
    }
  
    dayOtp.innerHTML = ageDay;
    monthOtp.innerHTML = ageMonth;
    yearOtp.innerHTML = ageYear;
  }

function handleSubmit(e) {
    e.preventDefault();
  
    // Reset errors and borders
    dayInp.style.borderColor = "";
    dayInp.parentElement.querySelector("small").innerHTML = "";
  
    monthInp.style.borderColor = "";
    monthInp.parentElement.querySelector("small").innerHTML = "";
  
    yearInp.style.borderColor = "";
    yearInp.parentElement.querySelector("small").innerHTML = "";
  
    // Check for empty inputs
    if (dayInp.value.trim() === "") {
      dayInp.style.borderColor = "red";
      dayInp.parentElement.querySelector("small").innerHTML = "This field is required.";
      return;
    }
  
    if (monthInp.value.trim() === "") {
      monthInp.style.borderColor = "red";
      monthInp.parentElement.querySelector("small").innerHTML = "This field is required.";
      return;
    }
  
    if (yearInp.value.trim() === "") {
      yearInp.style.borderColor = "red";
      yearInp.parentElement.querySelector("small").innerHTML = "This field is required.";
      return;
    }
  
    if (validate()) {
      if (dayInp.value > day) {
        day = day + months[month - 1];
        month = month - 1;
      }
      if (monthInp.value > month) {
        month = 12;
        year = year - 1;
      }
  
      const d = day - dayInp.value;
      const m = month - monthInp.value;
      const y = year - yearInp.value;
  
      dayOtp.innerHTML = d;
      monthOtp.innerHTML = m;
      yearOtp.innerHTML = y;
    }
  }
  