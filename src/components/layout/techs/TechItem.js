import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteTech }                      from '../../../actions/techActions';
import M                   from 'materialize-css/dist/js/materialize.min.js';


const TechItem = ({tech, deleteTech}) => {

  const onDelete = () => {
    deleteTech(tech.id);
    M.toast({html: `Tech ${tech.firstName} ${tech.lastName} deleted`})
  }

  return (
    <div>
      <li className="collection-item">
        <div>{tech.firstName} {tech.lastName}
        <a href="#!"  onClick={onDelete} className='secondary-content'>
          <i className="material-icons grey-text">delete</i>
        </a>
        </div>
      </li>
    </div>
  );
};

TechItem.propTypes = {
  tech: PropTypes.object.isRequired,
  deleteTech: PropTypes.func.isRequired,
}

export default connect(null, { deleteTech })(TechItem);
