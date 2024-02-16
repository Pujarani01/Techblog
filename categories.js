let t = document.title
let c = document.getElementById("categories1")
if(t == "Categories"){
    c.style.backgroundColor = "white"
    c.style.color = "blue"
    c.style.height = "50px"
    c.style.width = "120px"
    c.style.borderRadius = "20px"
}
let x=document.getElementById("login1")
let name=localStorage.getItem("name")
if(name){
    x.innerHTML=name
}