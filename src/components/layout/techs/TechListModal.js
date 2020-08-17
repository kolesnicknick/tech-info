import React, { useState } from 'react';
import M                   from 'materialize-css/dist/js/materialize.min.js';

const TechListModal = () => {
  const [techs, setTechs] = useState([]);
  const [loading, setLoading] = useState([]);


  return (
    <div id='tech-modal' className='modal' style={modalStyle}>

    </div>
  );
};

const modalStyle = {
  width: '75%',
  height: '75%',
};
export default TechListModal;
