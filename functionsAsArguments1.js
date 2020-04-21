function repeat (fn, n){
    for (i=0;i<n;i++){
        fn();
    }
}

function hello(){
    console.log("hello")
}
function goodbye(){
    console.log("goodbye")
}

repeat(hello, 5);
repeat(goodbye,5);