const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const passport = require('passport');
const session = require('express-session');
const flash = require('express-flash');
// Serve static files from the 'public' directory
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));


app.use(session({
  secret: '123456789', // Replace with a secure secret key
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // Set secure to true in production with HTTPS
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
// Routes
const authRouter = require('./routes/auth');
const userRouter = require('./routes/user');
const propertyRouter = require('./routes/properties');
const bookingRouter = require('./routes/bookingsRouter');
const homeRouter = require('./routes/home');
const dashboardRouter = require('./routes/dashboard');

app.use("/auth", authRouter);
app.use("/user", userRouter);
app.use("/properties", propertyRouter);
app.use("/bookings", bookingRouter);
app.use("/", homeRouter);
app.use("/dashboard",dashboardRouter);

app.set("view engine", "ejs");

const db = require("./db");
const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
