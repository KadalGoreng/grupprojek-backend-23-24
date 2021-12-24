const express = require("express")

const WisataController = require("../controllers/wisata.controller")

const router = express.Router()

router.post("/addwisata", WisataController.inputWisata)
router.get("/", WisataController.viewAllWisata)
router.get("/sort", WisataController.getPopularWisata)
router.get("/:id", WisataController.viewWisataById)
router.patch("/:id", WisataController.updateWisata)
router.delete("/:id", WisataController.deleteWisata)

module.exports = router