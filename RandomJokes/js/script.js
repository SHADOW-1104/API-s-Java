const jokeContainer = document.getElementById('joke-container')
const icon = document.getElementById('icon')
const btn = document.getElementById('btn')
const API_URL = 'https://v2.jokeapi.dev/joke/Any?lang=es&type=single'

const icons = {
    0: '😛',
    1: '🤣',
    2: '😄',
    3: '🤗',
    4: '😑',
    5: '😙',
    6: '😣',
    7: '😥'
}

const iconsCounter = Object.keys(icons)

const getJoke = () => {
    jokeContainer.classList.remove('fade')
    fetch(API_URL)
    .then(data => data.json())
    .then(item => {
        jokeContainer.textContent = `${item.joke}`
        jokeContainer.classList.add('fade')
        const randomIcon = icons[Math.floor(Math.random() * iconsCounter.length)]
        icon.textContent = randomIcon
    })
}

btn.addEventListener('click', getJoke)
getJoke()