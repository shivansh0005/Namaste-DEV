# Learnings

1)Node js is a c++ Applicaion with chroms v8 engine embedded in it,this engine follows ecma script standered and node gives it power of inbuilt apis.

2)Module is a collection of code which is private to itself->we Can export modules and its function and methods using require function
    -Cjs method of exporting module

      module.exports={
        function name;
      }
and we import them like->const {name}=require("path");
-sync in nature.

-Uses Non strict mode.

-----EJS METHOD

-Async in nature
-Uses strict mode
-we have to add  in package.json {
    "type":"module"
}

-we no longer need require func we can export like  export f_name and import like const {f_name} from "path"


# Episode 5->Diving into The Nodejs github repo
--Learnt about how the code in a module is wrapped inside IIFE before using require and module.exports  provided by node js .

--Learnt bts working of require("./path")

    1)Resolving the module
    --checks the type of file wether it is a data.json ,node module or locak file

    2)Loading a module
    -File content is being loaded acc to file type
  3)wrape inside iife
   4)module.exports

5)Caching->It is possible that same module is required by multiple files therefore it is executed just once and then cached for future purpose 

# libuv and async Io

-->Js is sync and single threaded language in nature.

-->When it comes to sync tasks V8 engine embedded din nodejs is enough to manage them.

-->When it comes to async tasks Nodejs uses Libuv a lib written in C language to manage them.

-->This makes it easy for nodejs to perform in non blocking manner.


# sync,async,setTimeout Zero

->Coded a combination of sync and async task and learnt how sync modules block the main thread of js module and stops execution of functios and module ahead.

->Learnt mechanism of node js on how it executed sync tasksvery fast and all async task are given to libuv for executing.

->even if settimeout is executed with 0 seconds  timer it will be executed after the callstack s empty from sync tasks 


# Deep dive into v8 js engine

->when the code is given to v8 engine it passes to few stages before executing->

A)Parsing->The code is converted to tokens which is then converted into an AST

B)Now the ast is passed through and ignition interpretor which converts the code to byte code which is then executed.

C)There are few code which are executed again and again,which is passed to Turbofan compiler which inturn make in more optimized machine code and it is executed after that.

d)Garbage collection also takes place parallely


# libuv & Event Loop
//Also read Nodejs official event loop blog

->Learnt About internal working of Libuv.
->It has 4 phases  timer,poll check and clock.
->all settimeout and set internal are executed in priority basis.
->then all callback func and executed 
->folllowed by setimmediate  which is gthen followed by close phase

->before every phase process.nexttick() and promise callback are executed  

->if the event loop is empty it rests on poll phase.

# Thread pool in Libuv

->In libuv threadpoll size by default is 4
->Learnt wether nodejs is single threaded or multi threaded->depends wether syc or asyn task is being performer
->learnt about epoll and how it informs eventloop of any notification 


