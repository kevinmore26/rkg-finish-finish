import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import axios from "axios"
import React, { useState } from 'react'
import mascotas from "../assets/img/mascotasvariaseditada.png"
import Cleave from "cleave.js/react";


const CARD_OPTIONS = {
	iconStyle: "solid",
	style: {
		base: {
			iconColor: "#c4f0ff",
			color: "#fff",
			fontWeight: 500,
			fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
			fontSize: "16px",
			fontSmoothing: "antialiased",
			":-webkit-autofill": { color: "#fce883" },
			"::placeholder": { color: "#87bbfd" }
		},
		invalid: {
			iconColor: "#ffc7ee",
			color: "#ffc7ee"
		}
	}
}

export default function PaymentForm() {
    const [success, setSuccess ] = useState(false)
    const stripe = useStripe()
    const elements = useElements()


    const handleSubmit = async (e) => {
        e.preventDefault()
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })


    if(!error) {
        try {
            const {id} = paymentMethod
            const response = await axios.post("https://rkg-back-pasarela.herokuapp.com/payment", {
                amount: 1000,
                id
            })

            if(response.data.success) {
                console.log("Successful payment")
                setSuccess(true)
            }

        } catch (error) {
            console.log("Error", error)
        }
    } else {
        console.log(error.message)
    }
}

    return (
        <>
        {/* ------------------------------------------------------------------------- */}
        {/* <form className="card-form" style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          width: '435px',
          height:'198px',
          marginTop: '4px',
          textAlign: 'left',
          margin:'0 auto'
        }}>
         
          <label className="input-label" style={{
            fontStyle:'cursive',
            marginTop:'50px'
            
          }}>Nombre propietario</label>
          <input
            type="text"
            placeholder="Ingrese el nombre del propietario"
           
            
            className="text-input"
            maxLength="30" style={{
              padding: '0px 15px 6px 0px;',
    paddingLeft: '0px',
    boxShadow: '0',
    border: '0',
    fontSize: '20px',
    marginBottom: '10px',
    outline: 'none',
    margin: '5px',
    backgroundColor: 'transparent',
    color: 'gray',
    borderBottom: '1px solid rgb(7 153 235)',
    fontWeight: '100',
            }}
          />
         
        </form> */}






        {/* ------------------------------------------------------------------------------ */}
        {!success ? 
        
        <form onSubmit={handleSubmit} style={{width:'35vw',margin:'0 auto'}}>

            <section style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          width: '435px',
          height:'198px',
          marginTop: '4px',
          textAlign: 'left',
          margin:'0 auto'
        }}>
             <label className="input-label" style={{
            fontStyle:'cursive',
            marginTop:'50px'
            
          }}>Nombre propietario</label>
          <input
            type="text"
            placeholder="Ingrese el nombre del propietario"
           
            
            className="text-input"
            maxLength="30" style={{
              padding: '0px 15px 6px 0px;',
    paddingLeft: '0px',
    boxShadow: '0',
    border: '0',
    fontSize: '20px',
    marginBottom: '10px',
    outline: 'none',
    margin: '5px',
    backgroundColor: 'transparent',
    color: 'gray',
    borderBottom: '1px solid rgb(7 153 235)',
    fontWeight: '100',
            }}
          />
</section>
            <fieldset className="FormGroup">
                <div className="FormRow">
                    <CardElement options={CARD_OPTIONS}/>
                </div>
            </fieldset>
            <button style={{
                    textDecoration:'none',
                    
                    backgroundColor: '#7795F8',
    color: 'white',
    borderRadius: '37px',
    width: '132px',
    height: '35px',
    border:'none',
    margin:'0 auto',
    display:'flex',
    justifyContent:'center',
    paddingTop:'5px'}}>Pagar</button>
        </form>
        :
       <div style={{display:'block',justifyContent:'center',textAlign:'center'}}>
           <h1 style={{textAlign:'center', color:'#3cb03d'}}>Una pequeña acción puede cambiar la vida de alguien </h1>
           <h3>De parte del equipo RKG, gracias ! 😸 </h3>
           <h5>Periodicamente mandaremos foto de tu mascota apadrinada</h5>
           <img src={mascotas} alt='' style={{margin:'0 auto',display:'flex',justifyContent:'center'}}></img>
       </div> 
        }
            
        </>
    )
}