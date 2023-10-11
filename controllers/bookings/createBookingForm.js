const createBookingForm = async (req, res) => {
    const propertyId = req.params.id;
    const propertyPrice = req.params.price;
res.render("bookings/bookingForm",{propertyId:propertyId,propertyPrice:propertyPrice,isAuthenticated:req.isAuthenticated(),userId: req.user._id });

}
module.exports = createBookingForm;