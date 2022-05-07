import express from 'express'

const app = express()

//GET, POST, PUT, PATCH, DELETE

//GET = buscar
//POST = enviar, cadastrar
//PUT = atualizar informações 1 entidade
//PATCH = atualizar 1 campo informação 1 entidade
//DELETE = delete 1 informação

app.get('/feedbacks', (req, res)=>{
    return res.send('Hello world!')
})

app.listen(3333, ()=>{
    console.log('HTTP server running!')
})

//SQLite > em desenvolvimento
//prima > ORM (código JS em vez sql tradicional)