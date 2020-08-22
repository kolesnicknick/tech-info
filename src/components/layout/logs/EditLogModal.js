import React, { useEffect, useState } from 'react';
import M                              from 'materialize-css/dist/js/materialize.min.js';
import { clearCurrent, updateLog }    from '../../../actions/logActions';
import PropTypes                      from 'prop-types';
import { connect }                    from 'react-redux';


const EditLogModal = ({current, clearCurrent, updateLog}) => {
  const [message, setMessage] = useState('');
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState('');

  useEffect(() => {
    if (current) {
      setMessage(current.message);
      setAttention(current.attention);
      setTech(current.tech);
    }
  }, [current]);

  const onSubmit = () => {
    if (!message || !tech) {
      M.toast({html: 'Please enter a message and tech'});
    } else {
      const updLog = {
        id: current.id,
        message,
        attention,
        tech,
        date: new Date(),
      };
      updateLog(updLog);
      M.toast({html: `Log Updated with ${message}, tech: ${tech}, ${attention ? 'high priority' : 'low priority'}`});
    }
  };

  return (
    <div id='edit-log-modal' className='modal' style={modalStyle}>
      <div className="modal-content">
        <h4>Enter system log</h4>
        <div className="row">
          <div className="input-field">
            <input type="text" name='message' value={message} onChange={e => setMessage(e.target.value)}/>
            <label htmlFor="message" className="active">Log message</label>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <select name='tech' value={tech} onChange={e => setTech(e.target.value)} className='browser-default'>
              <option value="" disabled>Select technician</option>
              <option value="John DOE">John DOE</option>
              <option value="Sam Smith">Sam Smith</option>
              <option value="Sara Wilson">Sara Wilson</option>
            </select>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <p>
              <label>
                <input type="checkbox" name='attention' value={attention} onChange={e => setAttention(!attention)}/>
                <span>Needs attention</span>
              </label>
            </p>
          </div>
        </div>
      </div>

      <div className="modal-footer">
        <a href="#!" onClick={onSubmit} className='modal-close waves-effect blue btn'>ENTER</a>
      </div>
    </div>
  );
};

EditLogModal.propTypes = {
  clearCurrent: PropTypes.func.isRequired,
  updateLog: PropTypes.func.isRequired,
  current: PropTypes.object,
};


const modalStyle = {
  width: '75%',
  height: '75%',
};

const mapStateToProps = state => ({
  current: state.log.current
});

export default connect(mapStateToProps, {clearCurrent, updateLog})(EditLogModal);
