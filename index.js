// write your code here!
// This variable has the data you're working with

// 

function createCard(title, image, cardText) {

    let cardEl = document.createElement('article')
    cardEl.setAttribute('class', 'card')

    let cardTitleEl = document.createElement('h2')
    cardTitleEl.setAttribute('class', 'card--title')
    cardTitleEl.innerText = title
    cardEl.append(cardTitleEl)

    let cardImageEl = document.createElement('img')
    cardImageEl.setAttribute('class', 'card--img')
    cardImageEl.setAttribute('src', image)
    cardImageEl.setAttribute('alt', 'picture of pokemon')
    cardImageEl.innerText = image
    cardEl.append(cardImageEl)

    let cardTextEl = document.createElement('div')
    cardTextEl.setAttribute('class', 'card--text')
    cardEl.append(cardTextEl)

    for (i = 0; i < 6; i++) { 
        let line = document.createElement("p")
        line.innerText = cardText[i].stat.name.toUpperCase() + ": " + cardText[i]["base_stat"]
        cardTextEl.append(line)
    }

    document.querySelector("section").append(cardEl)
}


for (pokemon of data) {
    createCard(pokemon.name, pokemon.sprites.other["official-artwork"].front_default, pokemon.stats)
}











