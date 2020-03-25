import React, { useState, useEffect } from 'react';
import './App.css';
import './font_awesome/css/all.min.css';
import * as c from './Calculate';

const App = () => {
    const [small, setSmall] = useState([0, 0]);
    const [medium, setMedium] = useState([0, 1]);
    const [large, setLarge] = useState([0, 0]);
    const [adults, setAdults] = useState([1, 0]);
    const [children, setChildren] = useState([0, 0]);
    const [total, setTotal] = useState(200);
    useEffect(() => {
        let sum =
            small[0] * 150 +
            small[1] * 150 +
            medium[0] * 200 +
            medium[1] * 200 +
            large[0] * 300 +
            large[1] * 300;
        setTotal(sum);
    });
    return (
        <div className="container">
            <div className="left_pad">
                Order<b> Pizza</b>
            </div>
            <div className="box">
                <SubBox
                    minusClick={() => {
                        c.smallMinus(small, setSmall);
                    }}
                    plusClick={() => {
                        c.smallPlus(small, setSmall);
                    }}
                    text="SMALL"
                    value={small[0] + small[1]}
                />
                <SubBox
                    minusClick={() => {
                        c.mediumMinus(medium, setMedium);
                    }}
                    plusClick={() => {
                        c.mediumPlus(medium, setMedium);
                    }}
                    text="MEDIUM"
                    value={medium[0] + medium[1]}
                />
                <SubBox
                    minusClick={() => {
                        c.largeMinus(large, setLarge);
                    }}
                    plusClick={() => {
                        c.largePlus(large, setLarge);
                    }}
                    text="LARGE"
                    value={large[0] + large[1]}
                />
                <hr />
                <FullBox
                    minusClick={() => {
                        c.adultMinus(adults, setAdults);
                    }}
                    plusClick={() => {
                        c.adultPlus(adults, setAdults);
                    }}
                    text="ADULTS"
                    icon="user"
                    value={adults[0] + adults[1]}
                />
                <hr />
                <FullBox
                    minusClick={() => {
                        c.childrenMinus(children, setChildren);
                    }}
                    plusClick={() => {
                        c.childrenPlus(children, setChildren);
                    }}
                    text="CHILDREN"
                    icon="child"
                    value={children[0] + children[1]}
                />
            </div>
            <div className="box_total">
                <span className="left_pad">
                    Order<b> Total</b>
                </span>
                <span className="action_btns">{total}</span>
            </div>
        </div>
    );
};
const SubBox = props => {
    return (
        <div className="sub_box">
            <div className="labels">
                <i
                    className={'fa fa--pizza-slice ' + props.text.toLowerCase()}
                ></i>
                <span className="left_pad">{props.text}</span>
            </div>
            <div className="action_btns">
                <button
                    onClick={props.minusClick}
                    className="buttonCircle blue"
                >
                    <i className="fa fa-minus"></i>
                </button>
                <span>{props.value}</span>
                <button onClick={props.plusClick} className="buttonCircle red">
                    <i className="fa fa-plus"></i>
                </button>
            </div>
        </div>
    );
};
const FullBox = props => {
    return (
        <div className="full_box">
            <div className="labels">
                <i className={'fa fa-' + props.icon}></i>
                <span className="left_pad">{props.text}</span>
            </div>
            <div className="action_btns">
                <button
                    onClick={props.minusClick}
                    className="buttonCircle blue"
                >
                    <i className="fa fa-minus"></i>
                </button>
                <span>{props.value}</span>
                <button onClick={props.plusClick} className="buttonCircle red">
                    <i className="fa fa-plus"></i>
                </button>
            </div>
        </div>
    );
};
export default App;
