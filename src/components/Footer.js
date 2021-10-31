
import React from 'react'


// import {ImFacebook} from "../assets/img/iconos/perro/";

export default function Footer() {
    return (
        <div style={{  zIndex:-1  }}>
        <div className = "main-footer" style={{
                backgroundColor:"black",
                //position:'fixed',
                minWidth:'100%',
                minHeight:'100%',  
                //top:'0%',
                //left:'0%'
                
                color:'white'  ,
                position: 'relative',
                top: '27px',
                
                
            }}>
                {/* Columna 1 */}
            <div className="container" style={{
                position: 'relative',}}>
                <div className="row" style={{
                    
                }}>
                    <div className="col-md-3 col-sm-6" style={{
                        paddingTop:'30px'
                    }}>

                        <h4>Autores 🧨</h4>
                        <ul className="list-unstyled">
                            <li> <a href="https://github.com/kevinmore26" target='blank' style={{color:"white",textDecoration:"none"}}>Kevin More</a></li>
                            <li><a href="https://github.com/zen-rox93" target='blank'  style={{color:"white",textDecoration:"none"}}>Renzo Estrada</a></li>
                            <li><a href="https://github.com/GuillermoMujicaDavila" target='blank' style={{color:"white",textDecoration:"none"}}>Guillermo Mujica</a></li>
                            <li></li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-6">
                 
                    
                      </div>
                    
                    <div className="col-md-3 col-sm-6">
                     </div>
                         <div className="col-md-3 col-sm-6"  style={{position: 'relative',
    top: '40px'}} >
                         <ul className="list-unstyled" style={{display:'flex',
                        justifyContent:'space-around',fontSize:'40px'}}>
                            <li> <a href='https://www.facebook.com/asociacionpatitas/' target='blank' className="fab fa-facebook" style={{color:"white",textDecoration:"none", width:'100px'}}><p></p></a></li>
                            <li> <a href='https://www.instagram.com/adoptamiu/'  target='blank' className="fab fa-instagram" style={{color:"white",textDecoration:"none", width:'100px'}}><p></p></a></li>
                            <li> <a href='https://twitter.com/adopcionmascota?lang=es' target='blank'  className="fab fa-twitter" style={{color:"white",textDecoration:"none", width:'100px'}}><p></p></a></li>
                            <li> <a href='https://github.com/GuillermoMujicaDavila/mascotitasRKG' target='blank'  className="fab fa-github" style={{color:"white",textDecoration:"none", width:'100px'}}><p></p></a></li>
        
                            <li></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom"style={{
                    display:'flex',
                    justifyContent:'end'
                }}>
                <p className="text-xs-center">
                    &copy;{new Date().getFullYear()} City Guide App- All Rights Reserved
                </p>
                
                

            </div>
            </div>
        
        </div>
    </div>
)
}
