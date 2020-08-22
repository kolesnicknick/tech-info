import React     from 'react';
import PropTypes from 'prop-types';
import Moment  from 'react-moment';
import { connect } from 'react-redux';
import { deleteLog, setCurrent }                      from '../../../actions/logActions';
import M                   from 'materialize-css/dist/js/materialize.min.js';


const LogItem = ({ log, deleteLog, setCurrent }) => {
  const onDelete = () => {
    deleteLog(log.id);
    M.toast({html: 'Log deleted'})
  }

  const setState = () => {
    setCurrent(log);
    M.toast({html: 'Editing log'})
  }

  return (
    <li className="collection-item">
      <a href="#edit-log-modal" onClick={setState} className={`modal-trigger ${log.attention ? 'red-text' : 'blue-text'}`}>{log.message}</a>
      <br/>
      <span className='grey-text'>
        <span className='black-text'>ID #{log.id}</span> assignee is{' '}
        <span className='black-text'>{log.tech}</span> updated on{' '}
        <Moment className='black-text' format='MMMM Do YYYY, h:mm:s a'>{log.date}</Moment>
      </span>
      <a href="#!" onClick={onDelete} className="secondary-content">
        <i className="grey-text material-icons">delete</i>
      </a>
    </li>
  );
};

LogItem.propTypes = {
  log: PropTypes.object.isRequired,
  deleteLog: PropTypes.func.isRequired,
  setCurrent: PropTypes.func.isRequired,
};

export default connect(null, { deleteLog, setCurrent })(LogItem);
