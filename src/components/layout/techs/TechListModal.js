import React, { useEffect }     from 'react';
import TechItem                 from './TechItem';
import PropTypes                from 'prop-types';
import Moment                   from 'react-moment';
import { connect }              from 'react-redux';
import { getTechs } from '../../../actions/techActions';
import M                        from 'materialize-css/dist/js/materialize.min.js';
import Preloader                from '../Preloader';

const TechListModal = ({ tech: { techs, loading }, getTechs }) => {

  useEffect(() => {
    getTechs();
  }, []);

  return (
    <div id='tech-list-modal' className='modal'>
      <div className="modal-content">
        <h4>Enter system log</h4>
        <ul className="collection">
          {!loading && techs !== null && techs.map((technician) => <TechItem tech={technician} key={technician.id}/>)}
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

TechListModal.propTypes = {
  getTechs: PropTypes.func.isRequired,
  tech: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  tech: state.tech
});

export default connect(mapStateToProps, { getTechs })(TechListModal);
