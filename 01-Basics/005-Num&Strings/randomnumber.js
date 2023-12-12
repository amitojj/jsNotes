let max=999 , min=499;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);

function randomINRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
