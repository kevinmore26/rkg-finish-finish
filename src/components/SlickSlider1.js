import React from "react";
import Card from "./Card"
import Slider from "react-slick";
import tarjeta1 from '../assets/img/tarjeta1.jpg'
import tarjeta2 from '../assets/img/tarjeta2.jpg'
import tarjeta3 from '../assets/img/tarjeta3.jpg'
import tarjeta4 from '../assets/img/tarjeta4.jpg'
import {Link} from "react-router-dom"

export default function SimpleSlider() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 3,
      
    };
    return (
      <Slider {...settings} style={{width:'98vw',display:'flex',justifyContent:'space-between',borderRadius:'50px',position:'relative',bottom:'100px'}}>
        <div style={{display:'flex',justifyContent:'center'}}>
          <h1 className="text-center text-success my-4 fw-bold" style={{
                background:'rgb(121, 206, 102))',
                fontFamily:'cursive',
                position:'relative',bottom:'10px'

            }}>Mascotas adoptadas de este mes</h1>
        <div>
            <img src="https://i.imgur.com/A4ma7ap.jpg" style={{height:'200px',borderRadius:'100px',margin:'0 auto',position:'relative',bottom:'30px'}} alt="perrito"></img>
            </div>
            </div>        
        <div className="magic card text-center" style={{width:'80%',borderRadius: '30px'}}>
            <img src={tarjeta1} style={{height:'200px',borderTopLeftRadius:'20px',borderTopRightRadius:'20px'}} alt='tarjeta'className="card-img-top"></img>
                 <div className="card-body bg-success " style={{background:'#3cb03d',borderBottomLeftRadius:'20px',borderBottomRightRadius:'20px'}}>
                    <h4 >Huguito</h4>
                    <p className=" card-text text-white">Adoptado por la familia Navarro</p>
                    <Link className="btn btn btn btn-warning " to="/Adoptar" style={{color:'white'}}>
                        ¿Quieres adoptar?
                    </Link>
                    

                </div>   
        </div>
        <div className="magic card text-center" style={{width:'80%'}}>
        <img src={tarjeta2} style={{height:'200px',borderTopLeftRadius:'20px',borderTopRightRadius:'20px',}} alt='tarjeta'className="card-img-top"></img>
            <div className="card-body bg-success "style={{background:'#3cb03d',borderBottomLeftRadius:'20px',borderBottomRightRadius:'20px'}}>
                    <h4 >Pongo</h4>
                    <p className=" card-text text-white">Adoptado por la familia More </p>
                    <Link className="btn btn btn btn-warning" to="/Adoptar" style={{color:'white'}}>
                        ¿Quieres adoptar?
                    </Link>
                    

                </div>  
        </div>
        <div className="magic card text-center" style={{width:'80%'}}>
        <img src={tarjeta3} style={{height:'200px',borderTopLeftRadius:'20px',borderTopRightRadius:'20px'}} alt='tarjeta'className="card-img-top"></img>
            <div className="card-body bg-success "style={{background:'#3cb03d',borderBottomLeftRadius:'20px',borderBottomRightRadius:'20px'}}>
                    <h4 >Milu</h4>
                    <p className=" card-text text-white">Adoptado por la familia Valencia</p>
                    <Link className="btn btn btn btn-warning" to="/Adoptar"style={{color:'white'}}>
                        ¿Quieres adoptar?
                    </Link>
                    

                </div>    
        </div>
        <div className="magic card text-center" style={{width:'80%'}}>
        <img src={tarjeta4} style={{height:'200px',borderTopLeftRadius:'20px',borderTopRightRadius:'20px'}} alt='tarjeta'className="card-img-top"></img>
            <div className="card-body bg-success "style={{background:'#3cb03d',borderBottomLeftRadius:'20px',borderBottomRightRadius:'20px'}}>
                    <h4 >Chanti</h4>
                    <p className=" card-text text-white">Adoptado por la familia Rezza</p>
                    <Link className="btn btn btn btn-warning" to="/Adoptar"style={{color:'white'}}>
                        ¿Quieres adoptar?
                    </Link>
                </div>  
        </div>
        <div className="magic card text-center" style={{width:'80%'}}>
        <img src={tarjeta1} style={{height:'200px',borderTopLeftRadius:'20px',borderTopRightRadius:'20px'}} alt='tarjeta'className="card-img-top"></img>
            <div className="card-body bg-success "style={{background:'#3cb03d',borderBottomLeftRadius:'20px',borderBottomRightRadius:'20px'}}>
                    <h4 >Lala</h4>
                    <p className=" card-text text-white">Adoptado por la familia Paredes</p>
                    <Link className="btn btn btn btn-warning" to="/Adoptar"style={{color:'white'}}>
                        ¿Quieres adoptar?
                    </Link>
                    

                </div>  
        </div>
        <div className="magic card text-center" style={{width:'80%'}}>
        <img src={tarjeta2} style={{height:'200px',borderTopLeftRadius:'20px',borderTopRightRadius:'20px'}} alt='tarjeta'className="card-img-top"></img>
            <div className="card-body bg-success "style={{background:'#3cb03d',borderBottomLeftRadius:'20px',borderBottomRightRadius:'20px'}}>
                    <h4 >Tomy</h4>
                    <p className=" card-text text-white">Adoptado por la familia Zamora</p>
                    <Link className="btn btn btn btn-warning" to="/Adoptar"style={{color:'white'}}>
                        ¿Quieres adoptar?
                    </Link>
                    

                </div>  
        </div>
        
      </Slider>
    );
  }