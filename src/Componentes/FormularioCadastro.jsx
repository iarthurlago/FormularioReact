import InputField from './InputField';
import Button from './Button';
import Contador from './Contador';
import { useState } from "react";

function FormularioCadastro(){
    // const [nome, setnome] = useState('')
    // const [email, setEmail] = useState('')
    // const [telefone, setTelefone] = useState('')
    // const [erro, setErro] =useState("");
    // const [sucesso, setSucesso] =useState(false);
    const [user, setUser] = useState({nome:"", email:"", telefone:''})
    const [verificacao, setVerificacao] = useState({erro:"", sucesso: false})

    const handleSubmit = (e) => {
        e.preventDefault()
        
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
        if(user.email.trim().length != 9){
          setVerificacao((dados) => ({
              ...dados,
              erro: "email está incompleto"
          }))
          console.log(verificacao.erro)
          return
          }
      

        setVerificacao("")
        setVerificacao((dados) => ({
          ...dados,
          sucesso: true
        }))
        console.log(user) // Send for DB
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
          onChange={(e) => setUser((dados) => ({
            ...dados,
            nome: e.target.value
          }))}/>

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
          placeholder={"*****"}
          value={user.telefone} 
          onChange={(e) => setUser((dados) => ({
            ...dados,
            telefone: e.target.value
          }))}/>

          <Button text="Clica"></Button>

        <div>
            <p>Nome do usuario: {user.nome}</p>
        </div>
          
      </form>
    )
}

export default FormularioCadastro;
