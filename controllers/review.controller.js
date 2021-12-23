const ReviewModel = require("../models/review.model");

class ReviewController {
    // Create a new review object and save it to db.
    static async createNewReview(req, res) {
        try {
            const body = req.body;
            const judul = body.judul;
            const ulasan = body.ulasan;
            const rating = body.rating;
            const fasilitas = body.fasilitas;
            const bukti_vaksin = body.fasilitas.bukti_vaksin;
            const jarak_fisik = body.fasilitas.jarak_fisik;
            const cuci_tangan = body.fasilitas.cuci_tangan;
            const parkir = body.fasilitas.parkir;
            const unik = body.fasilitas.unik;
            const multilanguage = body.fasilitas.multilanguage;
            const pelayanan = body.fasilitas.pelayanan;
            const penilaian = body.penilaian;
            const layanan = body.penilaian.layanan;
            const kebersihan = body.penilaian.kebersihan;
            const nilai = body.penilaian.nilai;
            const harga = body.harga;
            const foto = body.foto;
            const saran = body.saran;
            const review_loc = req.params.review_loc;

            const review = new ReviewModel({
                judul: judul,
                ulasan: ulasan,
                rating: rating,
                fasilitas: fasilitas,
                bukti_vaksin: bukti_vaksin,
                jarak_fisik: jarak_fisik,
                cuci_tangan: cuci_tangan,
                parkir: parkir,
                unik: unik,
                multilanguage: multilanguage,
                pelayanan: pelayanan,
                penilaian: penilaian,
                layanan: layanan,
                kebersihan: kebersihan,
                nilai: nilai,
                harga: harga,
                foto: foto,
                saran: saran,
                review_loc: review_loc,
            });

            const saved = await review.save();
            res.status(201).send(saved);
        } catch (error) {
            res.status(500).send({ err: error });
        }
    }

    static async getReviewByLoc(req, res) {
        try {
            const id = req.params.id;

            const reviewList = await ReviewModel.find({ review_loc: id })
            res.status(200).send(reviewList);
        } catch (error) {
            res.status(500).send({ err: error })
        }
    }
}

module.exports = ReviewController;