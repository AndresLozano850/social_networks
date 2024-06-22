import publication from "../models/publication.js";

// Acciones de prueba
export const testPublication = (req, res) => {
    return res.status(200).send({
      message: "Mensaje enviado desde el controlador: publications.js"
    });
}

// Metodo para hacer una Publicación
export const savePublication = async(req,res)=>{
    try {
        return res.status(200).send({
            status: "success",
            message: "!Publicación creada con éxito"
          });
        
    } catch (error) {
        console.log("Error al crear la publicacion",error)
        return res.status(500).send({
            status: "error",
            message: "Error al crear la publicacion"
          });
    }
}
