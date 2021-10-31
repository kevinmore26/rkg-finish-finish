import {Link} from "react-router-dom"


export default function GroupArticulos({articulos}) {
 
    
    return (

       <div> 
           

            <div className="container">
                <div className="row mt-2">
                    {articulos.content.map((arti, i) => (
                        <div className="col-12 col-lg-4 col-md-6 col-xl-4" key={1}style={{borderRadius:'30px'}}>
                            <div className="magic  card  text-center" style={{borderRadius:'30px'}}>
                                <div className="overflow" style={{borderTopLeftRadius:'30px'}}>
                                    <img 
                                        src={arti.productoFoto}
                                        className="card-img-top"
                                        alt={arti.productoNombre}
                                    />
                                </div>    
                                    <div className="card-body bg-success">
                                        <h6 className="card-title text-center fw-bold">
                                            {arti.productoNombre}
                                        </h6>
                                        <p className="card-text text-white">
                                            S/ {arti.productoPrecio}
                                        </p>
                                        <Link href="#" className="btn btn btn btn-warning" style={{color:'white'}}to={`/producto/${arti.productoId}`} >Comprar</Link>
                                    </div>
                            </div> 
                        </div>    
                    ))}
                </div>
            </div>

       </div>                 

    )
}
