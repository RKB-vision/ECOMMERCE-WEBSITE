const express=require("express")
const router=express.Router()
const orderController=require("../controllers/orderController")
const verify_user=require("../middleware/authMiddleware")

router.post("/",verify_user,orderController.place_order)
router.get("/mine",verify_user,orderController.check_orders)
router.get("/:id",verify_user,orderController.check_1order)

module.exports=router