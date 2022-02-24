
document.addEventListener("DOMContentLoaded", () => {
   images () 
    dogs () 
  


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
      for(let p in data.message) {
      let dogId = document.getElementById('dog-breeds') 
      let li = document.createElement('li')
      li.innerText = p
      dogId.appendChild(li)
   }}
       
// when user clicks on any <li> the font color will change

const l = document.getElementById('dog-breeds')
const li = document. querySelectorAll('li')
l.addEventListener('click', () => {
 
 l.style.color = 'yellow'
})


})
