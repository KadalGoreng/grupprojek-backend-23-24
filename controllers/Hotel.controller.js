const HotelModel = require("../models/Hotel.model");

class HotelController {

    static async getSearchHotelbyKota(req, res) {
        try {
            const HotelList = await HotelModel.find()
            res.status(200).send(HotelList);
        } catch (error) {
            res.status(500).send({err: error})
        }
    }

    static async inputHotel(req, res) {
        try {
            const body = req.body;
            const name = body.name;
            const address = body.address;
            const street = body.address.street;
            const district = body.address.district;
            const sub_district = body.address.sub_district;
            const postal_code = body.address.postal_code;
            const state = body.address.state;
            const image = body.image;
            const email = body.email;
            const phone_number = body.phone_number;
            const url = body.url;

            const wotel = new HotelModel ({
                name: name,
                address: address,
                street: street,
                district: district,
                sub_district: sub_district,
                postal_code: postal_code,
                state: state,
                image: image,
                email: email,
                phone_number: phone_number,
                url: url
            });

            const saved = await hotel.save();
            res.status(201).send(saved);            

        } catch (error) {
            res.status(500).send({ err: error})
        }
    }

    static async getAllHotel(req, res) {
        try {
            const wisataList = await WisataModel.find()
            res.status(200).send(wisataList);
        } catch (error) {
            res.status(500).send({err : error})
        }
    }

    static async viewHotelById (req, res) {
        try {
            const id = req.params.id;

            const wisataList = await WisataModel.findOne({_id: id})
            res.status(200).send(wisataList)
        } catch (error) {
            res.status(500).send({err: error})
        }
    }

    static async updateHotel(req, res) {
        try {
            const id = req.params.id
            const body = req.body
            const name = body.name;
            const address = body.address;
            const street = body.address.street;
            const district = body.address.district;
            const sub_district = body.address.sub_district;
            const postal_code = body.address.postal_code;
            const state = body.address.state;
            const image = body.image;
            const email = body.email;
            const phone_number = body.phone_number;
            const url = body.url;

            await HotelModel.updateOne({_id: id}, {
                name: name,
                address: address,
                street: street,
                district: district,
                sub_district: sub_district,
                postal_code: postal_code,
                state: state,
                image: image,
                email: email,
                phone_number: phone_number,
                url: url,
            })

            res.status(200).send({message: "Success"})

        } catch (error) {
            res.status(500).send({err: error})
        }
    }

    static async getPopularHotel(req, res) {
        try {
            const HotelList = await HotelModel.find()
            res.status(200).send(HotelList);
        } catch (error) {
            res.status(500).send({err: error})
        }
      }

      static async deleteHotel(req, res) {
        try {
            const id = req.params.id;
            await HotelModel.deleteOne({_id: id})
            res.status(200).send({message: `${id} has been Deleted`})
        } catch (error) {
            res.status(500).send({err: error})
        }
    }
};

module.exports = HotelController;