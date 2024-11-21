import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Dialog } from 'primereact/dialog';
import '../styles/Pilotos.css';

const Pilotos = () => {
  const [pilotos, setPilotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [formVisible, setFormVisible] = useState(false);
  const [selectedPiloto, setSelectedPiloto] = useState(null);
  const [newPiloto, setNewPiloto] = useState({
    nombre: '',
    numero: '',
    equipo: '',
    imagen: ''
  });

  useEffect(() => {
    const fetchPilotos = async () => {
      try {
        const response = await axios.get('http://localhost:3001/formulauno/pilotos');
        setPilotos(response.data);
        setLoading(false);
      } catch (err) {
        setError('Hubo un error al cargar los pilotos');
        setLoading(false);
      }
    };

    fetchPilotos();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPiloto((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCreatePiloto = async () => {
    try {
      const response = await axios.post('http://localhost:3001/formulauno/pilotos', newPiloto);
      setPilotos([...pilotos, response.data]);
      setFormVisible(false);
    } catch (err) {
      console.log('Error al crear piloto', err);
    }
  };

  const handleUpdatePiloto = async () => {
    try {
      const response = await axios.put(`http://localhost:3001/formulauno/pilotos/${selectedPiloto.id}`, newPiloto);
      setPilotos(pilotos.map((piloto) => piloto.id === selectedPiloto.id ? response.data : piloto));
      setFormVisible(false);
    } catch (err) {
      console.log('Error al actualizar piloto', err);
    }
  };

  const handleDeletePiloto = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/formulauno/pilotos/${id}`);
      setPilotos(pilotos.filter((piloto) => piloto.id !== id));
    } catch (err) {
      console.log('Error al eliminar piloto', err);
    }
  };

  const handleEditPiloto = (piloto) => {
    setSelectedPiloto(piloto);
    setNewPiloto({
      nombre: piloto.nombre,
      numero: piloto.numero,
      equipo: piloto.equipo,
      imagen: piloto.imagen
    });
    setFormVisible(true);
  };

  if (loading) {
    return <div>Cargando pilotos...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="pilotos-page">
      <h2>Pilotos de la Temporada 2024</h2>
      <Button
        className="p-button-success"
        label="Agregar Piloto"
        icon="pi pi-plus"
        onClick={() => {
          setNewPiloto({ nombre: '', numero: '', equipo: '', imagen: '' }); // Reinicia el formulario
          setSelectedPiloto(null); // Asegúrate de que no haya un piloto seleccionado
          setFormVisible(true); // Muestra el formulario
        }}
      />
      <div className="pilotos-grid">
        {pilotos.map((piloto, index) => (
          <Card
            key={index}
            title={piloto.nombre}
            subTitle={`Número Auto: ${piloto.numero} - Equipo: ${piloto.equipo}`}
            footer={
              <>
                <Button className="p-button-success" label="Ver Perfil" icon="pi pi-search" />
                <Button className="p-button-success" label="Editar" icon="pi pi-pencil" onClick={() => handleEditPiloto(piloto)} />
                <Button className="p-button-success" label="Eliminar" icon="pi pi-trash" onClick={() => handleDeletePiloto(piloto.id)} />
              </>
            }
            header={<img className="img-piloto" alt={piloto.nombre} src={piloto.imagen} />}
          />
        ))}
      </div>

      <Dialog
        visible={formVisible}
        style={{ width: '450px' }}
        header={selectedPiloto ? 'Actualizar Piloto' : 'Agregar Piloto'}
        modal
        onHide={() => setFormVisible(false)}
      >
        <div className="p-fluid">
          <div className="p-field">
            <label htmlFor="nombre">Nombre</label>
            <InputText
              id="nombre"
              name="nombre"
              value={newPiloto.nombre}
              onChange={handleInputChange}
            />
          </div>
          <div className="p-field">
            <label htmlFor="numero">Número</label>
            <InputText
              id="numero"
              name="numero"
              value={newPiloto.numero}
              onChange={handleInputChange}
            />
          </div>
          <div className="p-field">
            <label htmlFor="equipo">Equipo</label>
            <InputText
              id="equipo"
              name="equipo"
              value={newPiloto.equipo}
              onChange={handleInputChange}
            />
          </div>
          <div className="p-field">
            <label htmlFor="imagen">Imagen</label>
            <InputText
              id="imagen"
              name="imagen"
              value={newPiloto.imagen}
              onChange={handleInputChange}
            />
          </div>
          <div className="p-field">
            <Button
              label={selectedPiloto ? 'Actualizar Piloto' : 'Crear Piloto'}
              onClick={selectedPiloto ? handleUpdatePiloto : handleCreatePiloto}
            />
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default Pilotos;

