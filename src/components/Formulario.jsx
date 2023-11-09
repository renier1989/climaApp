import { useState } from "react";
import useClima from "../hooks/useClima";

export const Formulario = () => {

    const {busqueda, datosBusqueda, consultarClima} = useClima();
    const {ciudad, pais} = busqueda;
    const [alerta, setAlerta] =useState('');
    const handleSubmit = e => {
        e.preventDefault();
        if(Object.values(busqueda).includes('')){
            setAlerta('Todos los campos son requeridos!');
            return;
        }
        consultarClima(busqueda);
    }
  return <div className="contenedor">
    {alerta && <p>{alerta}</p>}
    <form 
    onSubmit={handleSubmit}
    >
        <div className="campo">
            <label htmlFor="ciudad" className="ciudad">Ciudad</label>
            <input type="text"
                id="ciudad"
                name="ciudad"
                onChange={datosBusqueda}
                value={ciudad}
            />
        </div>
        <div className="campo">
            <label htmlFor="ciudad" className="pais">País</label>
            <select name="pais" id="pias"
            onChange={datosBusqueda}
            value={pais}
            >
                <option value="">--Seleccione un País--</option>
                <option value="US">Estado Unidos</option>
                <option value="VE">Venezuela</option>
                <option value="PE">Perú</option>
                <option value="MX">Mexixo</option>
                <option value="AR">Argentina</option>
                <option value="CO">Colombia</option>
                <option value="ES">España</option>
            </select>
        </div>
        <input type="submit" value="Consultar Clima" />
    </form>
  </div>;
};
