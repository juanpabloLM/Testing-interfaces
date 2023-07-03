import React,{useState} from 'react';


function Presupuesto() {
  const [switches, setSwitches] = useState([false, false, false, false]);

  const switchLabels = ['Financiamiento externo', 'Financiamiento UTFSM', 'Financiamiento Propio', 'Relaciones Estudiantiles ·	PIE > A[SJ]'];

  const toggleSwitch = (index) => {
    const updatedSwitches = [...switches];
    updatedSwitches[index] = !updatedSwitches[index];
    setSwitches(updatedSwitches);
  };
  return (
    <div>
      {switches.map((isOn, index) => (
        <div key={index}>
          <label>{switchLabels[index]}</label>
          <label className="switch">
            <input
              type="checkbox"
              checked={isOn}
              onChange={() => toggleSwitch(index)}
            />
            <span className="slider"></span>
          </label>
        </div>
      ))}
    </div>
  );
}

export default Presupuesto;