import React, {useState} from 'react';


function Planificacion() {
  const [actividad, setActividad] = useState([]);
  const [nombre, setNombre] = useState('');
  const [inicio, setInicio] = useState('');
  const [termino, setTermino]=useState('');

  const agregarActividad = () => {
    if (nombre && inicio && termino) {
      const nuevaActividad = { nombre, inicio, termino };
      setActividad([...actividad, nuevaActividad]);
      setNombre('');
      setInicio('');
      setTermino('');
    }
  };
  return (
    <div>
        <h2>Agregar Actividad</h2> 
      <form onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />

      

      <input
        type='date'
        value={inicio}
        onChange={(e) => setInicio(e.target.value)}
      />
      <input
        type='date'
        value={termino}
        onChange={(e) => setTermino(e.target.value)}
      />
        <button type="button" onClick={agregarActividad}>
          Agregar
        </button>
      </form>
      <ul>
        {actividad.map((actividad, index) => (
          <li key={index}>
            Nombre: {actividad.nombre},Inicio {actividad.inicio}, Termino {actividad.termino}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Planificacion;