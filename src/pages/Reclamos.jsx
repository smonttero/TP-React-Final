import Canvas from '../components/Canvas'
import Navbar from '../components/Navbar'
import '../styles/global.css'
import '../styles/reclamos.css'
import '../styles/navbar.css'


function Reclamos() {
  return (
    <Canvas>
        <Navbar></Navbar>
        <form>
        <h2>Envíanos un mensaje</h2>
        
        <div>
            <label for="nombre">Nombre Completo</label>
            <input type="text" id="nombre" name="nombre" placeholder="Tu nombre..." required/>
        </div>

        <div className="input-group">
            <label for="email">Correo Electrónico</label>
            <input type="email" id="email" name="email" placeholder="ejemplo@correo.com" required/>
        </div>

        <div className="input-group">
            <label for="tel">Teléfono</label>
            <input type="tel" id="tel" name="tel" placeholder="Tu número de teléfono"/>
        </div>

        <div className="input-group">
            <label for="servicio">Servicio afectado</label>
            <select id="servicio" name="servicio">
                <option selected disabled value="plataforma afectada">Plataforma afectada</option>
                <option value="netflix">Netflix</option>
                <option value="disney">Disney</option>
                <option value="hbo">HBO Max</option>
                <option value="prime">Prime Video</option>
                <option value="paramount">Paramount</option>
            </select>
        </div>
        <div className="input-group">
            <label>Tipo de problema</label>
            <div className="radio-group">
                <label><input type="radio"  value="redes"/>Problemas con contraseña.</label>
                <label><input type="radio"  value="amigo"/>Caducó el inicio de sesión.</label>
                <label><input type="radio"  value="otro"/>Otro (Explicar) </label>
            </div>
        </div>

        <div className="input-group">
            <label for="mensaje">Datos de lo sucedido...</label>
            <textarea id="mensaje" name="mensaje"   placeholder="Escribe aquí tus dudas..."></textarea>
        </div>

        <div className="button-group">
            <button type="submit" className="btn-send">Enviar Mensaje</button>
            <button type="reset" className="btn-reset">Limpiar</button>
        </div>
    </form>
    <div className="bg-container">
        <canvas id="particleCanvas"></canvas>
        <div className="grid-overlay"></div>
    </div>
    </Canvas>
  )
}

export default Reclamos