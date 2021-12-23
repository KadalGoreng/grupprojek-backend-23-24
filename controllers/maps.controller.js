const MapsModel = require("../models/maps.model");

class MapsController {
  static async getAllMaps(req, res) {
    try {
      const mapsList = await MapsModel.find();
      res.status(200).send(mapsList);
    } catch (error) {
      res.status(500).send({ err: error });
    }
  }
}

module.exports = MapsController;
