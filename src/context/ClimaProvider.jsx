/* eslint-disable react/prop-types */
import { useState } from "react";
import { createContext } from "react";
import axios from 'axios';

const ClimaContext = createContext();

const ClimaProvider = ({children}) => {


    const [busqueda,setBusqueda] = useState({
        ciudad: '',
        pais : ''
    })
    const [resultado,setResultado] = useState({});
    const [loading,setLoading] = useState(false);
    const [noResponse, setNoResponse] = useState('');

    const datosBusqueda = e => {
        
        setBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        })
    }

    const consultarClima = async datos => {
        setLoading(true);
        setNoResponse(false);
        try {
            const {ciudad, pais} = datos;
            const appId = import.meta.env.VITE_API_KEY;
            const url = `http://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${pais}&limit=1&appid=${appId}`;
            const {data} = await axios(url);
            const [info] = data;
            const urlClima = `https://api.openweathermap.org/data/2.5/weather?lat=${info.lat}&lon=${info.lon}&appid=${appId}`;

            const {data:clima} = await axios(urlClima);
            setResultado(clima);
        } catch (error) {
            setNoResponse('No se encontraron datos!');
        }finally{
            setLoading(false);
        }
    }

    return(
        <ClimaContext.Provider value={{busqueda, datosBusqueda,consultarClima,resultado,loading,noResponse}}>
            {children}
        </ClimaContext.Provider>
    )
}

export {ClimaProvider}

export default ClimaContext;