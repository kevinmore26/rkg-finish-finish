import  axios from "axios"

const URL = `${process.env.REACT_APP_API}/gestion`

const obtenerAdopciones = async() => {
    try {
        let { data } = await axios.get(`${URL}/adopciones/`)
        return data // ya tengo los datos
    } catch (error) {
        throw error
    }
}
const obtenerAdopciones1 = async(busqueda = "") => {
    try {
        let { data } = await axios.get(`${URL}/adopcion-filtro?tamanio=${busqueda}`)
        return data.content //ya tenemos los datos
    } catch (error) {
        throw error
    }
}


const obtenerAdopcionesPorId = async(id) => {
    try {
        let { data } = await axios.get(`${URL}/adopcion/${id}`)
        return data // ya tengo los datos
    } catch (error) {
        throw error
    }

}

export{
    obtenerAdopcionesPorId,
    // 
    obtenerAdopciones,
    obtenerAdopciones1
}

