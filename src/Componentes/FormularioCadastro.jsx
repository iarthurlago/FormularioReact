import InputField from './InputField';
import Button from './Button';
import Contador from './Contador';
import { useState } from "react";

function FormularioCadastro(){
    const [nome, setnome] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')
    return(
      <form>
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
