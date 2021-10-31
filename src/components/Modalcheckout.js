import React from 'react';
import { Link } from "react-router-dom";
import {Modal,Button} from '@material-ui/core';

import  {  useState } from "react";
// import {Modal} from '@material-ui/core';
// import Button from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

import Swal from "sweetalert2"
import Tarjeta from './CreditCard'
import { useHistory } from 'react-router'
import ContactUs from "../views/EmailPrueba"
import emailjs from "emailjs-com";
const useStyles=makeStyles((theme)=>(
{
    modal:{
        position:'absolute',
        widht:400,
        backgroundColor:'white',
        border:'2px solid #000',
        boxShadow: theme.shadows[5],
        padding:"16px 32px 24px",
        top:'50%',
        left:'50%',
        transform:'translate(-50%,-50%)'
        
    },
    textfield:
    {
        width:'100%'
    },
    button:{
        textAlign:'center'
    }
}))

function Modalcheckout(){
    
    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('service_9rrw8aa', 'template_9yeh0sx', e.target, 'user_ZnkxZdX2J0UBPeZvXjpzK')

        .then((result) => {
            alert("Mensagem enviada com sucesso! 👍");
           
        }, (error) => {
            alert(error.message)
            
        });
        e.target.reset()

 
    }
    const history = useHistory()
    const mostrarAlerta= async()=>
{
   
    
    const resultado = await Swal.fire({
        icon:'success',
            title: 'Gracias por preferinos! :)',
            text:'Vuelva pronto',
            width: 600,
            padding: '3em',
            showConfirmButton:true,
            showDenyButton:true,
            denyButtonText:'Home',
            confirmButtonText:'Volver a comprar!',
            background: '#ffff',
            zIndex:'2000',
            backdrop: `
              rgba(0,0,123,0.4)
              url("https://sweetalert2.github.io/images/nyan-cat.gif")
              left center
              no-repeat
            `,
          })
        if(resultado.isConfirmed){
            history.push('/tienda')
        }else if(resultado.isDenied){
            history.push('/')
        }
}
const styles = useStyles();
const [modal, setModal]=useState(false);

const abrirCerrarModal = ()=>
{
    setModal(!modal)
}

const body=(
    <div className={styles.modal} style={{
        border:'none',
        borderRadius:'30px',
        padding:'85px',
        paddingBottom:'30px',
        paddingLeft:'30px',
        paddingRight:'30px'
    }}>
    <div align="center" 
            style={{}}>
                <Tarjeta></Tarjeta>
                {/* <div className="col-lg-8 col-sm-12 form-group pt-1 mx-auto">
                        <label>Email</label>
                            <input type="email" className="form-control" required placeholder="Seu email" name="email"/>
                        </div>    */}
                         <ContactUs/>
                <section style={{
                    position:'relative  ',
                    buttom:'240px'
                }}>
               
                <Button  onClick={()=>mostrarAlerta()} onClick={()=>abrirCerrarModal()} style={{
                    textDecoration:'none',
                    // postition:'relative',
                    // top:'70px',
                    
                }}><Link style={{
                textDecoration:'none'
                }}>Cancelar</Link></Button>
                <Button color="primary" ype="submit" className="btn btn-info" value="Enviar mensagem" onClick={(e)=>{
                    mostrarAlerta();
                    abrirCerrarModal()
                }} style={{
                    textDecoration:'none',
                    
                    backgroundColor: '#33b665',
    color: 'white',
    borderRadius: '37px',
    width: '132px',
    height: '37px',
                }}>Pagar</Button>
                
                {/* <div className="col-lg-8 col-sm-12 pt-3 mx-auto">
                            <input type="submit" className="btn btn-info" value="Enviar mensagem"></input>
                        </div> */}
                </section>
                
                </div>
    </div>
)
{
    return(
        <div className="Modalcheckout" style={{
            color:'skyblue',
            background:'linear-gradient(to top, rgb(54 146 74), rgb(129 218 100))',
            width: '45vw',
    height: '78px',
    borderRadius: '40px',
        }}>
            <Button className={styles.button}  onClick={()=>abrirCerrarModal()} style={{
                width: '480px',
            }}><h5 style={{
                color:'white',
                position:'relative',
                top:'20px',
                width: '480px',
                
            }}>Comprar</h5></Button>
            
            <Modal open={modal} onClose={abrirCerrarModal}>
                {body}
            </Modal>
            
        </div>
    );
}}

export default Modalcheckout