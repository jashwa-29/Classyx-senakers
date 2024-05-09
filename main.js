let ham = document.getElementById("ham")
let clom = document.getElementById("clom")
let nav = document.querySelector(".nav")

ham.addEventListener("click", ()=>{
  clom.style.display="flex"
  nav.style.display="flex"
  ham.style.display="none"
})
clom.addEventListener("click", ()=>{
    clom.style.display="none"
    nav.style.display="none"
    ham.style.display="flex"
  })
