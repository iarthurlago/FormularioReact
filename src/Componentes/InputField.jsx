function InputField({Label, type, name, placeholder, value, onChange}) {
    return(
        <div>
            <label htmlFor="nome">{Label}</label>
            <input 
            type={type} 
            name={name} 
            placeholder={placeholder} 
            value={value}
            onChange={onChange}
            />
        </div>
    )
}

export default InputField;