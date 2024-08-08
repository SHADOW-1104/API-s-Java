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

// Peticion con FETCH sin TRY-CATCH
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


// Peticion con FETCH + TRY-CATCH
// const getJoke = () => {
//     jokeContainer.classList.remove('fade');

//     fetch(API_URL)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Problema con la API');
//             }
//             return response.json();
//         })
//         .then(item => {
//             jokeContainer.textContent = `${item.joke}`;
//             jokeContainer.classList.add('fade');

//             const randomIcon = icons[Math.floor(Math.random() * icons.length)];
//             icon.textContent = randomIcon;
//         })
//         .catch(error => {
//             console.error('Error:', error);
//             alert('No pudimos procesar tu petición');
//         });
// };


// Peticion con ASYNC AWAIT + TRY-CATCH
// const fetchJokes = async () => {
//     try{
//         jokeContainer.classList.remove('fade')
//         const response = await fetch(API_URL)
//         if(!response.ok){
//             throw new Error("Problema con la API", error);
//         }
//         const data = await response.json()
//         jokeContainer.textContent = data.joke;
//         jokeContainer.classList.add('fade')
//         const randomIcon = icons[Math.floor(Math.random() * iconsCounter.length)]
//         icon.textContent = randomIcon
//         console.log(data.joke)

//     }catch (error) {
//         alert('No pudimos procesar tu peticion' , error)
//     }

// }
// btn.addEventListener('click', fetchJokes)
// fetchJokes()



btn.addEventListener('click', getJoke)
getJoke()