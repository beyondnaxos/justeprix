let trueNum = 254
let resultContainer = document.querySelector('.result-container')


function inputValidation (input) {
    if (input === trueNum) {
        console.log('You guessed the number!')
        const win = document.createElement('p')
        win.textContent = 'You guessed the number!'
        resultContainer.innerHTML = ''
        resultContainer.appendChild(win)
    } else if (input > trueNum) {
        console.log('Too high!')
        const high = document.createElement('p')
        high.textContent = 'Too high!'
        resultContainer.innerHTML = ''
        resultContainer.appendChild(high)
    }
    else if (input < trueNum) {
        console.log('Too low!')
        const low = document.createElement('p')
        low.textContent = 'Too low!'
        resultContainer.innerHTML = ''
        resultContainer.appendChild(low)
    }
    else if (isNaN(input)) {
        console.log('Please enter a number!')
        const notNum = document.createElement('p')
        notNum.textContent = 'Please enter a number!'
        resultContainer.innerHTML = ''
        resultContainer.appendChild(notNum)
    }
    else {
        console.log('Please enter a number!')
    }
}

document.querySelector('.input-container').addEventListener('submit', function (e) {
    e.preventDefault()
    let input = document.querySelector('.input-container input').value
    inputValidation(parseInt(input))
})