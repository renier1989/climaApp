export const Formulario = () => {
  return <div className="contenedor">
    <form >
        <div className="campo">
            <label htmlFor="ciudad" className="ciudad">Ciudad</label>
            <input type="text"
                id="ciudad"
                name="ciudad"
            />
        </div>
        <div className="campo">
            <label htmlFor="ciudad" className="pais">País</label>
            <select name="pais" id="pias">
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
