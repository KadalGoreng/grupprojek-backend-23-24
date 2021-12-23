const mongoose = require("mongoose");

const mapsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    address: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const MapsModel = mongoose.model("Maps", mapsSchema);
module.exports = MapsModel;
