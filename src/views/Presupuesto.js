import React,{useState} from 'react';


function Presupuesto() {
  const [isOn, setIsOn] = useState(false);
  const toggleSwitch = () => {
    setIsOn(!isOn);
  };
  return (
    <div>
        <label className="switch">
        <input
          type="checkbox"
          checked={isOn}
          onChange={toggleSwitch}
        />
        <span className="slider"></span>
      </label>
      <p>{isOn ? 'ON' : 'OFF'}</p>
    </div>
  );
}

export default Presupuesto;