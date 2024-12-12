const express = require('express');
const router = express.Router();

router.get('/info', (req , res) => {
    console.log("Hello World");
    res.send("Hello World");
})


module.exports = router;