function InputField({Label, type, name, placeholder, value, inputRef,onChange}) {
    return(
        <div>
            <label htmlFor="nome">{Label}</label>
            <input 
            type={type} 
            name={name} 
            placeholder={placeholder} 
            value={value}
            ref={inputRef}
            onChange={onChange}
            />
        </div>
    )
}

export default InputField;