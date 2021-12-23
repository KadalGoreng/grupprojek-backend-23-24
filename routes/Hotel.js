const express = require("express")

const HotelController = require("../controllers/Hotel.controller")

// creates a new router instance.
const router = express.Router()

router.get("/hotels?filter=city",  HotelController.getSearchHotelbyKota)
router.post("/hotel/addhotel",  HotelController.InputHotel)
router.patch("/hotel/:id_hotel",  HotelController.updateHotel)
router.delete("/hotel/:id_hotel",  HotelController.deleteHotel)
router.get("/hotels?filter=popular",  HotelController.getPopularHotel)
router.get("/hotels?filter=latest",  HotelController.getAllHotel)
router.get("/hotel/:id_hotel",  HotelController.getViewHotelbyid)

module.exports = router