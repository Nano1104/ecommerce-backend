const mongoose = require('mongoose');

const cartsCollection = "carts";

const cartsSchema = new mongoose.Schema({
    products: {
        type: [
            {
                product: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "products"
                },
                quantity: Number
            }
        ]
    }
})

const cartsModel = mongoose.model(cartsCollection, cartsSchema);
module.exports = cartsModel