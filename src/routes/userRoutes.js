const express = require("express")

const router = express.Router();

const userController = require ("../controllers/userController");

router.get("/allusers", userController.getAll);

router.post("/createuser", userController.createUser);

router.put("/updateuser",userController.updateUser);

router.delete("/deleteuser", userController.deleteUser)

module.exports = router;