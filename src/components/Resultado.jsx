import useClima from "../hooks/useClima"

export const Resultado = () => {
    const {resultado} = useClima();
    const {name} = resultado;
  return (
    <div className="contenedor">
        <span>
            El Clima de {name} es :
        </span>
    </div>
  )
}
