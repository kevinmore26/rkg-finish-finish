import axios from "axios";

const URL = `${process.env.REACT_APP_API}/gestion/registro`
const Registro = async (cliente) =>{
    try {
        let {data} = await axios.post(URL,cliente)
        return data
    }catch (error){
        throw error
    }
}

export{
    Registro
}


