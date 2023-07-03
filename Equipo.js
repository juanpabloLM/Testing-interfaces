import React, {useState} from 'react';


function Equipo() {
  const [miembros, setMiembros] = useState([]);
  const [nombre, setNombre] = useState('');
  const [rol, setRol] = useState('');
  const [rut, setRut]=useState('');

  const rolesPredefinidos =['Jefatura de proyecto','Encargado/a de finanzas','Subjefatira de proyecto'];

  const agregarMiembro = () => {
    if (nombre && rut && rol) {
      const nuevoMiembro = { nombre ,rut , rol };
      setMiembros([...miembros, nuevoMiembro]);
      setNombre('');
      setRut('');
      setRol('');
    }
  };

  return (
    <div>
        <h2>Agregar miembros del equipo</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <input
          type='text'
          placeholder='Rut'
          value={rut}
          onChange={(e) => setRut(e.target.value)}
        />
        <select
          value={rol}
          onChange={(e) => setRol(e.target.value)}
        >
          <option value="">Seleccionar rol</option>
          {rolesPredefinidos.map((rol, index) => (
            <option key={index} value={rol}>{rol}</option>
          ))}
        </select>
        <button type="button" onClick={agregarMiembro}>
          Agregar
        </button>
      </form>
      <ul>
        {miembros.map((miembro, index) => (
          <li key={index}>
            Nombre: {miembro.nombre},Rut: {miembro.rut}, Rol: {miembro.rol}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Equipo;