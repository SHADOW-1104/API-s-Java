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



// Agregar img desde el fetchig
 // if (item.image) {
 //                const imgElement = document.createElement('img');
 //                imgElement.src = item.image;
 //                imgElement.alt = 'Joke image';
 //                imgElement.classList.add('joke-image'); // Opcional: para agregar estilos personalizados

 //                // Asegurarte de limpiar cualquier imagen previa
 //                const existingImg = jokeContainer.querySelector('img');
 //                if (existingImg) {
 //                    jokeContainer.removeChild(existingImg);
 //                }

 //                jokeContainer.appendChild(imgElement);
 //            }

// syntax  FETCH + TRY-CATCH

// const getJoke = () =>{
//     fetch(API_URL)
//     .then(response => {
//         if(!response.ok){
//             throw new Error('Error en la peticion')
//         }
//         return response.json()
//     })
//     .then(data => {
//         jokeContainer.textContent = data.joke

//     }).catch(error => {
//         console.error('Error de la API', error)
//         alert('Algo salio mal')
//     })
// }


// siyntax ASYNC AWAIT

// const getJoke = async () => {
//     try{
//         const response = await fetch(API_URL)
//         if(!response.ok){
//             throw new Error ('Error en la api')
//         }

//         const data = await response.json()
//         jokeContainer.textContent = data.joke
//     }catch (error){
//         console.error('Error',error)
//         alert('Algo salio mal')
//     }

// }


btn.addEventListener('click', getJoke)
getJoke()
