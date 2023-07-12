import React,{useContext} from 'react';
import {Shell} from './layout/shell';
import {Navigation} from './navigation/nav';
import {IdentitySection} from './identity/identity';
import { Hamburger } from './identity/hamburger/hamburger';
import {Results} from './resultspage/results';
import './app.css';
import { Provider } from 'react-redux';
import store from '../app_state/store';
import { BrowserRouter as Router, Route, Routes,Switch, Redirect } from 'react-router-dom';

import { ThemeContext } from '../contexts/ThemeContext';
import { Main } from '../pages/Main'
//import './nav.css';
export  const App = () =>{
        const { theme } = useContext(ThemeContext);
        return(
        <div className="app"> 
                {/*Change me*/}
                <Router>
                        <Routes>
                                <Route path="/" exact element={<Main/>} />
                        </Routes>
                </Router>
        </div>
        );
}

export default  App;