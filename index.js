// import a victory sound file
let trueNum = Math.floor(Math.random() * 1000) + 1
let resultContainer = document.querySelector('.result-container')
let answer = false


// console.log(trueNum)

function inputValidation (input) {
    if (input === trueNum) {
        let victory = new Audio('victory.mp3')
        victory.volume = 0.5
        victory.play()
        console.log('You guessed the number!')
        const win = document.createElement('p')
        win.textContent = "GG c'était bien " + trueNum + " ! Nouveau nombre généré"
        resultContainer.innerHTML = ''
        win.style.fontSize = '1.5rem'
        win.style.color = 'green'
        win.style.fontWeight = 'bold'
        // text align center
        win.style.textAlign = 'center'
        resultContainer.appendChild(win)
        
        answer = true
    } else if (input > trueNum) {
        console.log('Too high!')
        const high = document.createElement('p')
        high.textContent = 'Trop haut!'
        resultContainer.innerHTML = ''
        high.style.fontSize = '1.5rem'
        high.style.color = 'red'
        high.style.fontWeight = 'bold'
        high.style.textAlign = 'center'
        resultContainer.appendChild(high)
    }
    else if (input < trueNum) {
        console.log('Too low!')
        const low = document.createElement('p')
        low.textContent = 'Trop bas!'
        resultContainer.innerHTML = ''
        low.style.fontSize = '1.5rem'
        low.style.color = 'lightblue'
        low.style.fontWeight = 'bold'
        low.style.textAlign = 'center'
        resultContainer.appendChild(low)
    }
    else if (isNaN(input)) {
        console.log('Please enter a number!')
        const notNum = document.createElement('p')
        notNum.textContent = 'Ce n\'est pas un nombre!'
        resultContainer.innerHTML = ''
        notNum.style.color = '#' + randomColor
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
    // clean up the input field
    document.querySelector('.input-container input').value = ''
    if (answer === true) {
        trueNum = Math.floor(Math.random() * 1000) + 1
        answer = false
        // console.log(trueNum);
    }
})

