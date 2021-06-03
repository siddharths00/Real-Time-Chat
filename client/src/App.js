import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Join from './components/join/Join.js';
import Chat from 'C:\\Users\\siddh\\Desktop\\Sisyphus\\Programming\\React\\real-time-chat\\client\\src\\components\\chat\\Chat.js';
const App = ()=>{
    return(
        <Router >
            <Route path="/" exact component={Join} />
            <Route path="/chat" exact component={Chat} />
        </Router>
    );
};
export default App;