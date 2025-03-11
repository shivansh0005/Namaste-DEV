const fs=require("fs");

const https=require("https")
const crypto=require("crypto");

console.log("Hello world");

var a=1078968;
var b=20986;
crypto.pbkdf2Sync("password","salt",5000000,50,"sha512")
console.log("first key")
crypto.pbkdf2("password","salt",500000,50,"sha512",(err,key)=>{
    console.log("2nd key generated");
});


https.get("https://dummyjson.com/products/1",(res)=>{
    console.log("Fetched data successfully");
});

setTimeout(()=>{
    console.log("set timeout called")
},5000)



fs.readFile("./file.txt","utf8",(err,data)=>{
console.log("file data : ",data);
})

function multiply(x,y){
    return x*y;
}

var ans=multiply(a,b);
console.log(ans);


