"use strict";
// creating function to toggle in label and input value
function toggleDisplay(label1, label2, value1, value2) {
  document.getElementById("degree_label_1").textContent = label1;
  document.getElementById("degree_label_2").textContent = label2;
  document.getElementById("degrees_entered").value = value1;
  document.getElementById("degrees_computed").value = value2;
}

// function to get input for Fahrenheit
function toCelsius() {
  toggleDisplay("Enter F degrees:", "Degrees Celsius:", "", "");
}
// function to get input for celsius
function toFahrenheit() {
  toggleDisplay("Enter C degrees:", "Degrees Fahrenheit:", "", "");
}
//function to convert the entered temperature
function convertTemp() {
  var input = document.getElementById("degrees_entered").value;
  var output = document.getElementById("degrees_computed");
  var errorElement = document.getElementById("error_message");

  // Clear previous error message
  if (errorElement) {
    errorElement.textContent = "";
  }
  // adding data validation to check entry is valid
  if (!/^\d+$/.test(input)) {
    displayErrorMessage("Error!! You must enter a valid number for degrees.");
    output.value = "";
  } else {
    // calculation for converison from celcius to fahrenheit and vice versa
    if (document.getElementById("to_celsius").checked) {
      var celsius = parseFloat(((input - 32) * 5) / 9);
      output.value = celsius.toFixed(0);
    } else {
      var fahrenheit = parseFloat((input * 9) / 5 + 32);
      output.value = fahrenheit.toFixed(0);
    }
  }

  document.getElementById("degrees_entered").focus();
  document.getElementById("degrees_entered").select();
}
// function to display error message
function displayErrorMessage(message) {
  var errorElement = document.getElementById("error_message");
  if (errorElement) {
    errorElement.textContent = message;
  } else {
    var errorDiv = document.createElement("div");
    errorDiv.id = "error_message";
    errorDiv.textContent = message;
    document.querySelector("main").appendChild(errorDiv);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("degrees_entered").focus();
});

// dom creation and loading
window.addEventListener("load", function () {
  document.getElementById("to_celsius").addEventListener("click", toCelsius);
  document
    .getElementById("to_fahrenheit")
    .addEventListener("click", toFahrenheit);
  document.getElementById("convert").addEventListener("click", convertTemp);
});
