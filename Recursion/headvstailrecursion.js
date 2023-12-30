//head recursion  
function printnumbershead(n) {
    if (n == 0) {
        return;
    }
    printnumbershead(n - 1);
    console.log(n);
}
printnumbershead(5)
//tail recursion  
function printnumberstail(n) {
    if (n == 0) {
        return;
    }
    console.log(n);
    printnumberstail(n - 1);
}
printnumberstail(5)