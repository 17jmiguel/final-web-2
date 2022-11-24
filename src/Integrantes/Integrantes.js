export function Integrantes(){

    let integrantes=[
        {
            nombre:"Aubrey Drake Graham",
            instrumento:"Vocalista",
            edad:36,
            fotografia:"https://firebasestorage.googleapis.com/v0/b/react-905b3.appspot.com/o/drake-1080-1080.jpg?alt=media&token=2577795a-e296-4f76-a0e7-cc2f56a2330e"
        }
    ]

    return(

        <div className="row row-cols-1 row-cols-md-4 g-0 mt-5">

            {
                integrantes.map(function(integrante){
                    return(
                        <>
                            <div className="col mt-3 bg-dark p-5">
                                <div className="card h-100">
                                    <img src={integrante.fotografia} alt="foto" className="img-fluid w-100 h-100"/>
                                    <h4 className="text-center">{integrante.nombre}</h4>
                                    <br/>
                                    <h5 className="text-center">Edad: {integrante.edad}</h5>
                                    <h5 className="text-center">Rol: {integrante.instrumento}</h5>

                                </div>
                            </div>
                        </>
                    )
                })
            }

        </div>
      
    )
}