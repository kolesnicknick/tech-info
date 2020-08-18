import React, { useEffect, useState } from 'react';
import Preloader                      from '../Preloader';
import TechItem                       from './TechItem';

const TechListModal = () => {
  const [techs, setTechs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getTechs();
  }, []);

  const getTechs = async () => {
    setLoading(true);
    const res = await fetch('/techs');
    const data = await res.json();

    setTechs(data);
    setLoading(false);
  };

  return (
    <div id='tech-list-modal' className='modal'>
      <div className="modal-content">
        <h4>Enter system log</h4>
        <ul className="collection">
          {!loading && techs.map((tech) => <TechItem tech={tech} key={tech.id}/>)}
        </ul>
        <div className="modal-footer">
          <a href="#!" className='modal-close waves-effect blue btn'>CLOSE</a>
        </div>
      </div>
    </div>
  );
};

const modalStyle = {
  width: '75%',
  height: '75%',
};
export default TechListModal;
