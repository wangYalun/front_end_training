import React from 'react';

import styles from './home.css';



class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "allen"
        }
    }
    onButtonClick = () => {
        import('./add').then(fun => {
            // default(10, 10);
            console.log(fun.default(10, 10));
        })
    }
    render() {
        return <button className={styles["color-red"]} onClick={this.onButtonClick}>{this.state.name}</button>
    }
}

export default App;