import React, { Fragment, useEffect } from 'react';

import 'materialize-css/dist/css/materialize.min.css';
import M                              from 'materialize-css/dist/js/materialize.min';
import './App.css';
import SearchBar                      from './components/layout/SearchBar';
import Logs                           from './components/layout/logs/Logs';
import AddBtn                         from './components/layout/AddBtn';
import AddLogModal                    from './components/layout/logs/AddLogModal';
import EditLogModal                   from './components/layout/logs/EditLogModal';
import AddTechModal                   from './components/layout/techs/AddTechModal';
import TechListModal                  from './components/layout/techs/TechListModal';
import { Provider }                   from 'react-redux';
import store                          from './store';

const App = () => {
  useEffect(() => {
    //Init materialize JS
    M.AutoInit();
  });

  return (
    <Provider store={store}>
      <Fragment>
        <SearchBar/>
        <div className="container">
          <AddBtn/>
          <AddLogModal/>
          <EditLogModal/>
          <AddTechModal/>
          <TechListModal/>
          <Logs/>
        </div>

      </Fragment>
    </Provider>
  );
};

export default App;
