const router = require("express").Router();
const { LogIn, SignUp } = require("../controllers/user");

router.post("/login", LogIn);
router.post("/signup", SignUp);

module.exports = router;
