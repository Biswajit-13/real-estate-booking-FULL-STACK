const express = require('express');
const router = express.Router();
router.get("/",(req,res)=>{
    res.render("dashboard/dashboard.ejs",{userId:req.user._id});
})

module.exports = router;