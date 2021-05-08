document.addEventListener('DOMContentLoaded', () => {
    const cardArray = [
        {
            name: 'fries',
            img: 'Images/fries.png'
        },
        {
            name: 'fries',
            img: 'Images/fries.png'
        },
        {
            name: 'cheeseburger',
            img: 'Images/cheeseburger.png'
        },
        {
            name: 'cheeseburger',
            img: 'Images/cheeseburger.png'
        },
        {
            name: 'hotdog',
            img: 'Images/hotdog.png'
        },
        {
            name: 'hotdog',
            img: 'Images/hotdog.png'
        },
        {
            name: 'ice-cream',
            img: 'Images/ice-cream.png'
        },
        {
            name: 'ice-cream',
            img: 'Images/ice-cream.png'
        },
        {
            name: 'milkshake',
            img: 'Images/milkshake.png'
        },
        {
            name: 'milkshake',
            img: 'Images/milkshake.png'
        },
        {
            name: 'pizza',
            img: 'Images/pizza.png'
        },
        {
            name: 'pizza',
            img: 'Images/pizza.png'
        }
    ]

    const grid = document.querySelector('.grid')
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []

    //create your board
    function createBoard() {
        for (let i =0; i < cardArray.length; i++){
            var card = document.createElement('img')
            card.setAttribute('src', 'images/blank.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipcard)
            grid.appendChild(card) //will add card to grid in html
        }
    }

    // check for matches
    function checkForMatch() {
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if (cardsChosen[0] === cardsChosen[1]) {
            alert('You found a match')
            cards[optionOneId].setAttribute('src', 'images/white.png')
            cards[optionTwoId].setAttribute('src', 'images/white.png')
            cardsWon.push(cardsChosen)
        }


    }

    // flip your card
    function flipCard() {
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        // already chosen a card at this point, so it sets the src to that image
        this.setAttribute('src', cardArray[cardId].img)
        // checks if its one of the food card
        if (cardsChosen.length === 2){
            setTimeout(checkForMatch, 500)
        }
    }


    createBoard()
})