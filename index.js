import express from "express"
import rutas from "./routes/rutas.js"
import conectar from "./database/db.js"

const app = express()

async function conexion() {
    await conectar()
}

await conexion()

app.use(express.urlencoded({extended:true}))
app.set("view engine", "ejs")
app.use("/", rutas)

const PORT = process.env.PORT||3000
app.listen(PORT, function(){
    console.log("Aplicacion en http://localhost:"+PORT)
})