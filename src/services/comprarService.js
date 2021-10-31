import axios from "axios";

const URL = `https://rkg-backend.herokuapp.com/gestion/pedido`

const pedido = async (pedido) =>{
    // console.log(detalle)
    // console.log(cliente_id)
    try {

        // console.log( body)
        // localStorage.setItem('body',JSON.stringify(pedido))

        let {data} = await axios.post(URL,pedido)
        console.log(data)
        return data
    }catch (error){
        throw error
    }
}

export{
    pedido
}