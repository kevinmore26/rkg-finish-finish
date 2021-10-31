import React from 'react';
import { Link } from "react-router-dom";
import {Modal,TexField,Button} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import  { useEffect, useState, useContext } from "react";
// import {Modal} from '@material-ui/core';
// import Button from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import swal from 'sweetalert'

import Tarjeta from './CreditCard'
import Particles from '../components/Particles'
import Boid from '../components/Boid'
import serviceWorker from '../components/serviceWorker'
import {CarritoContext} from '../context/carritoContext'


// const useStyles=makeStyles((theme)=>(
// {
//     modal:{
//         position:'absolute',
//         widht:400,
//         backgroundColor:'white',
//         border:'2px solid #000',
//         boxShadow: theme.shadows[5],
//         padding:"16px 32px 24px",
//         top:'50%',
//         left:'50%',
//         transform:'translate(-50%,-50%)'
//     },
//     textfield:
//     {
//         width:'100%'
//     },
//     button:{
//         textAlign:'center'
//     }
// }))

function Modalarticulo(){
    const mostrarAlerta=()=>
{
    swal({
        icon:'success',
        title:"Producto añadido!",
        
        text:'Sigue los pasos para completar tu compra!',
        confirmButtonText:'Seguir comprando',
        denyButtonText:'Ir a carrito',
        // button:'Aceptar',
        // showConfirmButton:true,
        //     showDenyButton:true,
        //     confirmButtonText:'Seguir comprando',
        //     denyButtonText:'Ir a carrito',
        buttons:['Cancelar','Aceptar']}).then(function()
            {
                window.location="../carrito"
            }
            // else{
            //     <Link to='/tienda'></Link>
            // }
            
        
        
    );
}
// const styles = useStyles();
// const [modal, setModal]=useState(false);

// const abrirCerrarModal = ()=>
// {
//     setModal(!modal)
// }

// const body=(
//     <div className={styles.modal} style={{
//         border:'none',
//         borderRadius:'30px',
//         padding:'85px'
//     }}>
//             <div align="center"
//             >
//                 <Button onClick={()=>mostrarAlerta()}>Enviar</Button>
//                 <Button  onClick={()=>abrirCerrarModal()}><Link to='/Donar' style={{
//                     textDecoration:'none'
//                 }}>Cancelar</Link></Button>
                
//                 </div>
//     </div>
// )
{
    return(
        <div className="Modalcheckout" style={{
            color:'skyblue'
        }}>
            <Button  onClick={()=>mostrarAlerta()}><h5 style={{
                color:'white',
                position:'relative',
                top:'20px'
            }}>Añadir a carrito</h5></Button>
            
            
        </div>
    );
}}

export default Modalarticulo