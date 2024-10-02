const mongoose = require("mongoose")

const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    people: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
})

const Customer = mongoose.models.Customer || mongoose.model("Customer", customerSchema)
export default Customer