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

const App = () => {
  useEffect(() => {
    //Init materialize JS
    M.AutoInit();
  });

  return <Fragment>
    <SearchBar/>
    <div className="container">
      <AddBtn/>
      <AddLogModal />
      <EditLogModal />
      <AddTechModal />
      <TechListModal />
      <Logs/>
    </div>

  </Fragment>;
};

export default App;
