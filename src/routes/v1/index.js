const express = require('express');
const router = express.Router();
const {airplaneController} = require("../../controllers/index");
router.get('/info', (req , res) => {
    console.log("Hello World");
    res.send("Hello World");
})

router.post('/airplane' , async (req , res) => {
    const data = req?.body;
    console.log(data);
    const result = await airplaneController.createAirplane(data);
    res.status(200).json(result);
})



module.exports = router;