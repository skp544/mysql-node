const {
  createUser,
  getUsers,
  updateUser,
  getSingleUser,
} = require("../controllers/userController");

const router = require("express").Router();

router.post("/create", createUser);
router.get("/get-all", getUsers);
router.put("/update/:userId", updateUser);
router.get("/get/:userId", getSingleUser);

module.exports = router;
