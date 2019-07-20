import React from 'react';
import ReactDOM from 'react-dom';

// import array from 'lodash/array';

import Button from './chapter6/home';

import './app.scss';

const App = () => {
    console.log(ENV);
    console.log("test chunkhash");

    return <div className="bg-color-grey"><Button /></div>
}

ReactDOM.render(<App />, document.getElementById("app"));