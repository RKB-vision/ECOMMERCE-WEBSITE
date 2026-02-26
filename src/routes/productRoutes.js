const express=require("express")
const router=express.Router();
const verify_user=require("../middleware/authMiddleware")
const is_admin=require("../middleware/adminMiddleware")
const productController=require("../controllers/productController")


router.get("/",productController.findallProducts)
router.post("/",verify_user,is_admin,productController.createProduct)
router.put("/:id",verify_user,is_admin,productController.updateProduct)
router.delete("/:id",verify_user,is_admin,productController.deleteProduct)

module.exports=router;