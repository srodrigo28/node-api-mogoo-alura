import express from "express"

const app = express()

const livros = [ 
    {id: 1, "titulo": "Senhor dos Aneis"},
    {id: 2, "titulo": "O Hobiit"}
]

const jogos = [
    {id: 1, "titulo": "Street Fighter III", "ano": 2000},
    {id: 2, "titulo": "Street Fighter IV", "ano": 2005},
    {id: 3, "titulo": "Street Fighter V", "ano": 2010}
]

app.get('/', (req, res) => {
    res.status(200).send('Curso de Node');
})

app.get('/livros', (req, res) => {
    res.status(200).json(livros)
})

app.get('/jogos', (req, res) => {
    res.status(200).json(jogos)
})

export default app