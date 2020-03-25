import React, { useState, useEffect } from 'react';
import './App.css';
import * as c from './Calculate';
import { SubBox, FullBox } from './Components';
import './font_awesome/css/all.min.css';

const App = () => {
    const [small, setSmall] = useState([0, 0, true, false]);
    const [medium, setMedium] = useState([1, 0, true, false]);
    const [large, setLarge] = useState([0, 0, true, false]);
    const [adults, setAdults] = useState([1, 0, true, false]);
    const [children, setChildren] = useState([0, 0, true, false]);
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

        let newLarge = large.slice();
        let newMedium = medium.slice();
        if (medium[0] == 2) {
            newMedium[0] = 0;
            newMedium[2] = true;
            newMedium[3] = false;
            console.log(sum);
            newLarge[0] = newLarge[0] + 1;
            if (newLarge[0] > 1) {
                newLarge[2] = false;
            }
            setMedium(newMedium);
            setLarge(newLarge);
        }
        let newSmall = small.slice();
        if (sum + 150 > 1000) {
            if (!small[3] || !medium[3] || !large[3]) {
                newSmall[3] = true;
                newMedium[3] = true;
                newLarge[3] = true;
                setSmall(newSmall);
                setMedium(newMedium);
                setLarge(newLarge);
            }
        } else if (sum + 200 > 1000) {
            if (!medium[3] || !large[3]) {
                newMedium[3] = true;
                newLarge[3] = true;
                setMedium(newMedium);
                setLarge(newLarge);
            }
        } else if (sum + 300 > 1000) {
            if (!large[3]) {
                newLarge[3] = true;
                setLarge(newLarge);
            }
        } else {
            if (small[3]) {
                newSmall[3] = false;
                setSmall(newSmall);
            }
            if (medium[3]) {
                newMedium[3] = false;
                setMedium(newMedium);
            }
            if (large[3]) {
                newLarge[3] = false;
                setLarge(newLarge);
            }
        }
        if (medium[0] == 0 && newLarge[0] == 1 && !large[2]) {
            newLarge[2] = true;
            setLarge(newLarge);
        } else if (medium[0] == 1 && newLarge[0] == 0 && !medium[2]) {
            newMedium[2] = true;
            setMedium(newMedium);
        }
        if (medium[0] == 1 && newLarge[0] == 1) {
            if (newLarge[2]) {
                newLarge[2] = false;
                setLarge(newLarge);
            }
            if (medium[2]) {
                newMedium[2] = false;
                setMedium(newMedium);
            }
        }
    }, [small, medium, large, adults, children, total]);

    let state = { small, medium, large, adults, children, total };
    return (
        <div className="container">
            <div className="left_pad">
                Order<b> Pizza</b>
            </div>
            <div className="box">
                <SubBox
                    minusClick={() => {
                        let minused = c.smallMinus(state);
                        setSmall(minused.small);
                        setChildren(minused.children);
                    }}
                    plusClick={() => {
                        let plused = c.smallPlus(state);
                        setSmall(plused.small);
                        setChildren(plused.children);
                    }}
                    minusStatus={small[2]}
                    plusStatus={small[3]}
                    text="SMALL"
                    value={small[0] + small[1]}
                />
                <SubBox
                    minusClick={() => {
                        let minused = c.mediumMinus(state);
                        setMedium(minused.medium);
                        setAdults(minused.adults);
                    }}
                    plusClick={() => {
                        let plused = c.mediumPlus(state);
                        setMedium(plused.medium);
                        setAdults(plused.adults);
                    }}
                    minusStatus={medium[2]}
                    plusStatus={medium[3]}
                    text="MEDIUM"
                    value={medium[0] + medium[1]}
                />
                <SubBox
                    minusClick={() => setLarge(c.largeMinus(state))}
                    plusClick={() => setLarge(c.largePlus(state))}
                    minusStatus={large[2]}
                    plusStatus={large[3]}
                    text="LARGE"
                    value={large[0] + large[1]}
                />
                <hr />
                <FullBox
                    minusClick={() => {
                        let minused = c.adultMinus(state);
                        setMedium(minused.medium);
                        setAdults(minused.adults);
                    }}
                    plusClick={() => {
                        let plused = c.adultPlus(state);
                        setMedium(plused.medium);
                        setAdults(plused.adults);
                    }}
                    minusStatus={adults[2]}
                    plusStatus={adults[3]}
                    text="ADULTS"
                    icon="user"
                    value={adults[0] + adults[1]}
                />
                <hr />
                <FullBox
                    minusClick={() => {
                        let minused = c.childrenMinus(state);
                        setSmall(minused.small);
                        setChildren(minused.children);
                    }}
                    plusClick={() => {
                        let plused = c.childrenPlus(state);
                        setSmall(plused.small);
                        setChildren(plused.children);
                    }}
                    minusStatus={children[2]}
                    plusStatus={children[3]}
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
export default App;
