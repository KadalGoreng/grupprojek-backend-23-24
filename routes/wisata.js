const express = require("express")

const WisataController = require("../controllers/wisata.controller")

const router = express.Router()

router.post("/addwisata", WisataController.inputWisata)
router.get("/", WisataController.viewAllWisata)
router.get("/:id_wisata", WisataController.viewWisataById)
router.patch("/:id_wisata", WisataController.updateWisata)

module.exports = router