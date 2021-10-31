// import {useState, useEffect} from 'react'
import {Link} from "react-router-dom"

export default function GroupProducts({articulo}) {
    console.log(articulo)
    return (
        <div className="container">
            <div className="row mt-3">
                {articulo.content.map((arti, i) => (
                    <div className="col-6 col-lg-3" key={i}>
                        <Link className="card mb-4" to={`/producto/${arti.productoId}`}>
                            <img 
                                src={arti.productoFoto} 
                                className="card-img-top"
                                alt={arti.productoNombre}
                            />
                            <div className="card-body">
                                <h6 className="card-title">
                                    {arti.productoNombre}
                                </h6>
                                <span className="fw-bold">
                                    S/ {arti.productoPrecio}
                                </span>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}
