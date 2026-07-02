import { useState, useEffect } from 'react'

function useFetch(url) {
    const [data, setData] = useState([])
    useEffect(() => {
        async function obtenerDatos() {
            try {
                const respuesta = await fetch(url)
                const json = await respuesta.json()
                setData(json)
            } catch (error) {
                console.error("No se pudo conectar con el archivo", error)
            }
        }
        obtenerDatos()
    }, [url])
    return data
}
export default useFetch