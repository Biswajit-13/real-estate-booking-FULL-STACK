const express = require('express');
const router = express.Router();
const passport = require('./passport'); // Replace with the correct path to your passport.js configuration file
const User = require('../models/user.model'); // Replace with the correct path to your User model

router.get("/login", (req, res) => {
    // Check if the user is already authenticated
    if (req.isAuthenticated()) {
        return res.redirect("/"); // Redirect to the dashboard if authenticated
    }
    
    res.render("auth/login");
});

router.get("/register", (req, res) => {
    // Check if the user is already authenticated
    if (req.isAuthenticated()) {
        return res.redirect("/"); // Redirect to the dashboard if authenticated
    }
    
    res.render("auth/register");
})

router.post("/login", passport.authenticate('local', {
    successRedirect: '/properties',  // Redirect upon successful login
    failureRedirect: '/auth/login',     // Redirect upon failed login
    failureFlash: true             // Enable flash messages for errors
}));

// Handle user registration
router.post("/register", async (req, res) => {
    try {
        const { username, password } = req.body;
        
        // Check if the username already exists in the database
        const existingUser = await User.findOne({ username: username });
        
        if (existingUser) {
            // username is already taken
            return res.render("auth/register", { error: "username is already taken." });
        }
        
        // Create a new user
        const newUser = new User({ username, password });
        
        // Save the user to the database
        await newUser.save();
        
        // Redirect to the login page after successful registration
        res.redirect("/auth/login");
    } catch (error) {
        // Handle errors (e.g., validation errors, database errors)
        res.render("auth/register", { error: "An error occurred during registration." });
    }
});

router.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/login"); // Redirect to the login page after logout
});

module.exports = router;
