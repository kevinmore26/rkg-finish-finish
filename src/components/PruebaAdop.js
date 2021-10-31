import { useState} from "react"
import { Modal,Button } from 'react-bootstrap'
import imagenModal from '../assets/img/relleno.jpg'


// const URL_BACKEND ="http://127.0.0.1:8000/";

// export class ProductoService{
//     async getProductos(){
//         const result=await fetch(`${URL_BACKEND}/gestion/assets/`,{
//             method:'GET',
//             headers:{
//                 "Content-Type":"application/json",
//             },
//         });
//         console.log(result);
//         const data=await result.json();
//         console.log(data);
//         return data;
//     }
// }

export default function GroupAdopciones1({adopciones1}) {
   
    console.log(adopciones1)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    
    // const getImagen(){
    //     const result=await fetch('http://127.0.0.1:8000/assets/',{
    //         method:'GET',
    //         headers:{
    //             "Content-Type":"application/json",
    //         },
    //     });


    
    //     console.log(result);
    //     const data=await result.json();
    //     console.log(data);
    //     return data;
    // }


    return (

       <div style={{marginTop:'100px'}}> 
           
            <h1 className="text-center text-success my-4 fw-bold">
                
                <i className="fas fa-cat" >
                
                    En adopción

                </i>

                <i 
                className="fas fa-dog"
                style={{

                    transform:'rotateY(180deg)'
                }}
            
                >
                </i>

            </h1>
           

            <div className="container">
                <div className="row mt-3">
                    {adopciones1.content.map((adop, i) => (
                        <div className="col-12 col-lg-4 col-md-6 col-xl-4">
                            <div className="magic  card border border-secondary border border-3 text-center">
                                <div className="overflow">
                                    <img 
                                        src={adop.adopcionFoto}
                                        className="card-img-top"
                                        alt={adop.adop_nombre}
                                    />
                                    
                                </div>    
                                    <div className="card-body bg-light">
                                        <h6 className="card-title text-center fw-bold">
                                            {adop.adopcionNombre}
                                                        
                                        </h6>
                                        <p className="card-text text-secondary">
                                            {adop.adopcionCaracteristicas}
                                        </p>
                                        <button className="btn btn btn-outline-success" onClick={handleShow}>
                                        Adóptame
                                        </button>
                                    </div>
                            </div> 
                        </div>    
                        
                    ))}
                </div>
            </div>
            
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title className="text-success fw-bold text-center">
                        
                        Requisitos para la adopción

                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img
                        ClassName="d-block w-100"
                        src ={imagenModal}
                        alt="imagenModal" 
                        width="462px"
                        height="300px"
                        
                    />
                    
                    <p style={{

                        textAlign: 'justify',
                        textJustify: 'inter-word',
                        marginTop: '20px'
                        

                    }}>
                        1-Ser mayor de edad: Se presentará el DNI de identificación.
                        
                    </p>

                     <p style={{

                        textAlign: 'justify',
                        textJustify: 'inter-word',
                        

                    }}>
                        2-Comprobante de domicilio: Documento que demuestre que la persona es propietaria del domicilio donde vivirá la mascota o, en caso de alquiler, que el arrendatario permite residir con animales.
                    </p>

                    <p style={{

                        textAlign: 'justify',
                        textJustify: 'inter-word',
                        

                    }}>
                        3-Contrato de adopción: Debes firmar un acta que te compromete a 
                        cuidar de tu mascota y mantenerla en unas condiciones óptimas de espacio, tiempo, alimentación, ejercicio...

                    </p>

                    <p style={{

                        textAlign: 'justify',
                        textJustify: 'inter-word',
                        

                    }}>
                        4-Dotarle de los cuidados veterinarios que necesite: La mascota se entregará desparasitada y con las correspondientes vacunas, los perros y los gatos llevarán, además, microchip.

                    </p>

                    <p style={{

                        textAlign: 'justify',
                        textJustify: 'inter-word',
                        

                    }}>
                        5-No destinarlo a la cría o reproducción: Los animales que tengan la edad suficientes se entregarán esterilizados, y si aún no han alcanzado la edad necesaria se firmará un compromiso de esterilización.

                    </p>

                    <p style={{

                        textAlign: 'justify',
                        textJustify: 'inter-word',
                        

                    }}>
                        6-Notificar cualquier cambio a la asociación (pérdida, muerte...).

                    </p>

                    <p style={{

                        textAlign: 'justify',
                        textJustify: 'inter-word',
                        

                    }}>
                        7-Compromiso de no abandonarlo. Si por algún motivo no puedes hacerte cargo de la mascota lo devolverás a la asociación.

                    </p>

                    <p style={{

                        
                        textJustify: 'inter-word',
                        fontWeight: 'bold',
                        marginTop: '35px',
                        textAlign: 'center',
                        

                    }}>
                        Contacto para entrevista: (+51) 983-376-510

                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={handleClose}>
                        Cerrar
                    </Button>
                    
                </Modal.Footer>

            </Modal>
            


         
            
       </div>                 

    )
}
