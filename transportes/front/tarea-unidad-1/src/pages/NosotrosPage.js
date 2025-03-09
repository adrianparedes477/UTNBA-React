import React from 'react';

const NosotrosPage = (props) => {
    return (
        <main className="holder">
            <div className="historia">
                <h2>Historia</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quibusdam, voluptatum, quia, quod voluptatem voluptas quos voluptates quae doloribus quas doloremque. Quisquam, quibusdam, voluptatum, quia, quod voluptatem voluptas quos voluptates.</p>
            </div>
            <div className="staff">
                <h2>Staff</h2>
                <div className="personas">
                    <div className="persona">
                        <img src="images/nosotros/nosotros1.jpg" alt="Juan Gomez" />
                        <h5>Juan Gomez</h5>
                        <h6>Gerente General</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quibusdam.</p>
                    </div>
                    <div className="persona">
                        <img src="images/nosotros/nosotros2.jpg" alt="Diana Reyes" />
                        <h5>Diana Reyes</h5>
                        <h6>Gerente Comercial</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quibusdam.</p>
                    </div>
                    <div className="persona">
                        <img src="images/nosotros/nosotros3.jpg" alt="Roberto Zaptos" />
                        <h5>Roberto Zaptos</h5>
                        <h6>Gerente de Sistemas</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quibusdam.</p>
                    </div>
                    <div className="persona">
                        <img src="images/nosotros/nosotros4.jpg" alt="Sandra Mastropiero" />
                        <h5>Sandra Mastropiero</h5>
                        <h6>Gerente de Marketing</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quibusdam.</p>
                    </div>
                    <div className="persona">
                        <img src="images/nosotros/nosotros5.jpg" alt="Luciano Figuero" />
                        <h5>Luciano Figuero</h5>
                        <h6>Gerente Logística</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quibusdam.</p>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default NosotrosPage;