import mongoose from "mongoose"
import 'dotenv/config'

async function conectar(){
    try{
        const conexion = await mongoose.connect(process.env.KEY_MONGO   )
        // const conexion = mongoose.conectar("mongodb://localhost:27017")
        console.log("Conexxion establecida ATLAS")
    }
    catch(err){
        console.log("ERROR de conexion" + err)
    }
}
export default conectar