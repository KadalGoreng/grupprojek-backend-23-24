const express = require("express")

const HotelController = require("../controllers/Hotel.controller")

const router = express.Router()

router.post("/addwisata", HotelController.inputHotel)
router.get("/", HotelController.getAllHotel)
router.get("/:id", HotelController.viewHotelById)
router.patch("/:id", HotelController.updateHotel)
router.delete("/:id", HotelController.deleteHotel)
router.get("/:id", HotelController.getPopularHotel)
router.get("/", HotelController.getSearchHotelbyKota)


module.exports = router
