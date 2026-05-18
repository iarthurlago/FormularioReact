import express from 'express';
import cors from cors

const servidor = express() 
servidor.use(cors())
servidor.use(express.json())


const registros = []

servidor.post('resgistros', (req, res) =>{
    const dados = req.body //pega a requisição

    if(!dados.nome){
        res.status(400).json({
            erro: "Campo de nome é Obrigatório!"
        })
        return
    }

    console.log(' Dados da requisição!')
    registros.push(dados) // simulado salvar dados no banco

    res.status(201).json({
        mensagem: 'Registros Criados com Sucesso',
        dados: dados 
    })
})

servidor.get('/registros', (req, res) => {
    res.status(200).json(registros)
})

servidor.get('/registros', (req, res) => {
    res.status(200).json({
    mensagem: "Vamos nessa, Servidor no ar Baby!",
    status: "ok 100%"
    })
})

servidor.listen(3001, ()=>{
    console.log("biluga ta ouvindo em http://localhost:3001") 
})