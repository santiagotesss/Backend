import {Router} from "express";
import { mostrarCont, nuevoContacto, buscarID, editarCont, borrarCont, buscarCont } from "../database/contactoBD.js";
const router = Router()

var artistas = ["Bethoven","Van Gog","Mozart","Picasso"]

router.get("/", function(req,res){
    res.render("home",{artistas})
})

router.get("/mostrarCont", async function (req, res){
   const contactosBD = await mostrarCont()
   res.render("mostrarCont", {contactosBD})
})

router.get("/contacto", function (req, res){
    res.render("contacto")
})

router.post("/contacto", async function (req, res){
    var nombre = req.body.nombre
    var apellidos = req.body.apellidos
    var expediente = req.body.expediente
    var ciudad = req.body.ciudad
    var estado = req.body.estado
    const resMongo = await nuevoContacto(req.body)
    res.render("respuesta", {nombre, apellidos})
})

router.get("/mostrarcontactos", async function (req, res) {
  const contactosBD=  await mostrarCont()
  res.render("mostrarCont", {contactosBD});
})

router.get("/editarContacto/:id", async function (req, res) {
  const id = req.params.id
  const contactoBD = await buscarID(id)
res.render("editar", {contactoBD});
  
})

router.post("/editarContacto", async function(req, res){
    const resMongo = await editarCont(req.body)
    console.log(resMongo)
    res.redirect("/mostrarCont")
})

router.get("/borrar/:id", async function (req,res){
  const id=req.params.id
  const resMongo= await borrarCont(id)
res.redirect ("/mostrarCont")
})

router.post("/buscarCont", async function (req,res){
  const nombre = req.body.nombre
  const contactosBD = await buscarCont (contactosBD)
  res.render("mostrarCont")
})

export default router