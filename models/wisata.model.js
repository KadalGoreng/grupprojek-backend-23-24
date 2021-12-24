const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const wisataSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    address: {
      street: {
        type: String,
      },
      district: {
        type: String,
      },
      sub_district: {
        type: String,
      },
      postal_code: {
        type: Number,
      },
      state: {
        type: String,
      },
    },
    rating: {
      type: Number,
    },
    image: {
      type: String,
    },
    email: {
      type: String,
    },
    phone_number: {
      type: Number,
    },
    url: {
      type: String,
    },
    reviewId: [{ type: Schema.Types.ObjectId, ref: "review" }],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const WisataModel = mongoose.model("Wisata", wisataSchema);
module.exports = WisataModel;
