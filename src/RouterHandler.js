import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './views/HomePage';
import InputDataPage from './views/InputDataPage';
import DataPage from './views/DataPage';
import MapPage from './views/MapPage';

const RouteHandler = () => (
    <main>
        <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route path='/input' component={InputDataPage}/>
            <Route path='/data' component={DataPage}/>
            <Route path='/map' component={MapPage}/>
        </Switch>
    </main>
)

export default RouteHandler;