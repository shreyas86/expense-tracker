import express from "express"
import {registeruser,loginuser,getuserinfo} from "../controllers/authcontroller.js"
import { protect } from "../middleware/authmiddleware.js";
import uploads from "../middleware/uplodmiddleware.js";

const router =express.Router();

router.post("/register",registeruser)
router.post("/login",loginuser)
router.get("/getuser",protect,getuserinfo)
router.post("/uplodimg",uploads.single("image"),(req,res)=>{
    if(!req.file){
        return res.status(400).json({message:"no file uploded"})
    }
    const imageurl=`${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`;
             res.status(200).json({imageurl})

    })
export default router