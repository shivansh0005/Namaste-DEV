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

