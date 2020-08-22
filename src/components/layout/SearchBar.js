import React, { useState, useEffect } from 'react';
import { connect }                    from 'react-redux';
import PropTypes                      from 'prop-types';
import { searchLogs }                      from '../../actions/logActions';


const SearchBar = ({ searchLogs }) => {
  const [text, setText] = useState('');

  const doSearch = () => {
    searchLogs(text);
  }
  return (
    <nav style={{ marginBottom: '30px' }} className='blue'>
      <div className="nav-wrapper">
        <form onSubmit={ doSearch() }>
          <div className="input-field">
            <input id="search" type="search" value={text} onChange={e => setText(e.target.value)} />
              <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
              <i className="material-icons">close</i>
          </div>
        </form>
      </div>
    </nav>
  );
};

SearchBar.propTypes = {
  searchLogs: PropTypes.func.isRequired,
}

export default connect(null, { searchLogs })(SearchBar);
