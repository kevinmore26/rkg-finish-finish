import React,{Component} from 'react';
import {Pie} from 'react-chartjs-2';
import "chart.piecelabel.js"

class EstrellaProducto2 extends Component{
    state={
        respuesta:[],
        nombre:[],
        cantidad:[],
        colores:[],
        data:[],
        opciones:{}
    }

async peticion(){
    var peticion=await fetch('https://rkg-backend.herokuapp.com/gestion/producto-estrella');
    var respuesta=await peticion.json();
    this.setState({respuesta:respuesta});
    var nombre=[],cantidad=[]
    this.state.respuesta.content.map((elemento)=>{
        nombre.push(elemento.nombre);
        cantidad.push(elemento.cantidad);   
        return elemento
    });
    this.setState({nombre:nombre,cantidad:cantidad});
// array prototypemap expects a return value from arrow function
    }
    generarCaracter(){
        var caracter=["a","b","c","d","e","f","0","1","2","3","4","5","6","7","8","9"];
        var numero=(Math.random()*15).toFixed(0);
        return caracter[numero];
    }
    colorHEX(){
        var color="";
        for(var i=0;i<6;i++){
            color=color+this.generarCaracter();
        }
        return "#" + color;
    }
    generarColores(){
        var colores=[];
        for(var i=0;i<this.state.respuesta.content.length;i++){
            colores.push(this.colorHEX());
        }
        this.setState({colores:colores})
    }
    configurarGrafica(){
        const data={
            labels:this.state.nombre,
            datasets:[{
                data:this.state.cantidad,
                backgroundColor:this.state.colores
            }]
        };
        const opciones={
            responsive:true,
            maintainAspectRatio:false,
            piecelabel:{
                render:function(args){
                    return args.label +": "+ args.value+"%";
                },
                fontSize:2,
                fontColor:'#fff',
                fontFamily:'Arial'
            }
        }
        this.setState({data:data,opciones:opciones});
    }

    async componentDidMount(){
        await this.peticion();
        await this.generarColores();
        this.configurarGrafica();
    }

    render(){

        return(
            <div style={{maxWidth:'45vw',marginBottom:'200px',position:'relative',bottom:'100px'}}>
                <h3 style={{textAlign:'center',fontFamily:'cursive'}}>Productos más vendidos</h3>
                <Pie data={this.state.data} options={this.state.opciones} style={{maxHeight:'400px'}}/>
            </div>
        );
    }
}

export default EstrellaProducto2;


