const mongoose = require("mongoose")

const HotelsSchema = new mongoose.Schema(
    {
        name: {
            type: String,
        },

        description: {
            type: String,
        },
        
        address: {
            type: String,
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
        phone_num: {
            type: Number,
        },
        url: {
            type: String,
        },
        createdAt: {
            type: Date,
        },
        updatedAt: {
            type: Date,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const HotelsModel = mongoose.model('Hotels', HotelsSchema)

module.exports = HotelsModel
