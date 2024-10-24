import { Router } from "express";

const usuariosRoutes = Router();

let usuarios = [];

usuariosRoutes.get("/", (req, res)=> {
    return res.status(200).json({
        message:
        usuarios.lenght == 0 
        ? "Não há usuários cadastrados"
        : `Total de usuarios: ${usuarios.length}`,
        usuarios,
    })
})

export default usuariosRoutes;