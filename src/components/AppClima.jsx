import useClima from "../hooks/useClima";
import { Formulario } from "./Formulario";
import { Loading } from "./Loading";
import { Resultado } from "./Resultado";

export const AppClima = () => {
  const { resultado,loading,noResponse } = useClima();
  return (
    <>
      <main className="dos-columnas">
        <Formulario />

        { loading ? <Loading/> : 
        resultado?.name ? <Resultado /> : noResponse ?
        <p>{noResponse}</p> : null
        }
      </main>
    </>
  );
};
