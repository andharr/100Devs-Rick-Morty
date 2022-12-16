//DOM Elements
document.querySelector('button').addEventListener('click', getCharacters)
let origin = document.querySelector('.origin')
let place = document.querySelector('.location') 

let max = 0;

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1))
  }

function getCharacterTotal(){
  const url = 'https://rickandmortyapi.com/api/character'

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {

        max = data.info.count

      })

      .catch(err => {
          console.log(`error ${err}`)
      });
}
getCharacterTotal()


function getCharacters(){
    const choice = random(0, max)
    const url = 'https://rickandmortyapi.com/api/character/'+choice
  
    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {

            console.log(url)

            document.querySelector('.name').innerText = `Name: ${data.name}`
            document.querySelector('.charImg').src = data.image
            document.querySelector('.species').innerText = `Species: ${data.species}`
            origin.innerText = `Origin: ${data.origin.name}`
            place.innerText = `Location: ${data.location.name}`
            document.querySelector('.status').innerText = `Status: ${data.status}`
            document.querySelector('.episodes').innerText = `Number of Episodes: ${data.episode.length}`

            console.log(data.origin.name)
            console.log(data.location.name)

            // if (data.origin.name == data.location.name){
            //     origin.classList.add('hidden')
            // } else {
            //     origin.classList.remove('hidden')
            // }
        })
  
        .catch(err => {
            console.log(`error ${err}`)
        });
  }