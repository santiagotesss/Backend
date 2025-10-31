import Contacto from"../models/modelCont.js"

export async function nuevoContacto({nombre, apellidos, expediente}){
    const contacto = new Contacto({nombre, apellidos, expediente})
    const resMongo = await contacto.save()
    return resMongo
}

export async function mostrarCont() {
    const contactosBD = await Contacto.find()
    return contactosBD
}

export async function buscarID(id) {
    console.log(id);
    
    const contactoBD = await Contacto.findById(id)
    console.log(contactoBD);
    
    return contactoBD
}

export async function editarCont({id, nombre, expediente}) {
    const resMongo = await Contacto.findByIdAndUpdate(id,{nombre, expediente})
    return resMongo
}

export async function borrarCont(id) {
    const resMongo = await Contacto.findByIdAndUpdate(id)
    return resMongo
}

export async function buscarCont({id, nombre, expediente}) {
    const resMongo = await Contacto.find({nombre})
    return resMongo
}