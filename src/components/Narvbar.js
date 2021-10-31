import React from 'react'
import { Navbar, Container, Nav,NavDropdown,DropdownButton,ButtonGroup,Dropdown,Button,ButtonToolbar } from "react-bootstrap";
import {useContext,useEffect,useState} from 'react';
import { FiShoppingCart }  from "react-icons/fi";
import { BiUserCircle } from "react-icons/bi";
import Logo from "../assets/img/logo-nuevo.png";
import Image from 'react-bootstrap/Image'
import { Link } from "react-router-dom";
import  {AuthContext, AuthContextProvider} from '../context/authContext';
import {CarritoContext} from '../context/carritoContext'
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import Narvbarcss from './Narvbar.css'
import Video from "./VideoBackground"
import {AuthReactContext, AuthReactProvider} from "../context/reactAuthContext"
import Cookies from "universal-cookie" ;

export default function Narvbar() {
    const {carrito} = useContext(CarritoContext)
    const {userState,signOut} = useContext(AuthContext)
    const {Out} = useContext(AuthReactContext)
    const totalCarrito = carrito.reduce((total, articulo) => {
		return total + articulo.cantidad;
	}, 0);
    const {user} = useContext(AuthReactContext)
    console.log(user)
    return (
        <div>
            
            <div 
                 >
                     <Video></Video>
            <ButtonToolbar
                className="justify-content-between"
                aria-label="Toolbar with Button groups" style={
                    {
                        position: 'relative',
                buttom: '100px',
                top: '-756px'
                    }
                }
            >
                 <ButtonGroup  style={{position:'container',
               }}>
                    <Button href='/' variant="link" >
                        <Image src={Logo} fluid style={{
                        maxWidth:'63%',
                        }}/>
                    </Button>
                </ButtonGroup>
                <div className="" style={{display:'flex', 
                justifyContent:'center',
                paddingTop: '80px',}}  >
                    <Navbar expand="lg"
                     variant="dark"
                     style={{
                         fontWeight:'300',
                         fontSize:'200%',
                         color:'black',
                         height:' 98px',
                     }}
                     // bg="light"
                     >
                    <Container className='barra' style={{
                        color: 'rgb(255 255 255 / 72%)',
                    }}>
                     <Nav defaultActiveKey="/" as="ul" bg="light">
                     <Nav.Item as="li">    
                        <Nav.Link href="/Donar">Donar</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                     <Nav.Link  href="/Adoptar">Adoptar</Nav.Link>
                       </Nav.Item>

                        <Nav.Item as="li">
                     <Nav.Link  href="/Tienda">Tienda</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                     <Nav.Link  href="/Carrito">Carrito</Nav.Link>
                       </Nav.Item>
            </Nav>
            </Container>
            </Navbar>
            </div>

            {userState == null && user ==null &&( <ButtonGroup style={{
                    height:'40px',
                    border:'none'
                }}>
                    <DropdownButton as={ButtonGroup} id="bg-vertical-dropdown-2" 
                     title={
                        <BiUserCircle />}
                    style={{
                    maxHeight:'100%',
                    objectFit:'cover',
                    border:'none',
                    position:'relative',
                    top:'20px',
                    left:'44px'
                     }}
                    alt="imagen login"
                    variant="outline-dark"
                     >
                        
                    <Dropdown.Item eventKey="1"  href="/IniciarSecion">Iniciar Sesión</Dropdown.Item>
                    
                    </DropdownButton>  
                    </ButtonGroup> )}
            {user != null && (<NavDropdown   style={{
                                            position:'relative',
                                            top: '26px',
                                            left: '63px',
                                            }}
								            title={
									            <div className="d-inline">
										        <span>{user.clienteNombre}  {user.clienteApellido}</span>
									        </div>
								            }
							                >
								            <NavDropdown.Item onClick={Out}>Salir</NavDropdown.Item>
							                </NavDropdown>)}
            {userState != null && (<NavDropdown   style={{
                     position:'relative',
                    top: '26px',
                    left: '63px',
                 }}
								title={
									<div className="d-inline">
										<img
											src={userState.photoURL}
											className="me-2"
											style={{ borderRadius: "50%", width: "30px" }}
											alt="avatar"
										/>
										<span>{userState.displayName}</span>
									</div>
								}
							>
								<NavDropdown.Item onClick={signOut}>Salir</NavDropdown.Item>
							</NavDropdown>)}

          
                       
              
                
              <Link className="nav-link2" to="/carrito" style={{
                        display:'flex',  
                         }}>
							<Badge badgeContent={totalCarrito} color="primary" style={{
                                display:'flex',
                                
                                position: 'relative', top: '37px',right: '37px', }}>
								<ShoppingCartIcon className='carritoshopping' 
                                />
							</Badge>
						</Link>           
          
            </ButtonToolbar>

            </div>

          
        </div>
    )
}