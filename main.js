const login =()=>{
    const username = usernameinput.value
    const password = passwordInput.value
    if(username && password){
        //store this values in local storage
        localStorage.setItem("username",username)
        localStorage.setItem("password",password)
        //navigate to dashboard
        window.location ="index.html"
    }else{
        alert("Please enter your credentials")
    }
}
if(localStorage.getItem("username")){
    usernameinput.innerHTML = localStorage.getItem("username")
}

const signup =()=>{
    window.location="signup.html"
   
}