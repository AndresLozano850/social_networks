import Publication from "../models/publication.js"

// Acciones de prueba
export const testPublication = (req, res) => {
  return res.status(200).send({
    message: "Mensaje enviado desde el controlador: publications.js"
  });
}

// Método para hacer una publicación
export const savePublication = async (req, res) => {
  try {
    
    // Obtener datos del body
    const params = req.body;

    // Verificar que llegue desde el body el parámetro text con su información
    if (!params.text){
      return res.status(400).send({
        status: "error",
        message: "Debes enviar el texto de la publicación"
      });
    }

    // Crear el objeto del modelo
    let newPublication = new Publication(params);

    // Agregar la información del usuario autenticado al objeto de la nueva publicación
    newPublication.user_id = req.user.userId;

    // Guardar la nueva publicación en la BD
    const publicationStored = await newPublication.save();

    // Verificar si se guardó la publicación en la BD (si existe publicationStored)
    if (!publicationStored){
      return res.status(500).send({
        status: "error",
        message: "No se ha guardado la publicación"
      });
    }

    // Devolver respuesta exitosa 
    return res.status(200).send({
      status: "success",
      message: "¡Publicación creada con éxito!",
      publicationStored
    });

  } catch (error) {
    console.log("Error al crear la publicación:", error);
    return res.status(500).send({
      status: "error",
      message: "Error al crear la publicación"
    });
  }
}
