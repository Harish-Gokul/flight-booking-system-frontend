async function authAdmin(email,password){
    let admin = JSON.stringify({email:email,password:password})
    try{
        
    const response = await fetch("http://localhost:3000/authAdmin",{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
          },
        body: admin
    })

    const jsonData = await response.json();
    if(response.status==200){
        localStorage.setItem("admin",JSON.stringify( jsonData.admin))
        localStorage.setItem("token",jsonData.token)
        alert("Logined In sucessfully.. redirecting to dashboard")
        window.open("/admin/admin_dashboard/admin_dashboard.html","_self")
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
    const response = await fetch("http://localhost:3000/admins",{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
          },
        body: bodyContent
    })
    
    const jsonData = await response.json();
    if(response.status==200){
        localStorage.setItem("admin",JSON.stringify( jsonData.admin))
        localStorage.setItem("token",jsonData.token)
        alert("Logined In sucessfully.. redirecting to dashboard")
        window.open("/admin/admin_dashboard/admin_dashboard.html","_self")
    }
    if(response.status == 400){
        alert(jsonData.message)
    } 
}

catch(ex){
    alert("Error occurred while connecting to server...  "+ex)
}
}

