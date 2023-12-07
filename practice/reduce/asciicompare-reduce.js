function AsciCompare(arr){
    let xar = Array.from(arr[0]);
    let xnum = xar.reduce((acc,curr) => acc + curr.charCodeAt(0),0)
    let yar = Array.from(arr[1]);
    let ynum = yar.reduce((acc,curr) => acc + curr.charCodeAt(0),0)
    if(xnum<ynum){
        return arr[0];
    }
    else {
        return arr[1];
    }

}

console.log(AsciCompare(["more" , "than"]))