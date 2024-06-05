const express = require('express');
const router = express.Router();
const cont = require('../controller/Usercontroller');

router.post("/signup",cont.signup);


module.exports = router;