import express from "express";
import path from "path";
import { fileURLToPath } from "url";
const { static: serveStatic } = express;
const app = express();
const port = process.env.PORT || 8080; // Utiliza el puerto de Railway o el puerto 8080 por defecto

// Obtener la ruta del directorio actual
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "../.."))); // '..' sube un nivel a la raíz

// Ruta de ejemplo
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "index.html"));
});

// Escucha en el puerto definido por Railway o en el 8080 por defecto
app.listen(port, () => {
  console.log(
    `Servidor escuchando en el puerto ${port}, dir  ../../${__dirname}`
  );
});
