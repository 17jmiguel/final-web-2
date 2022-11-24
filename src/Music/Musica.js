import { servicioCanciones } from "../services/servicioCanciones.js"
//necesito usar el hook useState para almacenar la respuesta del servicio de forma global
import { useState,useEffect } from "react"

export function Music(){

    //creando mi primer usestate
    const[canciones,setCanciones]=useState(null)
    const[estamosCargando,setEstamosCargando]=useState(true)

    //usando mi primer useeffect
    useEffect(function(){

        servicioCanciones()
            .then(function(respuesta){
                setCanciones(respuesta)
                setEstamosCargando(false)
            })

    },[])

    if(estamosCargando==true){

        return(
            <>
                <h1>Estamos Cargando...</h1>
            </>
        )

    }else{
        return(
            <>
            <div className="row row-cols-1 row-cols-md-4 g-0 mt-5">
    
                {
                    canciones.tracks.map(function(cancion){
                        return(
                            <>
                                <div className="col mt-3 bg-dark p-5">
                                    <div className="card h-100">
                                        <h4 className="text-center">{cancion.name}</h4>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
    
            </div>
          </>
        )
    }

}