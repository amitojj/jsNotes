function subsequences(i,arr,sqnc){
    if (i>=arr.length){
        console.log(sqnc);
        return;
    }
    sqnc.push(arr[i]);
    subsequences(i+1,arr,sqnc);
    sqnc.pop();
    subsequences(i+1,arr,sqnc);
}
subsequences(0,[1,2,3],[]);