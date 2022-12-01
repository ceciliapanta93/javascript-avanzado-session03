(() => {
    'use strict'
    const button = document.querySelector('button')
    const inputNumber = document.querySelector('input[name="number"]')
    
    button.addEventListener('click', handleClickButton)
    const element = document.createElement('div')
    document.body.appendChild(element)
    
    function handleClickButton (e) {
        const numberTest = parseInt(inputNumber.value)
        const result = isPrimo(numberTest)
        element.innerHTML = result
        
    }

    function isPrimo(number) {
        if (number > 3) {
            for (let i = 2; i<number; i++ ){
                if (number % i === 0) {
                    return 'No es primo'
                }
            }
        }
        return 'Es primo'
    }


})()