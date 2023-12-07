function willFit(holds, cargo) {
    let capacity = holds.reduce((a,c) => {
       let capeach = c == "S" ? 50 :  c == "M" ? 100 : c == "L" ? 200 : 0;
       return a + capeach;
    },0)
    let totalcargo = cargo.reduce((a,c) => a+c ,0)
    return totalcargo < capacity

}

console.log(willFit(["S", "S", "S", "S", "L"], [40, 50, 60, 70, 80, 90, 200]));