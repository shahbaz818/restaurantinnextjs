const mongoose = require("mongoose")

const foodSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    detail: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    }
})

const foodItem = mongoose.models.foodItem || mongoose.model("foodItem", foodSchema)
export default foodItem