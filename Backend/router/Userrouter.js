const express = require('express');
const router = express.Router();
const cont = require('../controller/Usercontroller');

router.post("/signup",cont.signup);
router.post("/signin",cont.signin);


module.exports = router;