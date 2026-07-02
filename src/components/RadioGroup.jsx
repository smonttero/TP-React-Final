function RadioGroup({ label, name, options, value, onChange }) {
    return (
        <div className="input-group">
            <label>{label}</label>
            <div className="radio-group">
                {options.map((opt) => (
                    <label key={opt.value}>
                        <input
                            type="radio"
                            name={name}
                            value={opt.value}
                            checked={value === opt.value}
                            onChange={onChange}
                        />
                        {opt.text}
                    </label>
                ))}
            </div>
        </div>
    )
}

export default RadioGroup