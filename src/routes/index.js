import  express  from "express";
import livros from "./livrosRoutes"

const routes = (app) => {
    app.route('/').get((req, res)  => {
        res.status(200).send({titulo: "Curso de Node com Mongoose"})
    })

    app.use(
        express.json(),
        livros

    )
}

export default routes