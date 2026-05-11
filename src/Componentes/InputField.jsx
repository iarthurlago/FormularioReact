function InputField({Label, type, name, placeholder}) {
    return(
        <div>
            <label htmlFor="nome">{Label}</label>
            <input type={type} name={name} placeholder={placeholder} />
        </div>
    )
}

export default InputField;