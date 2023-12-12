console.log(x)
// let x = "amit";  //wont work coze in js executioon context in creation phase only the variables declared with var are hoisted.But note that it knows about xas error as said cant use x before initiaklization. so it knows there is an x below but i wont allow you to use it before you initialise that with a value. I wont give it a value of undefined like var.
//ALso called temporal dead zone when x is available but not reachable untill its initialisation .
var x = "amit"; // console.log will return undefined. coz  only  vairiable names are stored in memory mot the values. 
// x = "amit"; // again wont work for same reason as let