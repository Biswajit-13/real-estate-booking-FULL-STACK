
const createPropertyForm = async (req, res) => {
    try {

        res.render("properties/createPropertyForm")
    }
    catch (err) {
        console.log(err)
    }
}
module.exports = createPropertyForm;
