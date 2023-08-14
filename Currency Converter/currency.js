const currencyOne = document.getElementById("currency-options-one")
const currencyTwo = document.getElementById("currency-options-two")
const inputField = document.getElementById("input-field")
const outputField = document.getElementById("output-field")
const button =document.getElementById("btn")
const apiUrl = "https://api.api-ninjas.com/v1/convertcurrency?have="
const apiKey = "oyi6tJ5IwA6MjuMUASBmNw==tfXj1pHGFygWDLI2"



async function currencyData(previous, current, amount){
    const response = await fetch (apiUrl + previous + `&want=${current}` + `&amount=${amount}`, { headers :{'X-API-KEY' : apiKey}})
    let data = await response.json()

    previous = data.old_currency
    current = data.new_currency
    amount = data.old_amount
    outputField.value = data.new_amount

    

    
}
button.addEventListener("click", function(){
    currencyData(currencyOne.value,currencyTwo.value,inputField.value)
})




