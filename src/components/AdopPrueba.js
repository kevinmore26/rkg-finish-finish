import React,{Component} from 'react';
import {Bar} from 'react-chartjs-2';
import "chart.piecelabel.js"

class AdoP extends Component{
    state={
        respuesta:[],
        adopcionTamanio:[],
        adopcionEdad:[],
        colores:[],
        data:[],
        opciones:{}
    }

async peticion(){
    var peticion=await fetch('https://rkg-backend.herokuapp.com/gestion/buscar-adoptado?estado=false');
    var respuesta=await peticion.json();
    this.setState({respuesta:respuesta});
    var adopcionTamanio=[],adopcionEdad=[]
    this.state.respuesta.content.map((elemento)=>{
        adopcionTamanio.push(elemento.adopcionTamanio);
        adopcionEdad.push(elemento.adopcionEdad);   
        return elemento
    });
    this.setState({adopcionTamanio:adopcionTamanio,adopcionEdad:adopcionEdad});
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
        for(var i=0;i<this.state.respuesta.length;i++){
            colores.push(this.colorHEX());
        }
        this.setState({colores:colores})
    }
    configurarGrafica(){
        const data={
            labels:this.state.adopcionTamanio,
            
            datasets:[{
                label:'Clientes',
                data:this.state.adopcionEdad,
                // backgroundColor:this.state.colores,
                // background:this.state.colores,
                // color:this.state.colores

                backgroundColor:'rgb(32, 115, 157)'
            }],
            xAxes: [{
                type: 'time',
                ticks: {
                    autoSkip: true,
                    maxTicksLimit: 20
                }
            }]  
        };
        const opciones={
            responsive:false,
            maintainAspectRatio:false,
            piecelabel:{
                render:function(args){
                    return args.label +": "+ args.value+"%";
                },
                fontSize:2,
                // fontColor:'#fff',
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
            <div style={{maxWidth:'45vw',position:'relative', margin:'0 auto',top:'20px'}}>
                <h3 style={{textAlign:'center',fontFamily:'cursive'}}>Mascotas no adoptadas 😺</h3>
                <p style={{textAlign:'center',fontFamily:'cursive'}}> edad - Tamaño<br/>(P-M-G)</p>
                <Bar data={this.state.data} options={this.state.opciones} style={{height:'400px'}}/>
            </div>
        );
    }
}

export default AdoP;


