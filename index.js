let t = document.title
let h = document.getElementById("home")
if(t == "Tech Blog"){
    h.style.backgroundColor = "white"
    h.style.color = "blue"
    h.style.height = "50px"
    h.style.width = "120px"
    h.style.borderRadius = "20px"
}
let x=document.getElementById("login")
const lname=localStorage.getItem("name")
if(lname){
    x.innerHTML=lname
}