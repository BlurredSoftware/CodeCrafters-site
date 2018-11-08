import React from "react";

export default () => (
  <div className="where-section">
    <header className="major">
      <h2>Preguntas frecuentes</h2>
    </header>
    <div className="content">
    <a href="https://www.google.com/maps/place/Carrer+de+Casp,+127,+08013+Barcelona/@41.3970545,2.1785366,17z/data=!3m1!4b1!4m5!3m4!1s0x12a4a2e1150b1349:0x773ef7618feaacc2!8m2!3d41.3970505!4d2.1807253" className="icon fa-map-marker alt major" />
      <div className="text">
        <h2>¿Dónde?</h2>
        <h4>El curso será en las instalaciones de <strong>Corevents</strong></h4>
        <h4>Carrer de Casp, 127 08013 Barcelona</h4>
      </div>
    </div>
    <div className="content">
      <span className="icon fa-calendar alt major" />
      <div className="text">
        <h2>¿Cuándo?</h2>
        <h4><strong>19, 20, 26 y 27 Octubre 2018</strong></h4>
        <h4>10h-18h</h4>
      </div>
    </div>
    <div className="content">
      <a href="http://apple.com" className="icon fa-laptop alt major" />
      <div className="text">
        <h2>¿Qué hay que llevar?</h2>
        <h4>Será necesario llevar tu <strong>MacBook</strong> y (opcionalmente) un dispositivo iOS para poder seguir las clases.</h4>
        <h4><strong>No traigas tupper</strong> — ya ponemos nosotros la comida 😉</h4>
      </div>
    </div>
  </div>
);
