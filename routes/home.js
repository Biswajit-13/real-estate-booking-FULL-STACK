const express = require('express');
const router = express.Router();
router.get("/", (req, res) => {
    res.render("home",{isAuthenticated:req.isAuthenticated()})
})

module.exports = router;