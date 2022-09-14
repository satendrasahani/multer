const express=require("express");
const app=express();
const userRoutes=require("./src/routes/usersRoutes")
const bodyParser=require("body-parser")

app.use(bodyParser.json())
app.use("/",userRoutes)

// Error handling when route is not found
app.use((req,res,next)=>{
    const error=new Error("404 Url Not found");
    error.status=404;
    next(error);
})

app.use((error,req,res,next)=>{
    res.status(error.status || 500);
    res.json({
        message:error.message
    })
})

app.listen(8000,()=>{
    console.log("Server Started");
})