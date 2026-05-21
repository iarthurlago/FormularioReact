import InputField from './InputField';
import Button from './Button';
import Contador from './Contador';
import { useState, useEffect, useRef } from "react"; 

function FormularioCadastro(){
    const [user, setUser] = useState({nome:"", email:"", telefone:''})
    const [verificacao, setVerificacao] = useState({erro:"", sucesso: false})
    const [registros, setRegistros] = useState('')
    const nomeRef = useRef(null) // <- 1.criar a referencia vazia

      const buscarRegistros = async () => {
      const resposta = await fetch('http://localhost:3000/registros')
      const dados = await resposta.json()
      setRegistros(dados)
    }
    useEffect(() => {
      buscarRegistros()
    }, [])

    useEffect(() => {
      console.log('ref antes do focus:', nomeRef.current)
      nomeRef.current.focus() // <- USE O SEU REF AQUI
      console.log('ref depois do focus:', nomeRef.current)
    })

         
    const handleSubmit = async (e) => {
        e.preventDefault()
        
        if (!user.nome) return console.log()
        
        if (user.nome.trim() === ""){
        setVerificacao((dados) => ({
          ...dados,
          erro: "O campo desse nome está sem nada"
        }))
        console.log(verificacao.erro)  //function for dont recharge page.
        return
        } 

        if(user.telefone.trim().length != 11){
        setVerificacao((dados) => ({
            ...dados,
            erro: "O campo necessita de 11 digitos"
        }))
        console.log(verificacao.erro)
        return
      }

       if(!user.email){
        setVerificacao((dados) => ({
            ...dados,
            erro: "email está incorreto"
        }))
        console.log(verificacao.erro)
        return

        } 
        if(user.email.trim().length < 9){
          setVerificacao((dados) => ({
              ...dados,
              erro: "email está incompleto"
          }))
          console.log(verificacao.erro)
          return
          }

        try{
            //Logo abaixo das validações
        const  resposta = await fetch('http://localhost:3000/registros', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({user})
        })
        const resultado = resposta.json()
        console.log(resultado)

      } catch (error){
        console.log("Erro ao conectar ao servidor")
        setVerificacao({ erro: "Erro ao conectar ao servidor", sucesso: false})
      }
    }


    return(
    
      <form onSubmit={handleSubmit}>
        {verificacao.erro && <p style={{color: "red"}}>{verificacao.erro}</p>}
        {verificacao.sucesso && <p style={{color: "green"}}>Cadastrado !!</p>}
          <InputField 
          Label={"Nome"} 
          type={"text"} 
          name={"nome"} 
          placeholder={"Digite Seu Nome Aqui"}  
          value={user.nome} 
          inputRef={nomeRef}   // <- 2.passar o ref récem-criado como prop          
          onChange={(e) => setUser((dados) => ({
            ...dados,
            nome: e.target.value
          }))}
          
          />

          <InputField 
          Label={"Email"} 
          type={"email"} 
          name={"email"} 
          placeholder={"Digite Seu Email Aqui"}
          value={user.email} 
          onChange={(e) => setUser((dados) => ({
            ...dados,
            email: e.target.value
          }))}/>

          <InputField 
          Label={"Telefone"} 
          type={"number"} 
          name={"telefone"} 
          placeholder={"12345678901"}
          value={user.telefone} 
          onChange={(e) => setUser((dados) => ({
            ...dados,
            telefone: e.target.value
          }))}/>


          <Button text="Clica"></Button>

        <div>
            <p>Nome do usuario: {user.nome}</p>
        </div>
          {registros.length > 0 && (
            <ul>
              {registros.map((item, index) => (
                <li key={index}>

                  {item.nome} - {item.email}
                </li>
              ))}
            </ul>
          )}
      </form>
    )
}

export default FormularioCadastro;
