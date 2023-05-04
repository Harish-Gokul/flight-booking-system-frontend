addEventListener("DOMContentLoaded",()=>{
    let admin = localStorage.getItem("admin")
    if(admin){
        let adminJson = JSON.parse(admin);
        alert("Welcome Back "+adminJson.name+" \n redirecting to dashboard");
        window.open("../admin_dashboard/admin_dashboard.html","_self")
    }
})

function viewCreateAccount(){
    displayStatusHeading.innerText = "Create Account"
    signUpDivs.forEach((item)=>{
        item.style.display = "block"
    })
    loginDivs.forEach((item)=>{
        item.style.display = "none"
    })
}

function viewLogin(){
    displayStatusHeading.innerText = "Login"
    signUpDivs.forEach((item)=>{
        item.style.display = "none"
    })
    loginDivs.forEach((item)=>{
        item.style.display = "block"
    })
}
passwordInput.addEventListener("keydown",(e)=>{
    if(e.key == "Enter") processLogin();
})

function processLogin(){
    let email = emailInput.value;
    let password = passwordInput.value
    authAdmin(email,password)
}

function processCreateAccount(){
    let name = nameInput.value;
    let phone = phoneInput.value;
    let email = emailInput.value;
    let password = passwordInput.value
    createAccount(name,phone,email,password)
}
