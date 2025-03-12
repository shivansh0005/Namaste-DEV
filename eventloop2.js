const fs=require("fs")
const a=100;
setImmediate(()=>console.log("SetImmediate"));
Promise.resolve().then(() => console.log("Promise"));

fs.readFile("./file.txt","utf8",()=>{
    console.log("File reading cb");
})

setTimeout(()=>console.log("Timer expired"),0)
process.nextTick(()=>console.log("process.nexttick()"))

function printa(){
    console.log("a=",a)
}
printa()
console.log("Last line of the file");