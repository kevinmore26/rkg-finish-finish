import { useState, useContext } from "react";
import { CarritoContext } from "../context/carritoContext";
import { useForm } from "react-hook-form";
import Modalcheckout from "../components/Modalcheckout"
// import Tarjeta from "../components/CreditCard"
// import Narvbar from "../components/Narvbar"
import Narbarkev from "../components/Narbarkev"


import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet"


export default function CheckoutView() {
    // const [marcador, setMarcador] = useState([-12.0433, -77.0283])
	const { carrito } = useContext(CarritoContext);
	const [marcador, setMarcador] = useState([-12.2833, -76.8667])

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	
    const AddMarker = () => {
        const map = useMapEvents({
            click: (e) => {
                console.log(e)
                const {lat, lng} = e.latlng
                setMarcador([lat, lng])
            }
        })
        return null
    }

	let total = 0;

	total = carrito.reduce((acum, arti) => {
		return acum + arti.cantidad * arti.content.productoPrecio;
	}, 0);

	const recibirSubmit = (datos) => {
		console.log(datos);
	};
	
	return (
		<section>
		<Narbarkev></Narbarkev>
		
	<div style={{
		display:'flex',
		justifyContent:'space-around'
	}}>
		
				
				<div className="col-sm-12 col-md-6" style={{
					margin:'35px',
					textAlign:'left',
					width:'40vw'
					
					
				}}>
					
				<section>
					<h1 style={{
					textAlign:'left',
					color:'rgb(25, 135, 84)',
					fontFamily:'cursive'
				}}>Verificar compra</h1>
					<h4 style={{
						textAlign:'left',
						color:'rgb(25, 135, 84)',
						fontFamily:'cursive'
					}}>Ingrese sus datos:</h4>
							<hr></hr>
					<form onSubmit={handleSubmit(recibirSubmit)}>
						<section style={{
							display:'flex',
							textAlign:'left',
							justifyContent:'space-between',
							fontFamily:'cursive'
						}}>
						<div className="mb-2" style={{
							width:'25vw',
							textAlign:'left',
							fontFamily:'cursive'
						}}>
							<label className="form-label" style={{
								
							}}>Nombres </label>
							<input
								type="text"
								className="form-control"
								placeholder="Ej. Juanito"
								//{...register("nombre", {validaciones})}
								{...register("Nombre completo", { required: true })}
							/>
							{errors.direccion && (
								<small className="text-success">  Formato correcto</small>
							)}
						</div>
						<div className="mb-2"  style={{
							width:'25vw'
						}}>
							<label className="form-label" style={{
								
							}}>Apellidos</label>
							<input
								type="text"
								className="form-control"
								placeholder="Ej. Alcachofa"
								//{...register("nombre", {validaciones})}
								{...register("Apellido", { required: true })}
							/>
							
							 {errors.direccion && (
								<small className="text-success">  Formato correcto</small>
							)}
						</div>
						</section>
						<div className="mb-2" style={{
						textAlign:'left'
					}}>
							<label className="form-label" style={{
								fontFamily:'cursive'
							}} >Número de celular</label>
							<input 
								type="text"
								className="form-control"
								placeholder="Ej. +51 926707653"
								{...register("telefono", {
									minLength: { value: 9, message: "Se requiere 6 dígitos" },
                                    maxLength: { value: 9, message: "Máximo 14 dígitos"}
								})}
							/>{errors.nombreCompleto && (
								<small className="text-danger">Este campo es obligatorio</small>
							)}
							
						</div>
						
						<div className="mb-2" style={{
						textAlign:'left',
						fontFamily:'cursive'
					}}>
							<label className="form-label" style={{
								
							}}>Ingresa tu DNI </label>
							<input
								type="text"
								className="form-control"
								placeholder="74822014"
								{...register("DNI", {
									minLength: { value: 6, message: "Se requiere 6 dígitos" },
                                    maxLength: { value: 14, message: "Máximo 14 dígitos"}
								})}
							/>
							{errors.telefono && (
								<small className="text-danger">{errors.telefono.message}</small>
							)}
							
						</div>
						<div className="mb-2" style={{
						textAlign:'left',
						fontFamily:'cursive'
					}}>
							<label className="form-label" style={{
								fontFamily:'cursive'
							}}>Dirección</label>
							<input
								type="text"
								className="form-control"
								placeholder="Ej. Urb. Yanahuara S/N"
                                {...register("direccion", {pattern: /^[A-Za-z]$/})}
							/>
                            {errors.direccion && (
								<small className="text-success">  Formato correcto</small>
							)}
							
						</div>
						

                        <MapContainer   
                            center={[-12.2833	, -76.8667]}
                            zoom={17}
                            style={{height:"400px"}}
                        >
                            <TileLayer
                                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <AddMarker />
                            <Marker
                                position={marcador}
                            />
                        </MapContainer>
						<section className="decorative">
            		<ul className="link" 
            	> 
              		<	button to="/Checkout" style={{
               	background:'linear-gradient(to top, rgb(54 146 74), rgb(129 218 100))',
                color: 'gray',
                textDecoration: 'none',
                border: 'none',
                borderRadius: '80px',
				width: '36vw',
				height: '78px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-start',
                position: 'relative',
                right: '15px',
                
                bottom: '10px',
				marginTop:'30px'
              }}  >
                <Modalcheckout></Modalcheckout>
                 
              		</button>
            			</ul>
            		</section>
					</form>
					</section>			
	</div>
			  	<section style={{
					  marginTop:'38px',
					  fontFamily:'cursive'
				  }}>
				<h3 style={{
					color:'rgb(25, 135, 84)'
				}}>Resumen de carrito</h3>
				<p>Por favor verifique los productos e indique los datos solicitados</p>
			<div className="row">
				<div className="col-sm-12 col-md-6" style={{
					width:'41vw'
				}}>
					<hr></hr>
					<ul className="list-group">
						{carrito.map((arti, i) => (
							<li
								className="list-group-item d-flex justify-content-between"
								key={i}
							>
								<div>
									<span className="fw-bold">{arti.content.productoNombre}</span>
									<br />
									<small style={{
										
										}}>Cantidad: {arti.cantidad}</small>
								</div>

								<small className="badge botonescheck rounded-pill p-3" style={{
									backgroundColor:'#128a4d',
									color:'white'}} >
									S/ {arti.cantidad *arti.content.productoPrecio}
								</small>
							</li>
						))}
						{total !== 0 ? (
							<li className="list-group-item d-flex justify-content-between">
								<span className="fw-bold">TOTAL:</span>
								<span>S/ {total}</span>
							</li>
						) : (
							<li className="list-group-item">
								Todavía no ha agregado ningún producto.
							</li>
						)}
					</ul>
					</div>
				</div>
				</section>
			</div>
			</section>
	);
}
