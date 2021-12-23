const express = require("express")

const WisataController = require("../controllers/wisata.controller")

const router = express.Router()

router.post("/wisata/addwisata", WisataController.inputWisata)
router.get("/wisata", WisataController.viewAllWisata)
router.get("/wisata/:id_wisata", WisataController.viewWisataById)
router.patch("/wisata/:id_wisata", WisataController.updateWisata)

modul.exports = router