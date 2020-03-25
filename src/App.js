import React from 'react';
import logo from './logo.svg';
import './App.css';
import './font-awesome/css/all.min.css';

function App() {
    return (
        <div className="container">
            <span>
                &nbsp;Order
                <b>Pizza</b>
            </span>
            <div className="box">
                <div className="subBox">
                    <i className="fa fa-pizza-slice small"></i>
                    <span>SMALL</span>
                    <button className="minusCircle">
                        <i className="fa fa-minus"></i>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;
