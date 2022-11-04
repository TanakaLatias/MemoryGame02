const cardArray = [

    {
        name: 'fries',
        img: 'images/f.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/ch.png'
    },
    {
        name: 'hotdog',
        img: 'images/h.png'
    },
    {
        name: 'milkshake',
        img: 'images/m.png'
    },
    {
        name: 'ice-cream',
        img: 'images/i.png'
    },
    {
        name: 'pizza',
        img: 'images/p.png'
    },
    {
        name: 'girl',
        img: 'images/g.png'
    },
    {
        name: 'nut',
        img: 'images/n.png'
    },
    {
        name: 'fries',
        img: 'images/f.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/ch.png'
    },
    {
        name: 'hotdog',
        img: 'images/h.png'
    },
    {
        name: 'milkshake',
        img: 'images/m.png'
    },
    {
        name: 'ice-cream',
        img: 'images/i.png'
    },
    {
        name: 'pizza',
        img: 'images/p.png'
    },
    {
        name: 'girl',
        img: 'images/g.png'
    },
    {
        name: 'nut',
        img: 'images/n.png'
    }
]

cardArray.sort(() => 0.5 - Math.random())
console.log(cardArray);

const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
const commentDisplay = document.querySelector('#comment')
const checkHowManyDisplay = document.querySelector('#checkHowMany')
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []
let checkHowMany = 0

function createBoard() {
    for(let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/b.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)
    }
}

createBoard()

function checkMatch() {

    const cards = document.querySelectorAll('img')
    if(cardsChosen[0] == cardsChosen[1] && cardsChosenIds[0] != cardsChosenIds[1]) {
        commentDisplay.innerHTML = 'You found a match!'
        cards[cardsChosenIds[0]].removeEventListener('click', flipCard)
        cards[cardsChosenIds[1]].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
    } else {
        cards[cardsChosenIds[0]].setAttribute('src', 'images/b.png')
        cards[cardsChosenIds[1]].setAttribute('src', 'images/b.png')
        commentDisplay.innerHTML = 'Sorry, try again.'
    }

    resultDisplay.textContent = cardsWon.length
    checkHowMany ++
    checkHowManyDisplay.innerHTML = checkHowMany

    cardsChosen = []
    cardsChosenIds = []

    if(cardsWon.length === cardArray.length/2) {
        commentDisplay.innerHTML = 'Congratulations you found them all!'
    }
}

function flipCard() {
    const cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)

    if (cardsChosen.length === 2) {
        console.log(cardsChosen)
        console.log(cardsChosenIds)
        setTimeout(checkMatch, 500) 
    }
    

}










