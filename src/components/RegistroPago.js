import { useState } from "react";
import axios from "axios";

const RegistroPago = () => {
    const [datos, setDatos] = useState({ usuario: "", productos: [] });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/pagar", datos);
            alert("Pago realizado: " + response.data.mensaje);
        } catch (error) {
            alert("Error al pagar");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Registrar Pago</h2>
            <input type="text" placeholder="Usuario" onChange={(e) => setDatos({...datos, usuario: e.target.value})} required />
            <button type="submit">Pagar</button>
        </form>
    );
};

export default RegistroPago;
