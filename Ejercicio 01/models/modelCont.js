import mongoose from "mongoose";

const contactoSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim : true,            //borra los espacios al final
        unique : false
    },
    apellidos: {
        type: String,
        required: true,
        trim : true,            //borra los espacios al final
        unique : false
    },
    expediente: {
        type: Number,
        required: true,
        trim : true,            //borra los espacios al final
        unique : true
    }
})

export default mongoose.model("Contacto",contactoSchema)