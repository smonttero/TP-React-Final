import { useState } from 'react'
import Canvas from '../components/Canvas'
import Navbar from '../components/Navbar'
import FormInput from '../components/FormInput'
import RadioGroup from '../components/RadioGroup'
import '../styles/global.css'
import '../styles/reclamos.css'
import '../styles/navbar.css'
import Contact from '../components/Contact'
import '../responsive/reclamosResponsive.css'

const initialState = {
    nombre: '',
    email: '',
    tel: '',
    servicio: 'plataforma afectada',
    tipoProblema: '',
    mensaje: '',
}

function Reclamos() {
    const [formData, setFormData] = useState(initialState)

    // Maneja el cambio de cualquier input, select, radio o textarea
    function handleChange(event) {
        const { name, value } = event.target
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }))
        console.log(`Campo modificado: ${name} -> ${value}`)
    }

    function handleSubmit(event) {
        event.preventDefault()
        console.log('Formulario enviado:', formData)
        // Acá más adelante se puede conectar a un backend o servicio de email
    }

    function handleReset(event) {
        event.preventDefault()
        setFormData(initialState)
        console.log('Formulario reseteado')
    }

    return (
        <Canvas clase="work-sans">
            <Navbar></Navbar>
            <div className='centrarReclamo'>

                <form className="form-reclamos" onSubmit={handleSubmit} onReset={handleReset}>
                    <h2>Envíanos un mensaje</h2>

                    <FormInput
                        label="Nombre Completo"
                        type="text"
                        id="nombre"
                        name="nombre"
                        placeholder="Tu nombre..."
                        value={formData.nombre}
                        onChange={handleChange}
                        required
                    />

                    <FormInput
                        label="Correo Electrónico"
                        type="email"
                        id="email"
                        name="email"
                        placeholder="ejemplo@correo.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />

                    <FormInput
                        label="Teléfono"
                        type="tel"
                        id="tel"
                        name="tel"
                        placeholder="Tu número de teléfono"
                        value={formData.tel}
                        onChange={handleChange}
                    />

                    <div className="input-group">
                        <label htmlFor="servicio">Servicio afectado</label>
                        <select
                            id="servicio"
                            name="servicio"
                            value={formData.servicio}
                            onChange={handleChange}
                        >
                            <option value="plataforma afectada" disabled hidden>
                                Plataforma afectada
                            </option>
                            <option value="netflix">Netflix</option>
                            <option value="disney">Disney</option>
                            <option value="hbo">HBO Max</option>
                            <option value="prime">Prime Video</option>
                            <option value="paramount">Paramount</option>
                        </select>
                    </div>

                    <RadioGroup
                        label="Tipo de problema"
                        name="tipoProblema"
                        value={formData.tipoProblema}
                        onChange={handleChange}
                        options={[
                            { value: 'redes', text: 'Problemas con contraseña.' },
                            { value: 'amigo', text: 'Caducó el inicio de sesión.' },
                            { value: 'otro', text: 'Otro (Explicar)' },
                        ]}
                    />

                    <div className="input-group">
                        <label htmlFor="mensaje">Datos de lo sucedido...</label>
                        <textarea
                            id="mensaje"
                            name="mensaje"
                            placeholder="Escribe aquí tus dudas..."
                            value={formData.mensaje}
                            onChange={handleChange}
                        ></textarea>
                    </div>

                    <div className="button-group">
                        <button type="submit" className="btn-send">Enviar Mensaje</button>
                        <button type="reset" className="btn-reset">Limpiar</button>
                    </div>
                </form>
            </div>
            <hr className='divisorCards' />
            <Contact></Contact>
        </Canvas>
    )
}

export default Reclamos