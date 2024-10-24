import { Router } from "express";
import usuariosRoutes from "./usuarios.routes.js";

const routes = Router();

// Rota raiz para teste
routes.get("/", (req, res) => {
return res.status(200).json({ message: "Vai São Paulooooooo!" });
});

routes.use("/usuarios", usuariosRoutes);

export default routes;