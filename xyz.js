console.log("Hello World")

function x(){
    const a=10;

    function b(){
        console.log("b");
    }
}
// console.log(a);
(function iife(){
    console.log("IIFE CALLED");
})()
setTimeout(()=>{
console.log("Hello")
},3000)
