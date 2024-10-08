/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const meter = 3.2808
const liter = 0.2642
const kilogram = 2.2046

const toConvert = document.querySelector("#to-convert")
const convertBtn = document.querySelector("#convert-btn")

const lengthResult = document.querySelector("#length-result")
const volumeResult = document.querySelector("#volume-result")
const massResult = document.querySelector("#mass-result")

toConvert.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        e.preventDefault()
        convertBtn.click()
    } else if (isNaN(e.key) && e.key !== 'Backspace') {
        e.preventDefault()
    }
})

convertBtn.addEventListener("click", function() {
    const inputConvert = toConvert.value

    const lengthMeter = (inputConvert * meter).toFixed(3)
    const lengthFeet = (inputConvert / meter).toFixed(3)
    lengthResult.innerHTML = `
        ${inputConvert} meters = ${lengthMeter} feet | ${inputConvert} feet = ${lengthFeet} meters
    `

    const volumeLiter = (inputConvert * liter).toFixed(3)
    const volumeGallon = (inputConvert / liter).toFixed(3)
    volumeResult.innerHTML = `
        ${inputConvert} liters = ${volumeLiter} gallons | ${inputConvert} gallons = ${volumeGallon} liters
    `

    const volumeKg = (inputConvert * kilogram).toFixed(3)
    const volumePounds = (inputConvert / kilogram).toFixed(3)
    massResult.innerHTML = `
        ${inputConvert} kilos = ${volumeKg} pounds | ${inputConvert} pounds = ${volumePounds} kilos
    `
})

// ⬇️⬇️⬇️ Refactored using chatGPT ⬇️⬇️⬇️ //

// const meterToFeet = 3.2808
// const literToGallon = 0.2642
// const kilogramToPound = 2.2046

// const toConvert = document.querySelector("#to-convert")
// const convertBtn = document.querySelector("#convert-btn")

// const lengthResult = document.querySelector("#length-result")
// const volumeResult = document.querySelector("#volume-result")
// const massResult = document.querySelector("#mass-result")

// const formatConversion = function(inputValue, conversionFactor, unit1, unit2) {
//     const convertedValue1 = (inputValue * conversionFactor).toFixed(3)
//     const convertedValue2 = (inputValue / conversionFactor).toFixed(3)
//     return `${inputValue} ${unit1} = ${convertedValue1} ${unit2} | ${inputValue} ${unit2} = ${convertedValue2} ${unit1}`
// }

// toConvert.addEventListener("keypress", function(e) {
//     if (e.key === "Enter") {
//         e.preventDefault()
//         convertBtn.click()
//     } else if (isNaN(e.key) && e.key !== 'Backspace') {
//         e.preventDefault()
//     }
// })

// convertBtn.addEventListener("click", function() {
//     const inputValue = parseFloat(toConvert.value)

//     if (isNaN(inputValue)) {
//         alert("Please enter a valid number")
//         return
//     }

//     lengthResult.innerHTML = formatConversion(inputValue, meterToFeet, 'meters', 'feet')
//     volumeResult.innerHTML = formatConversion(inputValue, literToGallon, 'liters', 'gallons')
//     massResult.innerHTML = formatConversion(inputValue, kilogramToPound, 'kilos', 'pounds')
// })