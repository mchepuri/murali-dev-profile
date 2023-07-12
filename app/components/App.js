import React,{useContext} from 'react';
import './app.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import { ThemeContext } from '../contexts/ThemeContext';
import { Main } from '../pages/Main'
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