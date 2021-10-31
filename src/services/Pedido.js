import axios from "axios";

const URL = `${process.env.REACT_APP_API}/gestion/pedido`
const Pedido = async (pedido) =>{
    try {
        let {data} = await axios.post(URL,pedido)
        return data
    }catch (error){
        throw error
    }
}

export{
    Pedido
}