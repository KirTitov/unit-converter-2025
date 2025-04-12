/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const inputField = document.getElementById("input-field")
const convertBtn = document.getElementById("convert-btn")

const mfOutput = document.getElementById("mf-output")
const lgOutput = document.getElementById("lg-output")
const kpOutput = document.getElementById("kp-output")

inputField.addEventListener("focus", () => {
  if (inputField.value === "1") {
      inputField.value = "";
  }
});



convertBtn.addEventListener("click", function() {
  const inputValue = parseFloat(inputField.value); // reads the input as a number (including decimals)

// isNaN() checks that the input is a valid number before doing the math.
  if (!isNaN(inputValue)) {
    const metersToFeet = (inputValue * 3.281).toFixed(3); // toFixed(3) limits the result to 3 decimal places for clarity
    const feetToMeters = (inputValue / 3.281).toFixed(3);

    mfOutput.textContent = `${inputValue} meters = ${metersToFeet} feet | ${inputValue} feet = ${feetToMeters} meters`;
  } else {
    mfOutput.textContent = "Please enter a valid number.";
  }

  if (!isNaN(inputValue)) {
    const litersToGallons = (inputValue * 0.264).toFixed(3);
    const gallonsToLiters = (inputValue / 0.264).toFixed(3);


    lgOutput.textContent = `${inputValue} liters = ${litersToGallons} gallons | ${inputValue} gallons = ${gallonsToLiters} liters`;
  } else {
    lgOutput.textContent = "Please enter a valid number.";
  }


  if (!isNaN(inputValue)) {
    const kilosToPounds = (inputValue * 2.204).toFixed(3);
    const poundsToKilos = (inputValue / 2.204).toFixed(3);

    kpOutput.textContent = `${inputValue} kilos = ${kilosToPounds} pounds | ${inputValue} pounds = ${poundsToKilos} kilograms`
  } else {
    kpOutput.textContent = "Please enter a valid number.";
  }

  // To reset the result boxes when the input is cleared

  inputField.addEventListener("input", () => {
    if (inputField.value.trim() === "") {
      mfOutput.textContent = "";
      lgOutput.textContent = "";
      kpOutput.textContent = "";
    }
  });
  
});

