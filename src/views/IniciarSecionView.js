import PortadaView from './PortadaView'
import { Button,Form, FormGroup, Label, Input,ButtonGroup,Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Logo from "../assets/Logo.jpeg"
import { useForm } from "react-hook-form";
import { useState,UseEffect,useContext } from 'react'
import { AuthContext } from '../context/authContext'
import Narvbar from '../components/Narvbar'
import { login } from '../services/Iniciar_Sesion';
import {perfil_cliente} from '../services/perfilCliente'
import {AuthReactContext} from "../context/reactAuthContext"
import { set } from 'animejs';

export default function IniciarSecionView() {
    const { signIn } = useContext(AuthContext)
    
    const {userState} = useContext(AuthContext)  
    const {Login} = useContext (AuthReactContext)   
    const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
    const recibirSubmit = (datos) => {
		console.log(datos);
	};

   
    const {user} = useContext(AuthReactContext)
    const [value, setValue] = useState(
        {clienteCorreo:"",
        password:""
        }
    );
    
    const crearUsuario = (e) =>{
        setValue({
            ...value,
            [e.target.name]:e.target.value,
       });
    }
    const inicioSesion = async (e) =>{
        e.preventDefault()
        Login(value)
    } 



    return (
        
        <div> 
            <div >
                <ButtonGroup
                    style={{display:'flex', 
                    justifyContent:'center'}}
                >
                    <Button href='/' variant="link">
                        <Image src={Logo} fluid />
                    </Button>
                </ButtonGroup>           

            </div>
            {userState == null && user ==null &&(
                <div>
                <Form className = "login-form" style={{margin:'20px'}}
                //  onSubmit={(e)=>{obtenerDatosPerfil(e)}}
                 >
                    <h1  className="text-center">
                        <span className="font-weight-bold">Bienvenido/a 🤗</span>
                    </h1>
                    <FormGroup className="text-center">
                        <label>Email</label>
                        <br/>
                        <input 
                        className="form-control"
                            type="email" 
                            placeholder="Email" 
                            name="clienteCorreo" 
                            value= {value.clienteCorreo} 
                            onChange={ e => crearUsuario(e)}style={{width:'25vw',margin:'0 auto'}}
                            
                        >
                        </input>
                    </FormGroup>        
                    <FormGroup className="text-center"onSubmit={handleSubmit(recibirSubmit)}>
                        <label>Password</label>
                        <br/>
                        <input type="password" placeholder="password"  className="form-control" name="password" onChange={ e => crearUsuario(e)} style={{width:'25vw',margin:'0 auto'}}>{errors.nombreCompleto && (
								<small className="text-danger">Este campo es obligatorio</small>
							)}
							</input>
                    </FormGroup>
                
                    <FormGroup  className="text-center" style={{margin:'20px'}}>
                        <Button className="btn-lg btn-dark btn-block " type="submit" onClick={inicioSesion} style={{width:'25vw'}} 
                         >Iniciar Sesión</Button>        
                        </FormGroup>         
                   </Form>
                    <div className="
                    d-flex justify-content-center
                    "
                    > 
                        <button className="btn btn-danger btn-lg"  onClick={signIn}  
                           style={{margin:'0 aut',width:'25vw'}} 
                        >
                        <i classname="fab fa-google me-2"/>
                            Ingresa con google
                        </button>
                   </div> 
                   <p style={{fontFamily:'cursive', margin:'0 auto', textAlign:'center', paddingTop:'20px'}}>¿No tienes una cuenta?  <a href="/registro" style={{textDecoration:'none',color:'blue'}}>Crear cuenta</a></p>
            </div>
            )
            }
            {user != null && (<div >
                <h1 style={{
                    display:'flex', 
                    justifyContent:'center'}} 
                >Bienvenido  
                </h1>
                <h1>
                    <span style={{
                        display:'flex', 
                        justifyContent:'center'
                        }}>{user.clienteNombre}  {user.clienteApellido}
                    </span>
                </h1>
                <h2 style={{
                    display:'flex', 
                    justifyContent:'center'}}>Por favor hacer click en el logo para volver a la navegar</h2>
                </div>  )}
            {userState != null && (<div >
                <img
                    src={userState.photoURL}
                    className="me-3"
                    style={{ borderRadius: "50%",
                    marginRight:'45%',
                    marginLeft:'45%',
                    width: "100px",
                    display:'flex', 
                    justifyContent:'center'
                    }}
                    alt="avatar"
                />
                <h1 style={{
                    display:'flex', 
                    justifyContent:'center'}} 
                >Bienvenido  
                </h1>
                <h1>
                    <span style={{
                        display:'flex', 
                        justifyContent:'center'
                        }}>{userState.displayName}
                    </span>
                </h1>
                <h2 style={{
                    display:'flex', 
                    justifyContent:'center',
                    fontFamily:'cursive'}}>Por favor hacer click en el logo para volver a la navegar</h2>
                    
                </div>  )
            }
           

   
            
                            
        </div>
     )
}