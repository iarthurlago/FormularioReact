import InputField from './InputField';
import Button from './Button';
import Contador from './Contador';
import { useState } from "react";

function FormularioCadastro(){
    const [nome, setnome] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')
    const [erro, setErro] =useState("");
    const [sucesso, setSucesso] =useState(false);

    const handleSubmit = (e) => {
        e.preventdefault()
        
        if (nome.trim === "")
          setErro("O campo desse nome está sem nada")
        console.log({erro})  //function for dont recharge page.
        return
        }

        setErro("")
        setSucesso(true)
        console.log({nome, email, telefone}) // Send for DB

    const handleSubmit = (e) =>{
      e.preventdefault()

      if(nome.length != 11)
        setErro("O campo necessita de 11 digitos")
        console.log({erro})
        return
      }

      setErro("")
      setSucesso(true)
      console.log({nome, email, telefone}) // Send for DB
    return(
      
      <form onSubmit={handleSubmit}>
        {erro && <p style={{color: "red"}}>{erro}</p>}
        {sucesso && <p style={{color: "green"}}>Cadastrado !!</p>}
          <InputField 
          Label={"Nome"} 
          type={"text"} 
          name={"nome"} 
          placeholder={"Digite Seu Nome Aqui"}  
          value={nome} 
          onChange={(e) => setnome(e.target.value)}/>

          <InputField 
          Label={"Email"} 
          type={"email"} 
          name={"email"} 
          placeholder={"Digite Seu Email Aqui"}
          value={email} 
          onChange={(e) => setEmail(e.target.value)}/>

          <InputField 
          Label={"Telefone"} 
          type={"number"} 
          name={"telefone"} 
          placeholder={"*****"}
          value={telefone} 
          onChange={(e) => setTelefone(e.target.value)}/>

          <Button text="Clica"></Button>

        <div>
            <p>Nome do usuario: {nome}</p>
        </div>
          
      </form>
    )
}

export default FormularioCadastro;
