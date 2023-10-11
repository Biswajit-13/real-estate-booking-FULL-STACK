const express = require('express')
const router = express.Router();
router.use(express.json());

const {
    getAllProperties, getPropertyById, deletePropertyById, updatePropertyById, createProperty,createPropertyForm, searchProperty
} = require("../controllers/properties/index");

router.post("/new",createProperty);
router.get("/new",createPropertyForm);
router.get("/search",searchProperty)
router.get("/",getAllProperties);
router.get("/:id",getPropertyById);
router.put("/:id",updatePropertyById);
router.delete("/:id",deletePropertyById);

module.exports = router;