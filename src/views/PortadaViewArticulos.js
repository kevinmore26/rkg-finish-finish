import { useState, useEffect,useRef } from "react";
import { obtenerArticulos } from "../services/articulosService";
import { obtenerArticulos1 } from "../services/articulosService";
import GroupArticulos from "../components/GroupArticulos";

import Loading from '../components/Loading'
import Slider from '@material-ui/core/Slider'
import Narrbarkev from '../components/Narbarkev'
import Footer from '../components/Footer'
// import EstrellaProducto from "../components/EstrellaProducto"
import Kev3 from '../components/KevPromo'
import Slidertienda from '../components/Carrusel-productos'


export default function PortadaViewArticulos() {
    const [articulos, setArticulos] = useState([])
    const[cargando,setCargando]=useState(true)
    const[filtroPrecio, setFiltroPrecio] = useState([1,1500])
    const [productosOriginal, setProductosOriginal] = useState([])

    const inputBusqueda = useRef()

    const getArticulos = async () => {
        try {
            const articulosObtenidos = await obtenerArticulos()
            setArticulos(articulosObtenidos)
            
            setCargando(false)
        } catch (error) {
            console.error(error)
        }
    }
    // const getArticulosPrecio = async () => {
    //     try {
    //         const articulosObtenidos = await obtenerArticulos1()
    //         setArticulos(articulosObtenidos)
    //         setProductosOriginal(articulosObtenidos)
    //         setCargando(false)
    //     } catch (error) {
    //         console.error(error)
    //     }
    // }
    // // const inputBusqueda = useRef()
    const manejarPrecio = (evento, nuevosPrecios) => {
        setFiltroPrecio(nuevosPrecios)
    }
    const ejecutarBusqueda = async () => {
        // console.log(inputBusqueda.current.value)
        let miBusqueda1 = inputBusqueda.current.value
        const productosFiltrados = await obtenerArticulos1(miBusqueda1)
        setArticulos(productosFiltrados)
    }
    useEffect(() => {
        getArticulos()
    }, [])
    
    
    // useEffect(() => {
    //     let productosFiltrados = Object.values(productosOriginal).filter((articulos) =>  {
    //         return articulos.content.productoPrecio >= filtroPrecio[0] && articulos.content.productoPrecio <= filtroPrecio[1]
    //     })
    //     setArticulos(productosFiltrados)
    //     // console.log(productosFiltrados)
    
    // },[filtroPrecio])

    

    return (
        <div>
            <Narrbarkev ></Narrbarkev>
            <Slidertienda/>
            
            {cargando ? 
            (<Loading/>) :
            (<div className="py-3">
                <div className="container " style={{
                    display:'flex',
                    maxWidth:'90vw',
                    margin:'0 auto'}}>
                        <div className="row my-2" style={{
                            display:'flex',
                            
                        }}>
                                <div style={{
                                    display :'flex',
                                    // maxWidth:'90vw'  
                                }}>
                                    <div style={{display:'block',paddingTop:'50px',
                                     marginRight:'50px'
                                }} className="col-sm-6 col-md-2" >
                                    <h5 style={{color:'rgb(87, 87, 87)'}}>Filtrar por</h5>
                                    <hr/>
                                    <div className="col-sm-6 col-md-2" style={{width:'250px',color:'rgb(87, 87, 87)'}} >
                                        <h6 >Precio</h6>
                                        <Slider
                                                value={filtroPrecio}
                                                onChange={manejarPrecio}
                                                valueLabelDisplay="auto"
                                                min={1}
                                                max={1500}
                                                style={{
                                                    color:'green'
                                                }}
                                            />
                                    </div>

                                    <hr/>                        
                                    <div className="col-sm-12 col-md-2" style={{width:'250px'}} >
                                        <h6 style={{color:'rgb(87, 87, 87)'}}>Nombre </h6>
                                        <div className="d-flex gap-1">
                                            <input 
                                                type="text" 
                                                className="form-control"
                                                placeholder="Ingrese palabra clave "
                                                ref={inputBusqueda}
                                            />
                                            <button className="btn " onClick={ejecutarBusqueda} style={{ border:'1px solid green', }}>
                                                <i className="fas fa-search" style={{color:'green'}}/>
                                            </button>
                                        </div>
                                    </div>
                                    
                                    <div>.</div>
                                    </div>
                                    <GroupArticulos articulos={articulos}/>
                                </div>
                                
                        </div>
                </div>
                
            </div>)}
            <Footer></Footer>
        </div>
    )
}
