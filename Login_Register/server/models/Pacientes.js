const mongoose = require("mongoose");

const PacienteSchema = new mongoose.Schema({
    identification: { type: Number, required: false, unique: false },
    name: { type: String, required: true, unique: false },
    lastName: { type: String, required: true, unique: false },
    phone: { type: Number, required: true, unique: false },
    birthday: { type: Date, required: true, unique: false },
    gender: { type: String, required: true, unique: false },
    email: { type: String, required: false, unique: false },
    password: { type: String, required: false, unique: false },
    province: { type: String, required: false, unique: false },
    canton: { type: String, required: false, unique: false },
    distrit: { type: String, required: false, unique: false },
    img: { type: String, required: true, unique: false },
    role1: {
        type: String,
        default: "visitor"
    }
   


});

const PacienteModel = mongoose.model("paciente", PacienteSchema);

module.exports = PacienteModel;