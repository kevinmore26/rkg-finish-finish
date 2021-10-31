import  axios from "axios"

const URL = `${process.env.REACT_APP_API}/gestion`

const obtenerArticulos1 = async(busqueda = "") => {
    try {
        let { data } = await axios.get(`${URL}/producto-filtro?nombre=${busqueda}`)
        return data //ya tenemos los datos
    } catch (error) {
        throw error
    }
}
const obtenerArticulos = async() => {
    try {
        let { data } = await axios.get(`${URL}/productos`)
        return data // ya tengo los datos
    } catch (error) {
        throw error
    }
}

const obtenerPedidos = async() => {
    try {
        let { data } = await axios.get(`${URL}/buscar-pedido`)
        return data // ya tengo los datos
    } catch (error) {
        throw error
    }
}

const obtenerArticulosPorId = async(id) => {
    try {
        let { data } = await axios.get(`${URL}/producto/${id}`)
        return data // ya tengo los datos
    } catch (error) {
        throw error
    }

}

export{
    obtenerArticulosPorId,
    obtenerArticulos,
    obtenerPedidos,
    obtenerArticulos1
}

