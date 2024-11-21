import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import '../styles/Escuderias.css';

const Escuderias = () => {
  const [escuderias, setEscuderias] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [formVisible, setFormVisible] = useState(false);
  const [selectedEscuderia, setSelectedEscuderia] = useState(null);
  const [newEscuderia, setNewEscuderia] = useState({
    nombre: '',
    pais: '',
    imagen: ''
  });

  useEffect(() => {
    const fetchEscuderias = async () => {
      try {
        const response = await axios.get('http://localhost:3001/formulauno/escuderias');
        setEscuderias(response.data);
        setLoading(false);
      } catch (err) {
        setError('Hubo un error al cargar las escuderías');
        setLoading(false);
      }
    };

    fetchEscuderias();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEscuderia((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCreateEscuderia = async () => {
    try {
      const response = await axios.post('http://localhost:3001/formulauno/escuderias', newEscuderia);
      setEscuderias([...escuderias, response.data]);
      setFormVisible(false);
    } catch (err) {
      console.log('Error al crear escudería', err);
    }
  };

  const handleUpdateEscuderia = async () => {
    try {
      const response = await axios.put(`http://localhost:3001/formulauno/escuderias/${selectedEscuderia.id}`, newEscuderia);
      setEscuderias(escuderias.map((escuderia) => escuderia.id === selectedEscuderia.id ? response.data : escuderia));
      setFormVisible(false);
    } catch (err) {
      console.log('Error al actualizar escudería', err);
    }
  };

  const handleDeleteEscuderia = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/formulauno/escuderias/${id}`);
      setEscuderias(escuderias.filter((escuderia) => escuderia.id !== id));
    } catch (err) {
      console.log('Error al eliminar escudería', err);
    }
  };

  const handleEditEscuderia = (escuderia) => {
    setSelectedEscuderia(escuderia);
    setNewEscuderia({
      nombre: escuderia.nombre,
      pais: escuderia.pais,
      imagen: escuderia.imagen
    });
    setFormVisible(true);
  };

  if (loading) {
    return <div>Cargando escuderías...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="escuderias-page">
      <h2>Escuderías de la Temporada 2024</h2>
      <Button
        label="Agregar Escudería"
        icon="pi pi-plus"
        onClick={() => {
          setNewEscuderia({ nombre: '', pais: '', imagen: '' }); // Reinicia el formulario
          setSelectedEscuderia(null); // Asegúrate de que no haya una escudería seleccionada
          setFormVisible(true); // Muestra el formulario
        }}
      />
      
      <div className="escuderias-grid">
        {escuderias.map((escuderia, index) => (
          <div key={index} className="escuderia-item">
            {/* Imagen de la escudería */}
            <img className="img-escuderia" alt={escuderia.nombre} src={escuderia.imagen} />

            {/* Información de la escudería */}
            <h3>{escuderia.nombre}</h3>
            <p>{`País: ${escuderia.pais}`}</p>

            {/* Botones */}
            <Button label="Ver Detalles" icon="pi pi-search" />
            <Button label="Editar" icon="pi pi-pencil" onClick={() => handleEditEscuderia(escuderia)} />
            <Button label="Eliminar" icon="pi pi-trash" onClick={() => handleDeleteEscuderia(escuderia.id)} />
          </div>
        ))}
      </div>
  
      <Dialog
        visible={formVisible}
        style={{ width: '450px' }}
        header={selectedEscuderia ? 'Actualizar Escudería' : 'Agregar Escudería'}
        modal
        onHide={() => setFormVisible(false)}
      >
        <div className="p-fluid">
          <div className="p-field">
            <label htmlFor="nombre">Nombre</label>
            <InputText
              id="nombre"
              name="nombre"
              value={newEscuderia.nombre}
              onChange={handleInputChange}
            />
          </div>
          <div className="p-field">
            <label htmlFor="pais">País</label>
            <InputText
              id="pais"
              name="pais"
              value={newEscuderia.pais}
              onChange={handleInputChange}
            />
          </div>
          <div className="p-field">
            <label htmlFor="imagen">Imagen</label>
            <InputText
              id="imagen"
              name="imagen"
              value={newEscuderia.imagen}
              onChange={handleInputChange}
            />
          </div>
          <div className="p-field">
            <Button
              label={selectedEscuderia ? 'Actualizar Escudería' : 'Crear Escudería'}
              onClick={selectedEscuderia ? handleUpdateEscuderia : handleCreateEscuderia}
            />
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default Escuderias;
