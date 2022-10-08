const express=require("express")
const userController = require("../../controllers/v1/user.controller")
const router = express.Router()

router.route("/all").get(userController.getRandomuser)
router.route("/random").get(userController.getRandomuser)

router.route("/save").post(userController.userSaved)


router.route("/update/:id").patch(userController.userUpdated)

router.route("/bulk-update/:id").patch(userController.userBulkUpdate)

// 
router.route("/delete/:id").delete(userController.userDeleted)




module.exports = router
