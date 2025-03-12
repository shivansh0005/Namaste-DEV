const fs=require("fs")

setImmediate(()=>console.log("SetImmediate"));
Promise.resolve().then(() => console.log("Promise"));

fs.readFile("./file.txt","utf8",()=>{
    setTimeout(()=>console.log(" 2ndTimer expired"),0)
    process.nextTick(()=>console.log("2nd process.nexttick()"))
    setImmediate(()=>console.log(" 2nd SetImmediate"));
    console.log("File reading cb");
})

setTimeout(()=>console.log("Timer expired"),0)
process.nextTick(()=>console.log("process.nexttick()"))


console.log("Last line of the file");