let t = document.title
let l = document.getElementById("login3")
if(t == "Login"){
    l.style.backgroundColor = "white"
    l.style.color = "blue"
    l.style.height = "50px"
    l.style.width = "120px"
    l.style.borderRadius = "20px"
}
let x=document.getElementById("login")
let y=document.getElementById("profile")
let lname=localStorage.getItem("name")
let email=localStorage.getItem("E-mail")
if(lname){
    console.log(lname);
    console.log(email);
    x.style.display="none"
    y.style.display="flex"
    console.log(y);
    document.getElementById("localname").innerHTML="name:"+lname
    document.getElementById("localemail").innerHTML="email:"+email
    l.innerHTML=lname

}


function showsignin(){
    let x1=document.getElementById("login")
    let y1=document.getElementById("signin")
    x1.style.display="none"
    y1.style.display="flex"
}
function savedata(){
    let name=document.getElementById("name").value
    let email=document.getElementById("E-mail").value
    let pass=document.getElementById("password1").value
    let cpass=document.getElementById("cpassword").value
    console.log(name);
    console.log(email);
    console.log(pass);
    console.log(cpass);
    if(pass!= cpass){
             let h3=document.getElementsByTagName("h3")
             h3.style.display="flex"
    }
    else{
        localStorage.setItem("name",name)
        localStorage.setItem("E-mail",email)
        localStorage.setItem("password",pass)
        window.location.href="index.html"
    }

}
function logout(){
    localStorage.removeItem("name")
    localStorage.removeItem("email")
    localStorage.removeItem("password")
    window.location.href="index.html"
}