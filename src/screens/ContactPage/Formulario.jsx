import { useState } from 'react';
import './ContactPage.css';

const Formulario = () => {
    const [mostrarAlerta, setMostrarAlerta] = useState(false);
    /* const [formularioEnviado, setFormularioEnviado] = useState(false); */

    const handleSubmit = (event) =>{
        event.preventDefault();
        const formData = new FormData(event.target);

        if (!formData.get('nombre') || !formData.get('email') || !formData.get('mensaje')){
            setMostrarAlerta(true);
            /* setFormularioEnviado(false); */
        } 
        else{
            setMostrarAlerta(false);
            /* setFormularioEnviado(true); */
            window.alert('¡El formulario ha sido enviado con éxito!');
        }
        };

    return(
        <div>
            {mostrarAlerta && (
                <div className="alerta">Por favor, complete los campos obligatorios.</div>
            )}
            <form onSubmit={handleSubmit}>
                <div className='card'>
                    <h3>CONTACT</h3>
                    <div className='inputName'>
                        <h4>Full name*</h4>
                        <input className='inputContact' type="text" name="nombre" placeholder="Anakin Skywalker" required />
                    </div>
                    <div className='inputName'>
                        <h4>E-mail*</h4>
                        <input className='inputContact' type="email" name="email" placeholder="lordvader@gmail.com" required />
                    </div>
                    <div className='inputName'>
                        <h4>Tell us about you*</h4>
                        <input className='inputContactMessage' type="text" name="mensaje" placeholder="" />
                    </div>
                    <div>
                        <button className='botonContact' type="submit">SEND</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Formulario;