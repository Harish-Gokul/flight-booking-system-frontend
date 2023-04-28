async function authUser(email,password){
    let user = JSON.stringify({email:email,password:password})
    try{
        
    const response = await fetch("http://localhost:3000/authUser",{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
          },
        body: user
    })

    const jsonData = await response.json();
    if(response.status==200){
        localStorage.setItem("user",JSON.stringify( jsonData.user))
        localStorage.setItem("token",jsonData.token)
        alert("Logined In sucessfully.. redirecting to dashboard")
        window.open("/user/user_dashboard/user_dashboard.html","_self")
    }
    if(response.status == 400){
        alert(jsonData.message)
    } 
    
}

catch(ex){
    alert("Error occurred while connecting to server...  "+ex)
}
}

async function createAccount(name, phone, email, password){
    let bodyContent = JSON.stringify({name:name,phone:phone,email:email,password:password})
try{
    const response = await fetch("http://localhost:3000/users",{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
          },
        body: bodyContent
    })
    
    const jsonData = await response.json();
    if(response.status==200){
        localStorage.setItem("user",JSON.stringify( jsonData.user))
        localStorage.setItem("token",jsonData.token)
        alert("Logined In sucessfully.. redirecting to dashboard")
        window.open("/user/user_dashboard/user_dashboard.html","_self")
    }
    if(response.status == 400){
        alert(jsonData.message)
    } 
}

catch(ex){
    alert("Error occurred while connecting to server...  "+ex)
}
}

