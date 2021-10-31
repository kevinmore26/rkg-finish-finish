
import{Route} from 'react-router-dom'
import ProtectedRoute from "./components/ProtectedRoute"
// import PortadaView from './views.js/PortadaView'
import PortadaViewAdopciones from './views/PortadaViewAdopciones'
import PortadaViewArticulos from './views/PortadaViewArticulos'
import PortadaView from './views/PortadaView'
import ArticuloView from './views/ArticuloView'
import IniciarSecionView from './views/IniciarSecionView'
import RegistroView from './views/RegistroView'
import PlanesKev from "./views/PlanesKev"
import Checkout from './views/Checkout'
import CarritoView from './views/CarritoView'
import ContactUs from './views/EmailPrueba'
import CheckoutMembresía from './views/MembresíaViewCheckout'
import Signup from "./views/Keviniciar"
export default function Routes ()
{return(
    <div>
       <Route path="/" exact component={PortadaView} />
       <Route path="/Carrito" exact component={CarritoView} />
       <Route path="/Checkout" exact component={Checkout} />
       <Route path="/Donar" exact component={PlanesKev} />
       <Route path="/Adoptar" exact component={PortadaViewAdopciones} />
       <Route path="/Tienda" exact component={PortadaViewArticulos} />
       <Route path="/email" exact component={ContactUs} />
       <Route path="/IniciarSecion" exact component = {IniciarSecionView}/>
       <Route path="/registro" exact component = {RegistroView}/>
         <Route path="/producto/:id" exact component = {ArticuloView}/>
         
         <Route path="/checkmemb" exact component = {CheckoutMembresía}/>
         <Route path="/signup" exact component = {Signup}/>
    
    </div>
    )


  
}