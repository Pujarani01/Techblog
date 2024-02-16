let t = document.title
let a = document.getElementById("about2")
if(t == "About"){
    a.style.backgroundColor = "white"
    a.style.color = "blue"
    a.style.height = "50px"
    a.style.width = "120px"
    a.style.borderRadius = "20px"
}
let x=document.getElementById("login2")
let name=localStorage.getItem("name")
if(name){
    x.innerHTML=name
}