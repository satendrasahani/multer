
const {userImage} =require("../middlewares/userImage")

module.exports.userDetails=(req,res)=>{
    res.send("I am in Controllers Working")
}

module.exports.userRegister=(req,res)=>{

    userImage(req, res, function (err) {
       
        if (err) {
            return res.status(400).send({ message: err.message })
        }
        res.status(200).send({
            msg:"upload image successfully"
        })
    })
   
}