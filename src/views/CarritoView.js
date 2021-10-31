import { useContext } from "react"
import { CarritoContext } from "../context/carritoContext"

import Swal from "sweetalert2"
import { Link } from "react-router-dom";
import { useHistory } from 'react-router'
// import nyancat from '../assets/img/nyan-cat.gif'

import Narbar from '../components/narvarcarrito'
// import Kev2 from '../components/Kevinprinci2'

export default function CarritoView() {

    const { carrito } = useContext(CarritoContext)
    const {hacerPedido} = useContext(CarritoContext)
    console.log(carrito)
    const history = useHistory()
    const anadirACarritoContext = async() => {
        // anadirACarrito(articulo)
        const resultado = await Swal.fire({
            icon:'success',
            title: 'Queda un último paso!',
            width: 600,
            padding: '3em',
            showConfirmButton:true,
            showDenyButton:true,
            denyButtonText:'Cancelar',
            confirmButtonText:'Sigamos!',
            background: '#ffff',
            backdrop: `
              rgba(0,0,123,0.4)
              url("https://sweetalert2.github.io/images/nyan-cat.gif")
              left center
              no-repeat
            `,
          })
        if(resultado.isConfirmed){
            history.push('/checkout')
        }else if(resultado.isDenied){
            history.push('/carrito')
        }
        hacerPedido()
    }
    return (
        <div className="container" style={{
            width:'1366px',
            
        }}>
            <Narbar></Narbar>
            <section style={{
                display:'flex',
                justifyContent:'space-between'
            }}>
            <div className="my-4 text-left">
                <h1 className="fw-bold" style={{
                   color:'rgb(54 146 74)',
                   marginBottom:'40px'
                }}>
                <i class="fas fa-paw" style={{
                    marginRight:'10px',
                    color:'rgb(54 146 74)'
                }}></i>
                    Carrito de productos
                </h1>
            </div>
            <div style={{
                marginTop:'25px'
            }}>
            <button className="btn btn-dark btn-lg" onClick={anadirACarritoContext} style={{
                display:'flex',
                justifyContent:'right',
                alignItems:'center',
                background: 'linear-gradient(to top, rgb(54 146 74), rgb(129 218 100))',
                border: 'none',
            }}>
                            {/* <i className="fas fa-shopping-cart me-2"/> */}
                     <Link  style={{
                         textDecoration:'none',
                         color:'white',
                         
                     }}><i class="fas fa-cat" style={{
                         paddingRight:'10px',
                    
                     }}></i>Procesar compra</Link>
                            </button>
            </div>
            </section>
            <table className="table">
                <thead>    
                <tr style={{
                   color:'rgb(54 146 74)'
                }}>
                        <th>Imagen referente</th>
                        <th>Nombre</th>
                        <th>Cantidad</th>
                        <th>Descuento</th>
                        <th style={{
                            paddingRight:'20px',
                            paddingLeft:'30px'
                        }}>P.Unitario</th>
                        <th style={{
                            paddingRight:'20px',
                            paddingLeft:'30px'
                        }}>Precio+IGV </th>
                    </tr>
                </thead>
                <tbody>
                
                    {carrito.map((arti, i) => (
                        
                        <tr key={i}>
                             <td style={{
                                 padding:'0.5rem 1.5rem'
                             }}><img src={arti.content.productoFoto} alt="fotoimagenarti" style={{
                                 width:'50%',borderRadius:'50px'
                                 
                                 
                             }}></img></td>
                             
                            <td style={{
                                    padding: '3.5rem 2.5rem',
                            }}>{arti.content.productoNombre}</td>
                            <td style={{
                                    padding: '3.5rem 2.5rem',
                            }}>{arti.cantidad}</td>
                            <td style={{
                                padding: '3.5rem 2.5rem',
                               
                            }}>{arti.arti_oferta ? "20%" : "Sin Oferta"}</td>
                            <td style={{
                                padding: '3.5rem 2.5rem',
                                
                            }} >  S/{arti.content.productoPrecio}</td>
                            <td style={{
                                padding: '3.5rem 2.5rem',
                            }}>S/{
                                     (arti.cantidad * arti.content.productoPrecio ) +((arti.cantidad * arti.content.productoPrecio)* 0.18 )}
                                   </td>
                        </tr>
                        // ------------------------------------------------
                        // S/{((arti.arti_oferta ? 
                        //     arti.cantidad * arti.productoPrecio * 0.9 : 
                        //     arti.cantidad * arti.productoPrecio)*100)*0.01}
                    ))}
                </tbody>
            </table>
        </div>
    )
}
