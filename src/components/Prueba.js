import React,{useEffect,useState} from "react";
import {AdopcionesService1} from "../services/adopcionesService1";

const Prueba=()=>{
    const[adopciones,setAdopciones]=useState();
    useEffect(()=>{
        const promesa=async()=>{
            const adopcionesService=new AdopcionesService1();
            const resultado=await adopcionesService.getAdopciones();
            console.log(resultado);
            setAdopciones(resultado);
        };
        promesa();
    },[])
    ;
    return <div>pruebaaa</div>;

};
export default Prueba;
