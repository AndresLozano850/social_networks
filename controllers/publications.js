// Acciones de Prueba.
export const testPublications = (req, res) => {
    return res.status(200).send({
        message:"Mensaje enviado desde el controlador: publications.js"
    });
};