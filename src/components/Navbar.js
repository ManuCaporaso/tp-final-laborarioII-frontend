import React from 'react';
import { Menubar } from 'primereact/menubar';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const items = [
    { label: 'Home', icon: 'pi pi-home', command: () => navigate('/') },
    { label: 'Pilotos', icon: 'pi pi-users', command: () => navigate('/pilotos') },
    { label: 'Escuderias', icon: 'pi pi-car', command: () => navigate('/escuderias') },
    { label: 'Campeonato', icon: 'pi pi-list', command: () => navigate('/campeonato') },
  ];

  return (
    <div>
      <Menubar model={items} />
    </div>
  );
};

export default Navbar;
