
document.addEventListener("DOMContentLoaded", () => {
   images () 
    dogs () 
    
let dropdown = document.getElementById('breed-dropdown')
let doggo = document.getElementById('dog-breeds')
dropdown.addEventListener('change', (e) => {
  matchingBreeds(e.target.value)
})
 function matchingBreeds(letter) {
   console.log(dogArr)

console.log("This is my", letter)
// filter over dogArr, return all the elements that startWith() the specific letter



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
  .then (data => breeders(data))
}
  function breeders(data) {
    
    dogArr = Object.keys(data.message)
  
      for(let p in data.message) {
      let dogId = document.getElementById('dog-breeds') 
      let li = document.createElement('li')
      li.innerText = p
      dogId.appendChild(li)
      li.style.cursor = 'pointer'
      li.addEventListener('click', color)
     
   }}
       function color(event) {
event.target.style.color = 'Blue'
  }


  



})

