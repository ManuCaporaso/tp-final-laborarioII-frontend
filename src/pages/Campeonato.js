import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import GaleriaPilotos from '../components/GaleriaPilotos';
import GaleriaEscuderias from '../components/GaleriaEscuderias';
import '../styles/Campeonato.css'

const datosCampeonato = [
  { posicion: 1, numero: 1, nombre: 'Max', apellido: 'Verstapen', escuderia: GaleriaEscuderias.RedBull, imagen: GaleriaPilotos.Verstappen, puntos: 331 },
  { posicion: 2, numero: 4, nombre: 'Lando', apellido: 'Norris', escuderia: GaleriaEscuderias.McLaren, imagen: GaleriaPilotos.Norris, puntos: 279 },
  { posicion: 3, numero: 16, nombre: 'Charles', apellido: 'Leclerc', escuderia: GaleriaEscuderias.Ferrari, imagen: GaleriaPilotos.Leclerc, puntos: 245 },
  { posicion: 4, numero: 44, nombre: 'Oscar', apellido: 'Piastri', escuderia: GaleriaEscuderias.McLaren, imagen: GaleriaPilotos.Piastri, puntos: 237 },
  { posicion: 5, numero: 44, nombre: 'Carlos', apellido: 'Sainz', escuderia: GaleriaEscuderias.Ferrari, imagen: GaleriaPilotos.Sainz, puntos: 190 },
  { posicion: 6, numero: 44, nombre: 'Lewis', apellido: 'Hamilton', escuderia: GaleriaEscuderias.Mercedes, imagen: GaleriaPilotos.Hamilton, puntos: 174 },
  { posicion: 7, numero: 44, nombre: 'George', apellido: 'Russell', escuderia: GaleriaEscuderias.Mercedes, imagen: GaleriaPilotos.Rusell, puntos: 155 },
  { posicion: 8, numero: 44, nombre: 'Sergio', apellido: 'Perez', escuderia: GaleriaEscuderias.RedBull, imagen: GaleriaPilotos.Perez, puntos: 144 },
  { posicion: 9, numero: 44, nombre: 'Fernando', apellido: 'Alonso', escuderia: GaleriaEscuderias.AstonMartin, imagen: GaleriaPilotos.Alonso, puntos: 62 },
  { posicion: 10, numero: 44, nombre: 'Nico', apellido: 'Hulkember', escuderia: GaleriaEscuderias.Hass, imagen: GaleriaPilotos.Hulkemberg, puntos: 24 },
  { posicion: 11, numero: 44, nombre: 'Lance', apellido: 'Stroll', escuderia: GaleriaEscuderias.AstonMartin, imagen: GaleriaPilotos.Stroll, puntos: 24 },
  { posicion: 12, numero: 44, nombre: 'Yuki', apellido: 'Tsunoda', escuderia: GaleriaEscuderias.RB, imagen: GaleriaPilotos.Tsunoda, puntos: 22 },
  { posicion: 13, numero: 44, nombre: 'Alexander', apellido: 'Albon', escuderia: GaleriaEscuderias.Williams, imagen: GaleriaPilotos.Albon, puntos: 12 },
  { posicion: 14, numero: 44, nombre: 'Daniel', apellido: 'Ricciardo', escuderia: GaleriaEscuderias.RB, imagen: GaleriaPilotos.Ricciardo, puntos: 12 },
  { posicion: 15, numero: 44, nombre: 'Pierre', apellido: 'Gasly', escuderia: GaleriaEscuderias.Alpine, imagen: GaleriaPilotos.Gasly, puntos: 8 },
  { posicion: 16, numero: 44, nombre: 'Oliver', apellido: 'Bearman', escuderia: GaleriaEscuderias.Hass, imagen: GaleriaPilotos.Bearman, puntos: 7 },
  { posicion: 17, numero: 44, nombre: 'Kevin', apellido: 'Magnussen', escuderia: GaleriaEscuderias.Hass, imagen: GaleriaPilotos.Magnussen, puntos: 6 },
  { posicion: 18, numero: 44, nombre: 'Esteban', apellido: 'Ocon', escuderia: GaleriaEscuderias.Alpine, imagen: GaleriaPilotos.Ocon, puntos: 5 },
  { posicion: 19, numero: 44, nombre: 'Franco', apellido: 'Colapinto', escuderia: GaleriaEscuderias.Williams, imagen: GaleriaPilotos.Colapinto, puntos: 4 },
  { posicion: 20, numero: 44, nombre: 'Zhou', apellido: 'Guanyu', escuderia: GaleriaEscuderias.KickSauber, imagen: GaleriaPilotos.Zhou, puntos: 0 },
  { posicion: 21, numero: 44, nombre: 'Logan', apellido: 'Sargent', escuderia: GaleriaEscuderias.Williams, imagen: GaleriaPilotos.Sargent, puntos: 0 },
  { posicion: 22, numero: 44, nombre: 'Valtteri', apellido: 'Botas', escuderia: GaleriaEscuderias.KickSauber, imagen: GaleriaPilotos.Bottas, puntos: 0 },

];

const Campeonato = () => {
  return (
    <div className="campeonato-page">
      <h2>Clasificación del Campeonato 2024</h2>
      <DataTable value={datosCampeonato} responsiveLayout="scroll">
        <Column field="posicion" header="Posición" />
        <Column field="numero" header="Número Auto" />
        <Column field="nombre" header="Nombre" />
        <Column field="apellido" header="Apellido" />
        <Column body={rowData => <img className='img-escuderia' src={rowData.escuderia} alt="Escudería" />} header="Escudería" />
        <Column body={rowData => <img className='img-piloto' src={rowData.imagen} alt="Piloto" />} header="Piloto" />
        <Column field="puntos" header="Puntos" />
      </DataTable>
    </div>
  );
};

export default Campeonato;
