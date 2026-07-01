function FormInput({ label, type, id, name, placeholder, required }) {
    return (
        <div className="input-group">
            <label htmlFor={id}>{label}</label>
            <input type={type} id={id} name={name} placeholder={placeholder} required={required} />
        </div>
    )
}