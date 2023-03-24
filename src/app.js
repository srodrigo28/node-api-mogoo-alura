import express from "express";
import db from "./config/dbconect.js";
import livros from "./models/Livro.js";
import routes from "./routes/index.js";

db.on("error" , console.log.bind(console, 'Erro de conexao'))
db.once("open", () => {
 console.log("Sucesso!")
})

const app = express();
// app.use(express.json());

routes(app);

function buscaLivro(id) {
  return livros.findIndex(livro => livro.id == id)
}

export default app