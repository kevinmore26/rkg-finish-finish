import emailjs from "emailjs-com";
import React from 'react';
// import {Link} from "react-router-dom"
export default function ContactUs() {


    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('service_9rrw8aa', 'template_9yeh0sx', e.target, 'user_ZnkxZdX2J0UBPeZvXjpzK')

        .then((result) => {
           
           
        }, (error) => {
            alert(error.message)
            
        });
        e.target.reset()

 
    }
    return(
        <div>
            <div className="container">
            <form onSubmit={sendEmail} style={{}}>
                    <div className="row pt-5 mx-auto" >
                        {/* <div className="col-lg-8 col-sm-12 form-group mx-auto">
                            <label>Nome</label>
                            <input type="text" autoFocus className="form-control"  placeholder="Nome" name="name"/>
                        </div> */}
                        <div style={{display:'flex',justifyContent:'space-evenly',
                    position:'relative',
                    bottom:'20px'}}>
                        
                        <div className="col-lg-8 col-sm-12 form-group pt-1 mx-auto" style={{color:'transparent'}}>
                       
                            <input style={{
            padding: '5px',
            paddingleft: '0px',
            boxshadow: '0',
            border: '0',
            fontsize: '20px',
            marginbottom: '10px',
            outline: 'none',
            position:'relative',
            right:'20px',
            backgroundColor: 'transparent',
            color: 'gray',
            borderBottom: '1px solid rgb(7 153 235)',
            fontWeight: '100'}} required placeholder="Confirme su E-mail" name="email"/>
                        </div>    
                        <div className="" style={{position:'relative',border:'none',top:'10px',right:'50px',zIndex:'1000',backgroundColor:'transparent',color:'transparent'}}>
                            <input type="submit" className="" value="✔️Presione antes de pagar" style={{border:'none',
                            // background:'transparent',
                            color:'gray',
                            backgroundColor:'white'
                            }}></input>
                        </div>                    
                        
                    </div>
                    </div>
                </form>
            </div>
        </div>
    )
}