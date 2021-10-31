import axios from "axios";

const URL = `${process.env.REACT_APP_API}/gestion/buscar-cliente`
const URL1 = "https://rkg-backend.herokuapp.com/gestion/login"
const obtenerUsuarios = async () =>{
    try {
        let {data} = await axios.get(URL)
        return data
    }catch (error){
        throw error
    }
}

export{
    obtenerUsuarios
}

const login = async (usuario) =>{   

    try {
        const headers ={
            "Content-Type": "application/json"
        }

        let {data} = await axios.post(URL1, usuario, {headers})
        // setAuthToken(data.content.access)
        // console.log(token)

        // "data.content.access" sirve para separar el token que esta.
        // console.log(data.content.access)
        return data

    }catch (error){
        console.log(error)
        throw error
    }
}

export{
    login
}