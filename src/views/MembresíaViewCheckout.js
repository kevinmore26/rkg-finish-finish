import { useState } from 'react';
import '../App.css';
// import Loading from '../components/Loading'
import Narrbarkev from '../components/Narbarkev'
import StripeContainer from '../components/StripeContainer';

function PruebaViewCheckout() {
	const [showItem, setShowItem] = useState(false);
	return (
        
		<div className='App'>
            <Narrbarkev/>
			
			{showItem ? (
				<StripeContainer />
			) : (
				<>
				<h3 style={{textAlign:'center', color:'#3cb03d'}}>Por motivos de actualizaciones constantes en la página,<br/> solo aceptaremos pagos mensuales de S/10 😿</h3>
					<img src="https://i.imgur.com/bRGjnjn.png" style={{width:'40vw',zIndex:'-100',display:'flex',justifyContent:'center',margin:'0 auto'}}alt='Spatula' />
					<button onClick={() => setShowItem(true)} style={{
                    textDecoration:'none',
                    
                    backgroundColor: '#7795F8',
    color: 'white',
    borderRadius: '37px',
    width: '140px',
    height: '45px',
    border:'none',
    margin:'0 auto',
    display:'flex',
    justifyContent:'center'}}><p style={{display:'flex', alignItems:'center', paddingTop:'5px'}}>Siguiente</p></button>
				</>
			)}
		</div>
	);
}

export default PruebaViewCheckout;