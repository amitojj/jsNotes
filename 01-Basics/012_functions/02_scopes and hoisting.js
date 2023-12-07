//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    console.log("INNER: ", a);
    
}



console.log(a);
// console.log(b);  //not defined
// console.log(c);  //not defined


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
        console.log(website);
    }
    
    two()
    // console.log(website);  //not allowed

}

one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website); //not allowed
}

// console.log(username);  //not allowed


// ++++++++++++++++++ Hoisting ++++++++++++++++++


console.log(addone(5)) // hoisting means we can call functions before declaring them 

function addone(num){
    return num + 1  // addone function is hoisted
}



// addTwo(5) // but function expressions are not hoisted
const addTwo = function(num){
    return num + 2
}
