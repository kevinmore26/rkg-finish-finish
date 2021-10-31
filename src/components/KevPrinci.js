import React from 'react'
import cel123 from '../assets/img/cel123.png'
import horitzontal from '../assets/img/horitzontal.png'
import adopta from '../assets/img/adopta.jpg'
import iconokev1 from '../assets/img/iconokev1.png'
import iconokev2 from '../assets/img/iconokev2.png'
import iconokev3 from '../assets/img/iconokev3.png'
import { width } from 'dom-helpers'
import {Link} from "react-router-dom";


    const App1 = _=>
    {
      
      return (
        <div style={{
          position:'relative',
          bottom: '143px',
        }}>
          <h1 className="porque" style={{
            fontFamily:'cursive',

          }}>
            ¿Quiénes somos y por qué elegirnos?
          </h1>
          
          
        <section className="descripcionempresa">

            <section>

            <img src={adopta} alt="porquelegirnos"style={{
                    display:'flex',
                    justifyContent:'center',
                    margin:'auto',
                    borderRadius:'20px',
                    width:'96%'}} ></img>


            </section>
            <section style={{
                  width: '83vw',
            }}>
            <h4 style={{
                color:'rgb(25, 135, 84)',
                fontFamily:'cursive'
            }}>
                Somos una asociación sin fines de lucro que busca contruir un mundo mejor para mascotas necesitadas con iniciativas sostenibles.
            </h4>
            <hr></hr>
            



            <section className="iconosadopta" style={{
                    
                    display:'flex',
                    margin:'35px',
                    
                    }}> 


                <img src={iconokev1} alt="iconokev1" style={{
                    
                    justifyContent:'center',
                    margin:'auto',
                    borderRadius:'20px',
                    width:'10%'}}></img>
                <img src={iconokev2} alt="iconokev2" style={{
                    
                    justifyContent:'center',
                    margin:'auto',
                    borderRadius:'20px',
                    width:'10%'}}></img>
                <img src={iconokev3} alt="iconokev3" style={{
                    
                    justifyContent:'center',
                    margin:'auto',
                    borderRadius:'20px',
                    width:'10%'}}></img>


            </section>

            <section style={{
                    
                    display:'flex',
                    fontFamily:'cursive',
                    justifyContent:'space-around',
                    color:'rgb(25, 135, 84)'}}>
            <h5>Adopción<br/> Responsable</h5>
            <h5>Donaciones<br/>agua y comida</h5>
            <h5>Salud y <br/>esterelización</h5>
            </section>


            <section >
            <button className="botonkev1"><Link to='/donar' style={{
              textDecoration:'none',
              color:'white'
            }}>DONAR</Link></button>
            </section>





            </section>

        </section>
          
          
          <h1>
            
          </h1>
      
      
        
        </div>
        
      )
}
export default App1