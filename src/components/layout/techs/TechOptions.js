import React, { useEffect } from 'react';
import PropTypes            from 'prop-types';
import { getTechs }         from '../../../actions/techActions';
import { connect }          from 'react-redux';

const TechOptions = ({getTechs, tech: {techs, loading}}) => {
  useEffect(() => {
    getTechs();
  }, []);

  return (!loading && techs !== null && techs.map((t) => <option key={t.id}
                                                                 value={`${t.firstName} ${t.lastName}`}>{`${t.firstName} ${t.lastName}`}</option>
  ));
};

TechOptions.propTypes = {
  tech: PropTypes.object.isRequired,
  getTechs: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  tech: state.tech
});

export default connect(mapStateToProps, {getTechs})(TechOptions);
