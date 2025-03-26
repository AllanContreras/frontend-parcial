import { useState } from "react";
import axios from "axios";

const ConsultarPago = () => {
    const [usuario, setUsuario] = useState("");
    const [pago, setPago] = useState(null);

    const handleConsultar = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/pago/${usuario}`);
            setPago(response.data);
        } catch (error) {
            alert("Pago no encontrado");
        }
    };

    return (
        <div>
            <h2>Consultar Pago</h2>
            <input type="text" placeholder="Usuario" onChange={(e) => setUsuario(e.target.value)} />
            <button onClick={handleConsultar}>Consultar</button>
            {pago && <pre>{JSON.stringify(pago, null, 2)}</pre>}
        </div>
    );
};

export default ConsultarPago;
