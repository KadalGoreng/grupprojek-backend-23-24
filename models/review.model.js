const mongoose = require("mongoose")

const reviewSchema = new mongoose.Schema({
    judul: {
        type: String,
    },
    ulasan: {
        type: String,
    },
    rating: {
        //type: ,
    },
    fasilitas: {
        bukti_vaksin: {
            type: String,
        },
        jarak_fisik: {
            type: String,
        },
        cuci_tangan: {
            type: String,
        },
        parkir: {
            type: String,
        },
        unik: {
            type: String,
        },
        multilanguage: {
            type: String,
        },
        pelayanan: {
            type: String,
        },
    },
    penilaian: {
        layanan: {
            type: Number,
        },
        kebersihan: {
            type: Number,
        },
        nilai: {
            type: Number,
        },
    },
    harga: {
        type: String,
    },
    foto: {
        //type:
    },
    saran: {
        type: String,
    },
}, {
    timestamps: true,
    versionKey: false
})


const ReviewModel = mongoose.model("Review", reviewSchema)
module.exports = ReviewModel