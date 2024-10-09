/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

// const meter = 3.2808
// const liter = 0.2642
// const kilogram = 2.2046

// const toConvert = document.querySelector("#to-convert")
// const convertBtn = document.querySelector("#convert-btn")

// const lengthResult = document.querySelector("#length-result")
// const volumeResult = document.querySelector("#volume-result")
// const massResult = document.querySelector("#mass-result")

// toConvert.addEventListener("keypress", function(e) {
//     if (e.key === "Enter") {
//         e.preventDefault()
//         convertBtn.click()
//     } else if (isNaN(e.key) && e.key !== 'Backspace') {
//         e.preventDefault()
//     }
// })

// convertBtn.addEventListener("click", function() {
//     const inputConvert = toConvert.value

//     const lengthMeter = (inputConvert * meter).toFixed(3)
//     const lengthFeet = (inputConvert / meter).toFixed(3)
//     lengthResult.innerHTML = `
//         ${inputConvert} meters = ${lengthMeter} feet | ${inputConvert} feet = ${lengthFeet} meters
//     `

//     const volumeLiter = (inputConvert * liter).toFixed(3)
//     const volumeGallon = (inputConvert / liter).toFixed(3)
//     volumeResult.innerHTML = `
//         ${inputConvert} liters = ${volumeLiter} gallons | ${inputConvert} gallons = ${volumeGallon} liters
//     `

//     const volumeKg = (inputConvert * kilogram).toFixed(3)
//     const volumePounds = (inputConvert / kilogram).toFixed(3)
//     massResult.innerHTML = `
//         ${inputConvert} kilos = ${volumeKg} pounds | ${inputConvert} pounds = ${volumePounds} kilos
//     `
// })

// ⬇️ Refactored by passing parameter and argument ⬇️ //

const meterToFeet = 3.2808
const literToGallon = 0.2642
const kilogramToPound = 2.2046

const toConvert = document.querySelector("#to-convert")
const convertBtn = document.querySelector("#convert-btn")

const lengthResult = document.querySelector("#length-result")
const volumeResult = document.querySelector("#volume-result")
const massResult = document.querySelector("#mass-result")

// setting up parameters
const formatConversion = function(inputValue, conversionFactor, metric, imperial) {
    const fromMetricToImperial = (inputValue * conversionFactor).toFixed(3)
    const fromImperialToMetric = (inputValue / conversionFactor).toFixed(3)
    return `${inputValue} ${metric} = ${fromMetricToImperial} ${imperial} | ${inputValue} ${imperial} = ${fromImperialToMetric} ${metric}`
}

toConvert.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        e.preventDefault()
        convertBtn.click()
    } else if (isNaN(e.key) && e.key !== 'Backspace') {
        e.preventDefault()
    }
})

convertBtn.addEventListener("click", function() {
    const inputValue = parseFloat(toConvert.value)

    if (isNaN(inputValue)) {
        alert("Please enter a valid number")
        return
    }

    // passing arguments
    lengthResult.textContent = formatConversion(inputValue, meterToFeet, 'meters', 'feet')
    volumeResult.textContent = formatConversion(inputValue, literToGallon, 'liters', 'gallons')
    massResult.textContent = formatConversion(inputValue, kilogramToPound, 'kilos', 'pounds')
})