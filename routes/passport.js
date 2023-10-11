const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user.model'); // Replace with your User model import


// Configure the local strategy (assuming you're using a username and password)
passport.use(new LocalStrategy(
    async (username, password, done) => {
        try {
            const user = await User.findOne({ username: username });

            if (!user) {
                return done(null, false, { message: 'Incorrect username.' });
            }

            // Check if the password is correct
            const isPasswordValid = await user.comparePassword(password);

            if (!isPasswordValid) {
                return done(null, false, { message: 'Incorrect password.' });
            }

            return done(null, user);
        } catch (err) {
            return done(err);
        }
    }
));

// Serialize and deserialize user (used for sessions)
passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findById(id);
        done(null, user);
    } catch (err) {
        done(err);
    }
});

module.exports = passport;