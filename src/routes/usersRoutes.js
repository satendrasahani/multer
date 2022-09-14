const express=require("express");
const router=express.Router();
const userController=require("../controllers/userControllers")

const {userImage} =require("../middlewares/userImage")

router.get("/",userController.userDetails);
router.post("/register",userController.userRegister);

module.exports=router