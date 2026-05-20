import express from 'express';
import cors from 'cors';

const app = express() 
app.use(cors())
app.use(express.json())

const registros = []
app.get('/registros', (req, res) => {
    res.status(200).json({
    mensagem: "Vamos nessa, Servidor no ar Baby!",
    status: "ok 100%"
    })
})

app.post('/resgistros', (req, res) => {
    const dados = req.body //pega a requisição
    registros.push(dados)

    res.status(201).json({
        mensagem: "Registrado com Sucesso",
        dados: dados
    })
    })

app.post('resgistros', (req, res) =>{
    const dados = req.body //pega a requisição
    
    if(!dados.nome){
      return res.status(400).json({
         erro: "Campo de nome é Obrigatório!"
        })
    }

    console.log(' Dados da requisição!')
    registros.push(dados) // simulado salvar dados no banco

    res.status(201).json({
        mensagem: 'Registros Criados com Sucesso',
        dados: dados 
    })
})


app.listen(3000, ()=>{
    console.log("biluga ta ouvindo em http://localhost:3000") 
})

