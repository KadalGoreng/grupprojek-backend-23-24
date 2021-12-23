const express = require("express")

const HotelController = require("../controllers/Hotel.controller")

const router = express.Router()

router.get("/", HotelController.getSearchHotelbyKota)
router.post("/addhotel", HotelController.inputHotel)
router.get("/", HotelController.getAllHotel)
router.get("/:id_hotel", HotelController.viewHotelById)
router.patch("/:id_hotel", HotelController.updateHotel)
router.get("/:id_hotel", HotelController.getPopularHotel)
router.delete("/:id", HotelController.deleteHotel)


module.exports = router
