
const screenSection = document.querySelector(".display-content p")
const targetNumbers = document.querySelectorAll('.button')
const targetOperators = document.querySelectorAll('.operator')
const displayValue = document.querySelector('.display-value p')
const equalOperator = document.querySelector('.equal')
const addOperator = document.querySelector('.add')
const divideOperator = document.querySelector('.divided')
const mulipliedOperator = document.querySelector('.multiplied')
const minusOperator = document.querySelector('.minus')
const clearBtn = document.querySelector('.clear')
const deleteBtn = document.querySelector('.delete')
let operation = 0
let result = "";



targetNumbers.forEach(button =>  {
    button.addEventListener('click', function () {
        if (button.classList.contains('equal')) {
            return 
        }

        else if (button.classList.contains('operator')) {
            screenSection.textContent +=  " " + button.textContent + " "
            addOperator.disabled = true;
            minusOperator.disabled = true;
            divideOperator.disabled = true;
            mulipliedOperator.disabled = true;
        
        }

        else {
            screenSection.textContent += button.textContent
            addOperator.disabled = false
            minusOperator.disabled = false;
            divideOperator.disabled = false;
            mulipliedOperator.disabled = false;
        }
    })
    
});




equalOperator.addEventListener('click', function () {
    result = screenSection.textContent    
    displayValue.textContent = eval(result)
})

deleteBtn.addEventListener('click', function () {
    screenSection.textContent = ""
    displayValue.textContent = 0;
})


let element = ""

clearBtn.addEventListener('click', function () {
    element = screenSection.textContent
    console.log(element.replace(/ /g, ""))
    screenSection.textContent = element.slice(0, element.length - 2)

})

