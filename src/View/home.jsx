import React from 'react';
import Header from '../Components/header';

import { Link } from 'react-router-dom';
import img1 from '../Style/Img/img1.jpg';
import img2 from '../Style/Img/img2.jpg';
import img3 from '../Style/Img/img3.jpg';

const Home = () => {
    return (
        <div>
            <div>
                <Header />
            </div>

            <div id="carouselExampleSlidesOnly" className="carousel slide  " data-ride="carousel">
                <div className="carousel-inner carousel-juntas">
                    <div className="carousel-item active">
                        <img src="https://i.imgur.com/gGxAYPo.png " className="d-block w-100" alt="imagen" />
                        <div className="carousel-caption d-none d-md-block">

                        </div>
                    </div>
                    <div className="carousel-item carousel">
                        <img src="https://i.imgur.com/PbQfT8Y.png " className="d-block w-100" alt="imagen" />
                        <div className="carousel-caption d-none d-md-block">

                        </div>
                    </div>
                    <div className="carousel-item carousel">
                        <img src="https://i.imgur.com/ZLje0Q4.png " className="d-block w-100" alt="imagen" />
                    </div>
                </div>
            </div>
            <div className="font text-center m-5">
                <h2 className="font" >Somos una plataforma que ofrece servicios para ayudar al <br />crecimiento de la mujeres emprendedoras.</h2>
                <h1 className="m-4 font"><strong>Nuestros Servicios</strong></h1>
            </div>
            <div className="card mb-3 style">
                <div className="row no-gutters color-yellow ">
                    <div className="col-md-6">
                        <div className="card-body style">
                            <h5 className="card-title font-title">Préstamos</h5>
                            <p className="card-text font mb-5">Encuentra el préstamo que se adecue más a tus necesidades, compara tasas entre bancos y solicítalos en solo 4 pasos!.</p>
                            <Link className="btn-pink-link font" to="/loanstart"
                            ><strong>SOLICITAR PRÉSTAMO</strong></Link>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img src={img1} className="card-img" alt="imagen" />
                    </div>
                </div>
            </div>

            <div className="card mb-3 style">
                <div className="row no-gutters color-yellow ">
                    <div className="col-md-6">
                        <img src={img2} className="card-img" alt="imagen" />
                    </div>
                    <div className="col-md-6">
                        <div className="card-body style">
                            <h5 className="card-title font-title">Red de Emprendedoras</h5>
                            <p className="card-text font mb-5">Comparte experiencias, tips y consejos de otras mujeres emprendedoras como tu!.</p>
                            <a className="btn-pink-link font" href="https://omairapalacios.github.io/red-social-juntas/src/ "
                            ><strong>UNIRME A RED DE EMPRENDEDORAS</strong></a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card mb-3 style">
                <div className="row no-gutters color-yellow ">
                    <div className="col-md-6">
                        <div className="card-body style">
                            <h5 className="card-title font-title">Mejor tu Negocio</h5>
                            <p className="card-text  font mb-5">Aprende todo lo que necesitas para hacer crecer tu negocio a través de cursos y talleres que hemos recopilado para ti.</p>
                            <Link className="btn-pink-link font " to="/improvecommerce"
                            ><strong>MEJORAR MI NEGOCIO</strong></Link>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img src={img3} className="card-img" alt="imagen" />
                    </div>
                </div>
            </div>

        </div>
    )

}
export default Home;


