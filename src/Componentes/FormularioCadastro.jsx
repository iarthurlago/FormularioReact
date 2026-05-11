import InputField from './InputField';

function FormularioCadastro(){
    return(
       <form>
        <div>
          <InputField Label={"Label"} type={"type"} name={"nome"} />
          <InputField Label={"Nome"} type={"text"} name={"nome"} placeholder={"Digite Seu Nome Aqui"} />        </div> 
      </form>
    )
}

export default FormularioCadastro;
