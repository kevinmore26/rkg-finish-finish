import { Link } from "react-router-dom";
import { Navbar,Card, Container, Nav,NavDropdown,DropdownButton,ButtonGroup,Dropdown,Button,ButtonToolbar } from "react-bootstrap";
import perrito1 from "../assets/img/perrito1.png"
import perrito2 from "../assets/img/perrito2.png"
import perrito3 from "../assets/img/perrito3.png"
import perrito4 from "../assets/img/perrito4.png"
import MembresíaKevcss from "./MembresíaKev.css"
import gato4 from "../assets/img/gato4.png"
import gatolisto from "../assets/img/gatitolisto.png"
import Modalkev from "../components/Modalkev"
function MembresíaKev  ()  {
    return (
      
      
      <div className="perritoskev3" style={{
          marginTop:'40px'
      }}>
        
        
        
        <section className="cartasjeje" style={{display:'block',
          marginRight: '-32px'}}>
        <section className="perrito1">
            <img src={perrito1} style={{
              display: 'block',
              width: '100%',
              height:' 215px',
              objectFit: 'cover',
              objectPosition: 'top',
              position: 'relative',
              transition: '0.3s',
              border:'none',
              position
              :'relative',
              bottom:'-16px',
              zIndex:'-2'
            }}></img>
            </section>
           
        <Card style={{ width: '18rem',
      border:'none',
      padding:'0'  }}>
        
            <Card.Body style={{
              padding:'0'
            }}> 
              
        <section className="content" style ={{
          background: 'linear-gradient(to top, rgb(9, 93, 174), rgb(121, 206, 102))',
          borderRadius: '20px',
          overflow: 'hidden',
          height: '350px',
          position: 'relative',
          transition: '0.3s',
          border:'none',
          // boxShadow: '0px 4px 8px rgb(0 0 0 / 29%)',
          padding:' 0px',
          zIndex: '5',
          fontFamily:'cursive'
      
        }}>
            <section className="name" style={{
              
              fontSize: '40px',
              padding: '20px',
              marginBottom: '0px',
              fontWeight: '900',
              lineHeight: '1.15',
              color: '#fff',
              fontFamily:'cursive'
            }}>
            Plan chihuahua
            </section>
            <section className="description"> 
            1.5KG DE COMIDA MENSUALES O LO EQUIVALENTE EN AYUDA Y ADOPCIÓN.
            </section>
            <section className="value">
            S/ 9.50
            </section>
            <section className="period" >
            MENSUALES

            </section >
            <section className="decorative">
            <ul className="link" 
            > 
              <button to="/checkmemb" style={{
                backgroundColor: 'rgb(9, 93, 174)',
                color: 'white',
                textDecoration: 'none',
                border: 'none',
                borderRadius: '80px',
                width: '256px',
                height: '152px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-start',
                position: 'relative',
                right: '15px',
                textDecoration: 'none',
                bottom: '10px',
              }}  >
                <Modalkev></Modalkev>
                 
              </button>
            </ul>
            </section>
            
        </section>
        </Card.Body>
       </Card>
       </section>
      
       <section className="cartasjeje" style={{display:'block',
          marginRight: '-32px'}}>
        <section className="perrito1">
            <img src={gatolisto} style={{
              display: 'block',
              width: '100%',
              height:' 215px',
              objectFit: 'cover',
              objectPosition: 'top',
              position: 'relative',
              transition: '0.3s',
              border:'none',
              position
              :'relative',
              bottom:'-16px',
              zIndex:'-23'
            }}></img>
            </section>
           
        <Card style={{ width: '18rem',
      border:'none',
      padding:'0'  }}>
        
            <Card.Body style={{
              padding:'0'
            }}> 
              
        <section className="content" style ={{
          background: 'linear-gradient(to top, rgb(9, 93, 174), rgb(121, 206, 102))',
          borderRadius: '20px',
          overflow: 'hidden',
          height: '350px',
          position: 'relative',
          transition: '0.3s',
          border:'none',
          // boxShadow: '0px 4px 8px rgb(0 0 0 / 29%)',
          padding:' 0px',
          zIndex: '-25',
      
        }}>
            <section className="name" style={{
              fontFamily: 'Budidaya',
              fontSize: '40px',
              padding: '20px',
              marginBottom: '0px',
              fontWeight: '900',
              lineHeight: '1.15',
              color: '#fff',
             
            }}>
            Plan <br/> Mishifu
            </section>
            <section className="description"> 
            5KG DE COMIDA MENSUALES O LO EQUIVALENTE EN AYUDA Y ADOPCIÓN.
            </section>
            <section className="value">
            S/ 23.50
            </section>
            <section className="period" >
            MENSUALES

            </section >
            <section className="decorative">
            <ul className="link" 
            > 
              <button to="/checkmemb" style={{
                backgroundColor: 'rgb(9, 93, 174)',
                color: 'white',
                textDecoration: 'none',
                border: 'none',
                borderRadius: '80px',
                width: '256px',
                height: '152px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-start',
                position: 'relative',
                right: '15px',
                
                bottom: '10px',
                fontFamily:'cursive'
              }}  >
                 <Modalkev></Modalkev>
              </button>
            </ul>
            </section>
            
        </section>
        </Card.Body>
       </Card>
       </section>

       <section className="cartasjeje" style={{display:'block'}}>
        <section className="perrito1">
            <img src={perrito2} style={{
              display: 'block',
              width: '100%',
              height:' 215px',
              objectFit: 'cover',
              objectPosition: 'top',
              position: 'relative',
              transition: '0.3s',
              border:'none',
              position
              :'relative',
              bottom:'-16px',
              zIndex:'-7'
            }}></img>
            </section>
           
        <Card style={{ width: '18rem',
      border:'none',
      padding:'0'  }}>
        
            <Card.Body style={{
              padding:'0'
            }}> 
              
        <section className="content" style ={{
          background: 'linear-gradient(to top, rgb(9, 93, 174), rgb(121, 206, 102))',
          borderRadius: '20px',
          overflow: 'hidden',
          height: '350px',
          position: 'relative',
          transition: '0.3s',
          border:'none',
          // boxShadow: '0px 4px 8px rgb(0 0 0 / 29%)',
          padding:' 0px',
          zIndex: '5',
          fontFamily:'cursive'
      
        }}>
            <section className="name" style={{
              fontFamily: 'Budidaya',
              fontSize: '40px',
              padding: '20px',
              marginBottom: '0px',
              fontWeight: '900',
              lineHeight: '1.15',
              color: '#fff',
              fontFamily:'cursive'
            }}>
            Plan <br/> Cheems
            </section>
            <section className="description"> 
            12KG DE COMIDA MENSUALES O LO EQUIVALENTE EN AYUDA Y ADOPCIÓN.
            </section>
            <section className="value">
            S/ 38.50
            </section>
            <section className="period" >
            MENSUALES

            </section >
            <section className="decorative">
            <ul className="link" 
            > 
              <button to="/checkmemb" style={{
                backgroundColor: 'rgb(9, 93, 174)',
                color: 'white',
                textDecoration: 'none',
                border: 'none',
                borderRadius: '80px',
                width: '256px',
                height: '152px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-start',
                position: 'relative',
                right: '15px',
                textDecoration: 'none',
                bottom: '10px',
              }}  >
                <Modalkev></Modalkev>
              </button>
            </ul>
            </section>
            
        </section>
        </Card.Body>
       </Card>
       </section>

       <section className="cartasjeje" style={{display:'block'}}>
        <section className="perrito1">
            <img src={gato4} style={{
              display: 'block',
              width: '100%',
              height:' 215px',
              objectFit: 'cover',
              objectPosition: 'top',
              position: 'relative',
              transition: '0.3s',
              border:'none',
              position
              :'relative',
              bottom:'-16px',
              zIndex:'-2',
              fontFamily:'cursive'
            }}></img>
            </section>
           
        <Card style={{ width: '18rem',
      border:'none',
      padding:'0'  }}>
        
            <Card.Body style={{
              padding:'0'
            }}> 
              
        <section className="content" style ={{
          background: 'linear-gradient(to top, rgb(9, 93, 174), rgb(121, 206, 102))',
          borderRadius: '20px',
          overflow: 'hidden',
          height: '350px',
          position: 'relative',
          transition: '0.3s',
          border:'none',
          // boxShadow: '0px 4px 8px rgb(0 0 0 / 29%)',
          padding:' 0px',
          zIndex: '5',
          fontFamily:'cursive'
      
        }}>
            <section className="name" style={{
              fontFamily: 'Budidaya',
              fontSize: '40px',
              padding: '20px',
              marginBottom: '0px',
              fontWeight: '900',
              lineHeight: '1.15',
              color: '#fff',
              fontFamily:'cursive'
            }}>
            Plan <br/>Libre
            </section>
            <section className="description"> 
             Es una donación única, lo que dones se traducirá en comida o ayuda para los albergues de mascotas.             
                          </section>
                          <section className="period" >
           

            </section >
            <section className="period" >
            MENSUALIDAD 
            <br></br>libre
            </section >
           
            <section className="decorative">
            <ul className="link" 
            > 
              <button to="/checkmemb" style={{
                backgroundColor: 'rgb(9, 93, 174)',
                color: 'white',
                textDecoration: 'none',
                border: 'none',
                borderRadius: '80px',
                width: '256px',
                height: '152px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-start',
                position: 'relative',
                right: '15px',
                textDecoration: 'none',
                bottom: '10px',
              }}  >
                <Modalkev></Modalkev>
              </button>
            </ul>
            </section>
            
        </section>
        </Card.Body>
       </Card>
       </section>
       </div>
       
       
    )
}
export default MembresíaKev