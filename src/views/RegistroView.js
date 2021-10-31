import { useScrollTrigger } from '@material-ui/core'
import React, { Component } from 'react';
import { Row,Col, Button,Form, FormGroup, Label, Input,ButtonGroup,Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import imgLogin from "../assets/login_2.jpg"
import Logo from "../assets/Logo.jpeg"
import VideoBackground from '../components/VideoBackground';
import { useState } from 'react'
import {Registro} from '../services/Registro'
import swal from 'sweetalert'
import {makeStyles} from '@material-ui/core/styles';
import Modalkev from "../components/Modalkev"
import Swal from "sweetalert2"
import { useHistory } from 'react-router'

export default function RegistroView() {
    const history = useHistory()
    const [value, setValue] = useState(
        {
            clienteNombre: "",
            clienteApellido: "",
            clienteCorreo: "",
            clienteTipo: 3,
            password: "",
            clienteDocumento: "",
            clienteCelular: 0
        }
    ) 
  
     class Test extends React.Component {
        onClick(event) {
            modalRegistro();
            Registarse();
        }
        render() {
           return (
              <a href="/" onClick={this.onClick}>Test Link</a>
           );
        }
     }
    // const modalRegistro = async() => {
        
    //     const resultado = await Swal.fire({
    //         icon:'success',
    //         title:"¡Registrado con éxito!",
    //         showConfirmButton:true,
    //         denyConfirmButton:true,
    //         denyButtonText:'Volverás al inicio',
    //         })
    //     if(resultado.isDenied){
    //         history.push('/')
    //     }
    //     else if(resultado.isConfirmed){
    //         history.push('/')
    //     }
    // }
    const modalRegistro = async() => {
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
            history.push('/')
        }else if(resultado.isDenied){
            history.push('/')
        }
    }

    const [re, setRe] = useState(null)
    
    const crearUsuario = (e) =>{
        setValue({
            ...value,
            [e.target.name]:e.target.value,
       });
       console.log(value)
    }
    const Registarse = async(e)=>{
        e.preventDefault()
        setRe(await Registro(value))
        console.log(re)
    }




    return ( 
        <div>
           

        <Row>   
              <Col xs="3"></Col> 
            <Col xs="6">
                <div style={{display:'flex', justifyContent:'space-around',marginTop:'50px'}}>
                <div >
                <ButtonGroup
                    style={{display:'flex', 
                    justifyContent:'left',
                alignItems:'center',
            marginTop:'70px',marginRight:'200px',padding:'0',width:'25vw'}}
                    >
                        <Button href='/' variant="link">
                            <Image src={Logo} fluid style={{}}/>
                        </Button>
                    </ButtonGroup>
                    <div style={{color:'#198754',fontFamily:'cursive',textAlign:'center',marginRigth:'200px', position:'relative',right:'100px'}}>           
                    <h2 >Hasta que no hayas amado a un animal, una parte de tu alma permanecerá dormida 🐶☘️ </h2>
                    </div>
                </div>

                <div>            
                <Form className = "login">
                    <h1 className="text-center">
                        <span className="font-weight-bold" >Regístrate 🤗</span>
                    </h1>
                <FormGroup className="text-center">
                    <label>Nombre</label>
                    <br/>
                    <input type="text" placeholder="Pepito" name="clienteNombre"  onChange ={e => crearUsuario(e)}style={{width:'25vw',margin:'0 auto'}}className="form-control"/>
                </FormGroup> 
                <FormGroup className="text-center">
                    <label>Apellido</label>
                    <br/>
                    <input type="text" placeholder="Botella" name="clienteApellido"style={{width:'25vw',margin:'0 auto'}}className="form-control" onChange ={e => crearUsuario(e)}/>
                </FormGroup> 
                <FormGroup className="text-center">
                    <label>Email</label>
                    <br/>
                    <input style={{width:'25vw',margin:'0 auto'}}className="form-control" type="email" placeholder="rkg@gmail.com" name="clienteCorreo" onChange ={e => crearUsuario(e)}/>
                </FormGroup>        
                <FormGroup className="text-center">
                    <label>Password</label>
                    <br/>
                    <input type="password" style={{width:'25vw',margin:'0 auto'}}className="form-control" placeholder="Ex. Welcome123!" name="password" onChange ={e => crearUsuario(e)}/>
                </FormGroup>
                <FormGroup className="text-center">
                    <label>Numero de Celular</label>
                    <br/>
                    <input type="phone" style={{width:'25vw',margin:'0 auto'}}className="form-control" placeholder="932131***" name="clienteCelular" onChange ={e => crearUsuario(e)}/>
                </FormGroup> 
                <FormGroup className="text-center">
                    <label>Numero de Dni</label>
                    <br/>
                    <input type="dni" style={{width:'25vw',margin:'0 auto'}}className="form-control" placeholder="748*****" name="clienteDocumento" onChange ={e => crearUsuario(e)}/>
                </FormGroup>   
                <FormGroup className="text-center" style={{textDecoration:'none'}}>
                    <br/>
                    <button href="/" className="btn-lg btn-block " style={{margin:'0 aut',width:'25vw',backgroundColor:'#198754',border:'none',textDecoration:'none',color:'white'}} onClick={Registarse}><Link to="/IniciarSecion"style={{textDecoration:'none',color:'white'}}>Registrarse</Link></button>       
                    
                </FormGroup> 
                
                <p style={{fontFamily:'cursive', margin:'0 auto', textAlign:'center', paddingTop:'20px'}}>¿Ya tienes una cuenta?  <a href="/IniciarSecion" style={{textDecoration:'none',color:'blue'}}>Iniciar Sesión</a></p> 
            </Form>
            </div>
            </div>
            </Col>
        </Row>

        </div>

    )
}