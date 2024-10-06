/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let meter = 3.2808
let liter = 0.2642
let kilogram = 2.2046

const toConvert = document.querySelector("#to-convert")
const convertBtn = document.querySelector("#convert-btn")

let lengthResult = document.querySelector("#length-result")
let volumeResult = document.querySelector("#volume-result")
let massResult = document.querySelector("#mass-result")

convertBtn.addEventListener("click", function() {
    let inputConvert = toConvert.value

    let lengthMeter = Math.round(inputConvert * meter)
    let lengthFeet = Math.round(inputConvert / meter)
    lengthResult.innerHTML = `
        ${toConvert.value} meters = ${lengthMeter} feet | ${toConvert.value} feet = ${lengthFeet} meters
    `

    let volumeLiter = Math.round(inputConvert * liter)
    let volumeGallon = Math.round(inputConvert / liter)
    volumeResult.textContent = `
        ${toConvert.value} liters = ${volumeLiter} gallons | ${toConvert.value} gallons = ${volumeGallon} liters
    `

    let volumeKg = Math.round(inputConvert * kilogram)
    let volumePounds = Math.round(inputConvert / kilogram)
    massResult.textContent = `
        ${toConvert.value} kilos = ${volumeKg} pounds | ${toConvert.value} pounds = ${volumePounds} kilos
    `
})