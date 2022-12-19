let trueNum = Math.floor(Math.random() * 1000) + 1
let resultContainer = document.querySelector('.result-container')
let answer = false
let counter = 0
let counterDisplay = (document.querySelector('.counter').textContent = counter)

function inputValidation(input) {
  if (input === trueNum) {
    let victory = new Audio('victory.mp3')
    victory.volume = 0.5
    victory.play()
    console.log('You guessed the number!')
    const win = document.createElement('p')
    win.textContent = "GG c'était bien " + trueNum + ' ! Nouveau nombre généré'
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
  } else if (input < trueNum) {
    console.log('Too low!')
    const low = document.createElement('p')
    low.textContent = 'Trop bas!'
    resultContainer.innerHTML = ''
    low.style.fontSize = '1.5rem'
    low.style.color = 'lightblue'
    low.style.fontWeight = 'bold'
    low.style.textAlign = 'center'
    resultContainer.appendChild(low)
  } else if (isNaN(input)) {
    console.log('Please enter a number!')
    const notNum = document.createElement('p')
    notNum.textContent = "Ce n'est pas un nombre!"
    resultContainer.innerHTML = ''
    notNum.style.color = '#' + randomColor
    resultContainer.appendChild(notNum)
  } else {
    console.log('Please enter a number!')
  }
}

document
  .querySelector('.input-container')
  .addEventListener('submit', function (e) {
    e.preventDefault()
    let input = document.querySelector('.input-container input').value
    inputValidation(parseInt(input))
    document.querySelector('.input-container input').value = ''
    document.querySelector('.counter').textContent = ''
    console.log(counter)
    counter++
    document.querySelector('.counter').textContent = counter
    if (answer === true) {
      trueNum = Math.floor(Math.random() * 1000) + 1
      answer = false
      counter = 0
    }
  })

// first create a timer
// then Observe counter , if counter is > 0 start the timer , if counter is 0 stop the timer

// timer
let timer = 0
let timerDisplay = document.querySelector('.timer')
let timerInterval = setInterval(function () {
  timer++
  timerDisplay.textContent = timer
}, 1000)

// Observe counter
let counterObserver = new MutationObserver(function (mutations) {
  mutations.forEach(function (mutation) {
    if (mutation.target.textContent > 0) {
      timerInterval
    } else {
      clearInterval(timerInterval)
    }
  })
})
