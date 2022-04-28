var express = require ('express');
var router = express.Router();
var Usermodels = require('../models/usermodel');

// const users = [];


router.get("/", (req, res) => {
   res.send(users);
    res.send("Hello");
});

router.post("/", (req,res) => {
    const user = req.body;
    users.push(user);
    res.send(user);
});

export default router;

