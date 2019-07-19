import React from 'react';
import ReactDOM from 'react-dom';

import Button from './chapter6/home';

import './app.scss';

const App = () => {
    return <div className="bg-color-grey"><Button /></div>
}

ReactDOM.render(<App />, document.getElementById("app"));