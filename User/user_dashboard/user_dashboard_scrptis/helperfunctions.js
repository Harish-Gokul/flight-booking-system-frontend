
function getSeatCount(array){
    let count = 0;
    for(let i =0;i<array.length;i++){
        let eachObj = array[i];
        if(eachObj.isAvailable == true) count++
    }
    return count
}

function isUserSignedIn(){
    let token = localStorage.getItem("token")
    let user = localStorage.getItem("user")
    if(!user || !token){
        return false
    } 

    return {user : JSON.parse(user),token:token}
}

function getSeatsStringFromSeatsCollection(arr){
    let output = ""
    arr.forEach(item=>{
        output += item.seatId + ", "
    })
    
    return output.substring(0,output.length-2)
}