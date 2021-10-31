import Card from "./Card"


import tarjeta1 from '../assets/img/tarjeta1.jpg'
import tarjeta2 from '../assets/img/tarjeta2.jpg'
import tarjeta3 from '../assets/img/tarjeta3.jpg'
import tarjeta4 from '../assets/img/tarjeta4.jpg'

const cards = [
    {
        id:1,
        title:'Huguito',
        image: tarjeta1,
        descripcion: 'Adoptado por la familia Navarro'
    },
    {
        id:2,
        title:'Pongo',
        image: tarjeta2,
        descripcion: 'Adoptado por la familia Cornejo'
    },
    {
        id:3,
        title:'Milu',
        image: tarjeta3,
        descripcion: 'Adoptada por la familia Campos'

    },
    {
        id:4,
        title:'Chanti',
        image: tarjeta4,
        descripcion: 'Adoptado por la familia Quispe'
    }
 

]


export default function Cards() {
    
    return (
        
        <div>
            <h1 className="text-center text-success my-4 fw-bold" style={{
                background:'rgb(121, 206, 102))',
                fontFamily:'cursive',

            }}>Mascotas adoptadas de agosto</h1>
            <div className=" container ">
                <div className="row mt-3">
                {
                    cards.map(card => (
                            <div className="col-6 col-lg-3" key={card.id} style={{
                               
                            }}>
                                <Card title={card.title} imageSource={card.image} descripcion={card.descripcion} />    
                            </div>   

                    ))
                }                      
                </div> 
            </div>

        </div>        


    )
} 



