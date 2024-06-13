// Acciones de Prueba para el controlador
export const testFollow = (req, res) => {
    return res.status(200).send({
        message:"Mensaje enviado desde el controlador: follow.js"
    });
};