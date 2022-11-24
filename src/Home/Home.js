import './Home.css'

import {Footer} from '../Footer/Footer.js'

export function Home(){

    return(
        <>
           <img src="https://firebasestorage.googleapis.com/v0/b/react-905b3.appspot.com/o/drake-singer-db.jpg?alt=media&token=e84e2d66-f2b4-43cb-88e5-a7c77e0950f7" alt="banner" className="w-100 img-fluid"/>

            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h1>DRAKE</h1>
                            <p>
                            Aubrey Drake Graham (Toronto, Ontario; 24 de octubre de 1986), conocido simplemente como Drake, es un rapero, cantante, compositor, productor discográfico y actor canadiense. Originalmente se hizo conocido por interpretar al personaje de Jimmy Brooks de la serie de televisión Degrassi: The Next Generation. Más tarde saltó a la fama como cantante de rap, lanzando varios mixtapes antes de firmar con Lil Wayne en la compañía discográfica estadounidense Young Money Entertainment en junio de 2006.
                            </p>
                            <hr/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 col-md-8">
                            <img src="https://firebasestorage.googleapis.com/v0/b/react-905b3.appspot.com/o/drake2.jpg?alt=media&token=f7407867-fb54-4efa-b555-4f7dc6804e69" className="img-fluid w-100" alt="live" />
                        </div>
                        <div className="col-12 col-md-4 align-self-center">
                            <p>
                            Su primer álbum de estudio, Thank Me Later (2010), debutó en el número uno del Billboard 200 estadounidense y fue certificado como disco de platino por la Recording Industry Association of America (RIAA). Su segundo álbum, Take Care (2011), encabezó las listas en Estados Unidos y Canadá, mediante la producción de varios sencillos, incluyendo «Headlines», «Take Care», «Make Me Proud», y «The Motto»; a este último se le atribuye la popularización del acrónimo ampliamente utilizado de YOLO.

En la promoción de su segundo álbum, Drake realizó el Club Paradise Tour, que se convirtió en el más exitosa del hip hop de 2012, recaudando más de 42 millones de dólares.3​ Con ese mismo álbum, Drake ganó su primer premio Grammy en la categoría de mejor álbum de rap.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer></Footer>


        </>
    )

}