import React from 'react'
import { Navbar, Container, Nav,NavDropdown,DropdownButton,ButtonGroup,Dropdown,Button,ButtonToolbar } from "react-bootstrap";
import {useContext } from 'react';

import { BiUserCircle } from "react-icons/bi";
import Logo from "../assets/img/logo-nuevo.png";
import Image from 'react-bootstrap/Image'
import { Link } from "react-router-dom";
import  {AuthContext} from '../context/authContext';
import {CarritoContext} from '../context/carritoContext'
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'




export default function Narvbar() {
    const {carrito} = useContext(CarritoContext)
    const {userState,signOut} = useContext(AuthContext)
    const totalCarrito = carrito.reduce((total, articulo) => {
		return total + articulo.cantidad;
	}, 0);

    return (
        <div>
            
            <div 
                // className="" style={{display:'flex', 
                // justifyContent:'left'}}
                 >
                     
            <ButtonToolbar
                className="justify-content-between"
                aria-label="Toolbar with Button groups" style={
                    {
                        position: 'relative',
                buttom: '100px',
                background: 'linear-gradient(to top,  rgb(255 255 255), rgb(121, 206, 102))',
                top:'-16px  ',
                width:'100vw',
                right:'126px',
                display:'flex',
                justifyContent:'center'
                
                    }
                }
            >
                 <ButtonGroup  style={{position:'container',
                 height:'100px'
               }}>
                    <Button href='/' variant="link">
                        <Image src={Logo} fluid style={{
                        maxWidth:'63%',
                        }}/>
                    </Button>
                </ButtonGroup>
                <div className="" style={{display:'flex', 
                justifyContent:'center',
                color:'black'}}  >
                    <Navbar expand="lg"
                     variant="dark"
                     style={{
                         fontWeight:'300',
                         fontSize:'200%',
                         color:'black',
                         height:'116px'
                     }}
                     // bg="light"
                     >
                    <Container style={{
                        color:'black',
                        fontSize:'23px',
                        fontFamily:'cursive',
                        position:'relative',
                        left:'40px'
                    }}>
                     <Nav defaultActiveKey="/" as="ul" bg="light">
                     <Nav.Item as="li" style={{
                         color:'black'
                     }}>    
                        <Nav.Link href="/Donar " style={{
                         color:'black'
                     }}>Donar</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li" style={{
                         color:'black'
                     }}>
                     <Nav.Link  href="/Adoptar" style={{
                         color:'black'
                     }}>Adoptar</Nav.Link>
                       </Nav.Item>

                        <Nav.Item as="li" style={{
                         color:'black'
                     }}>
                     <Nav.Link  href="/Tienda" style={{
                         color:'black'
                     }}>Tienda</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li" style={{
                         color:'black'
                     }}>
                     <Nav.Link  href="/Carrito" style={{
                         color:'black'
                     }}>Carrito</Nav.Link>
                       </Nav.Item>
            </Nav>
            </Container>
            </Navbar>
            </div>

            {userState ? (
                <NavDropdown style={{
                    position:'relative',
                    top:'30px',
                    left:'35px'
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
							</NavDropdown>
            ) : (
                <ButtonGroup style={{
                    height:'40px',
                    border:'none',
                    
                }}>
                    <DropdownButton as={ButtonGroup} id="bg-vertical-dropdown-2" 
                     title={
                        <BiUserCircle />}
                    style={{
                    maxHeight:'100%',
                    objectFit:'cover',
                    border:'none'
                     }}
                    alt="imagen login"
                    variant="outline-dark"
                     >
                        
                    <Dropdown.Item eventKey="1"  href="/IniciarSecion">Iniciar Sesión</Dropdown.Item>
                     </DropdownButton>  
                    
               
                 
                </ButtonGroup>
              )}
            <Link className="nav-link2" to="/carrito" style={{
                        display:'flex',
                       
                    }}>
							
							<Badge badgeContent={totalCarrito} color="primary" style={{
                                display:'flex',
                                position: 'relative',top: '37px',right: '38px',
                                
                            }}>
								<ShoppingCartIcon className='carritoshopping' style={{

                                }}/>
							</Badge>
						</Link>

            </ButtonToolbar>
       


            </div>

          


        </div>
    )
}
