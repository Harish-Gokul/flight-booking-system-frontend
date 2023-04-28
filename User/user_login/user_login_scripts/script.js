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

function processLogin(){
    let email = emailInput.value;
    let password = passwordInput.value
    authUser(email,password)
}

function processCreateAccount(){
    let name = nameInput.value;
    let phone = phoneInput.value;
    let email = emailInput.value;
    let password = passwordInput.value
    createAccount(name,phone,email,password)
}
