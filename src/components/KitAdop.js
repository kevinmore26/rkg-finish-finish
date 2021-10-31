import React from 'react'
import perritoscolgados from '../assets/img/mascotascolgadaseditada.png'
import { width } from 'dom-helpers'
import {Link} from "react-router-dom";


    const KitAdop = _=>
    {
      
      return (
        <div style={{borderRadius:'50px',border:'2px solid #3cb03d',display:'flex', justifyContent:'center',maxWidth:'60vw',margin:'0 auto',padding:'20px',maxHeight:'180px',marginTop:'50px'}}>
            <div>
                <img src='https://i.imgur.com/Co3UHrj.png' alt='Kit' style={{maxWidth:'250px',borderRadius:'60px'}}></img>
            </div>
            <div>
                <p style={{textAlign:'center',fontFamily:'cursive',display:'flex',paddingTop:'20px',color:'#3cb03d'}}>¡Todos los adoptados venimos con un kit de regalo que incluye: baño, cama, galletas, collar , plaquita de identificación, sesión de paseo, sesión de spa, microchip de identificación y antipulgas!</p>
                <img src={perritoscolgados}alt='Kit1' style={{maxWidth:'250px',position:'relative',bottom:'225px'}}></img>
            </div>
        </div>
      )
}
export default KitAdop