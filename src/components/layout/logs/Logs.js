import React, { useState, useEffect } from 'react';
import LogItem                        from './LogItem';
import Preloader                      from '../Preloader';
import { connect }                    from 'react-redux';
import PropTypes                      from 'prop-types';
import { getLogs }                      from '../../../actions/logActions';

const Logs = ({ globalLogs: { logs, loading }, getLogs }) => {
  useEffect(() => {
    getLogs();
  }, []);

  if (loading || logs === null) {
    return <Preloader/>;
  }

  return (
    <div>
      <ul className='collection with-header'>
        <li className="collection-header">
          <h4 className="center">System logs</h4>
        </li>

        {!loading && logs.length === 0 ? (<p className='center'>No logs to show</p>) : (
          logs.map(log => <LogItem log={log} key={log.id}/>)
        )}
      </ul>
    </div>
  );
};

Logs.propTypes = {
  globalLogs: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  globalLogs: state.log
});

export default connect(mapStateToProps, { getLogs })(Logs);
