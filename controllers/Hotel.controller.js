const HotelModel = require("../models/Hotel.model")

class HotelController {

    static async getSearchHotelbyKota(req, res) {
        try {
            const HotelList = await HotelModel.find()
            res.status(200).send(HotelList);
        } catch (error) {
            res.status(500).send({err: error})
        }
    }


    static async InputHotel(req, res) {
        try {
            const body = req.body;

            const name = body.name;
            const description = body.description;
            const address = body.address;
            const image = body.image;
            const email = body.email;
            const phone_num = body.phone_num;
            const url = body.url;
            const artis = new ArtisModel({name:name, description:description, address:address, image:image, email:email, phone_num:phone_num, url:url })
        
            const saved = await artis.save()
            res.status(201).send(saved);
        } catch (error) {
            res.status(500).send({err: error})
        }
    }



    static async updateHotel(req, res) {
        try {
            const id = req.params.id;

            const body = req.body;

            const name = body.name;
            const description = body.description;
            const address = body.address;
            const image = body.image;
            const email = body.email;
            const phone_num = body.phone_num;
            const url = body.url;

            await HotelModel.updateOne({_id: id}, {name:name, description:description, address:address, image:image, email:email, phone_num:phone_num, url:url  })
            res.status(200).send({message: "Success"})
        } catch (error) {
            res.status(500).send({err: error});
        }
    }


    static async deleteHotel(req, res) {
        try {
            const id = req.params.id;
            await HotelModel.deleteOne({_id: id})
            res.status(200).send({message: `${id} has been Deleted`})
        } catch (error) {
            res.status(500).send({err: error});
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


      static async getAllHotel(req, res) {
        try {
            const HotelList = await HotelModel.find()
            res.status(200).send(HotelList);
        } catch (error) {
            res.status(500).send({err: error})
        }
    }


    static async getViewHotelbyid(req, res) {
        try {
            const id = req.params.id;
            const HotelList = await HotelModel.findOne({_id: id})
            res.status(200).send(HotelList);
        } catch (error) {
            res.status(500).send({err: error})
        }
    }

}


module.exports = HotelController