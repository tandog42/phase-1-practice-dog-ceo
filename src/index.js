
document.addEventListener("DOMContentLoaded", () => {
   images () 
    dogs ()
    
    
let dropdown = document.getElementById('breed-dropdown')
dropdown.addEventListener('change', (e) => {
  matchingBreeds(e.target.value)
  
})



 function matchingBreeds(letter) {
  // matchingBreeds() => Letter that i choose on drop down is what is being returned
   const filteredDogs = dogArr.filter((breed) => {
     return breed.startsWith(letter)
  
  })


breeders(filteredDogs)
  }

let dogArr = []

  function images ()  {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
fetch(imgUrl)
.then(resp => resp.json())
.then (data => {
  const arr = data.message
  arr.forEach(url => {
    let img = document.createElement('IMG')
    img.src = url
    let images = document.getElementById('dog-image-container')
    images.appendChild(img)
  
    })
  })
}
function dogs() {
  const breedUrl = 'https://dog.ceo/api/breeds/list/all'
  fetch(breedUrl)
  .then(resp => resp.json())
  .then (data => {
    dogArr = Object.keys(data.message)
    breeders(dogArr)
  })
}
  function breeders(dogArr) {
    let dogId = document.getElementById('dog-breeds')
    dogId.innerHTML = ""
      for(let dog of dogArr) {
      let li = document.createElement('li')
      li.innerText = dog
      dogId.appendChild(li)
      li.style.cursor = 'pointer'
      li.addEventListener('click', color)
     
   }}
       function color(event) {
event.target.style.color = 'Blue'
  }
})

