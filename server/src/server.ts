import express from 'express';

const app = express();

app.get('/users', (req, res) => {
    res.json([
        'Diego',
        'Cleiton',
        'Robson',
        'Daniel'
    ])

})


app.listen(3333, () => {
    console.log('Servidor rodando na porta 3333')
})