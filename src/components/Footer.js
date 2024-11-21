// src/components/Footer.js
import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import '../styles/App.css'

const FooterComponent = () => {
  return (
    <footer className="footer">
      <Card>
        <div className="footer-content">
          <div className="social-media">
            <h4>Síguenos en redes sociales</h4>
            <Button icon="pi pi-facebook"  className="p-button-rounded p-button-info" aria-label="Facebook" onClick={() =>  window.open('https://www.facebook.com/Formula1', '_blank')} />
            <Button icon="pi pi-twitter" className="p-button-rounded p-button-info" aria-label="Twitter"onClick={() =>  window.open('https://x.com/f1', '_blank')} />
            <Button icon="pi pi-instagram" className="p-button-rounded p-button-info" aria-label="Instagram" onClick={() =>  window.open('https://www.instagram.com/f1/', '_blank')} />
          </div>
          <div className="additional-info">
            <h4>Información Adicional</h4>
            <p>Dirección: 123 Calle F1, Ciudad del Motor</p>
            <p>Email: contacto@f1.com</p>
            <p>Teléfono: +123 456 789</p>
          </div>
        </div>

        <div className="footer__contactInfo-content">
            <p>&copy; 2024 ITS. All rights reserved.</p>
            <p>Trabajo Final Evaluativo</p>
            <p>Materia: Laboratorio FullStack II - 2do año - Instituto Tecnico Superior Cipolletti</p>
            <p>INTEGRANTE: Manuel Caporaso</p>
        </div>
      </Card>
    </footer>
  );
};

export default FooterComponent;
