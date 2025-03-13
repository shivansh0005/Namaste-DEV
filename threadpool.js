// $env:UV_THREADPOOL_SIZE = "5"; node threadpool.js
//Use above command to change thread pool size 


//Learn about epoll(linux) &kqueue(Macos)

const fs=require("fs")

const crypto=require("crypto")


crypto.pbkdf2("password","salt",5000000,50,"sha512",(err,key)=>{
    console.log("1-cryptoPBKDF2 done")
})
// fs.readFile("./file.txt","utf-8",()=>{
//     console.log("File readinf CB");
// })

crypto.pbkdf2("password","salt",5000000,50,"sha512",(err,key)=>{
    console.log("2-cryptoPBKDF2 done")
})

crypto.pbkdf2("password","salt",5000000,50,"sha512",(err,key)=>{
    console.log("3-cryptoPBKDF2 done")
})

crypto.pbkdf2("password","salt",5000000,50,"sha512",(err,key)=>{
    console.log("4-cryptoPBKDF2 done")
})

crypto.pbkdf2("password","salt",5000000,50,"sha512",(err,key)=>{
    console.log("5-cryptoPBKDF2 done")
})