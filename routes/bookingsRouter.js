const express = require('express')
const router = express.Router();
const {createBooking, getUserBookings, updateBookingById, deleteBookingById, createBookingForm} = require("../controllers/bookings/index");

router.use(express.json());

router.post("/new",createBooking);
router.get("/new/:id/:price",createBookingForm)
router.get("/:userId",getUserBookings);
router.put("/:id",updateBookingById);
router.delete("/:id",deleteBookingById);

module.exports = router;