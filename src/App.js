import React, { useState, useEffect } from 'react';
import './App.css';
import * as c from './Calculate';
import { SubBox, FullBox } from './Components';
import './font_awesome/css/all.min.css';

const App = () => {
    const [small, setSmall] = useState([0, 0, true, false]);
    const [medium, setMedium] = useState([0, 1, true, false]);
    const [large, setLarge] = useState([0, 0, true, false]);
    const [adults, setAdults] = useState([1, 0, true, false]);
    const [children, setChildren] = useState([0, 0, true, false]);
    const [total, setTotal] = useState(200);
    useEffect(() => {
        console.log(medium);
        let sum =
            small[0] * 150 +
            small[1] * 150 +
            medium[0] * 200 +
            medium[1] * 200 +
            large[0] * 300 +
            large[1] * 300;
        setTotal(sum);
        if (sum + 150 > 1000) {
            if (!small[3]) {
                let newSmall = small.slice();
                newSmall[3] = true;
                let newMedium = medium.slice();
                newMedium[3] = true;
                let newLarge = large.slice();
                newLarge[3] = true;
                setSmall(newSmall);
                setMedium(newMedium);
                setLarge(newLarge);
            }
        } else if (sum + 200 > 1000) {
            if (!medium[3]) {
                let newMedium = medium.slice();
                newMedium[3] = true;
                let newLarge = large.slice();
                newLarge[3] = true;
                setMedium(newMedium);
                setLarge(newLarge);
            }
        } else if (sum + 300 > 1000) {
            if (!large[3]) {
                let newLarge = large.slice();
                newLarge[3] = true;
                setLarge(newLarge);
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
                    minusClick={() => setSmall(c.smallMinus(state))}
                    plusClick={() => setSmall(c.smallPlus(state))}
                    minusStatus={small[2]}
                    plusStatus={small[3]}
                    text="SMALL"
                    value={small[0] + small[1]}
                />
                <SubBox
                    minusClick={() => setMedium(c.mediumMinus(state))}
                    plusClick={() => setMedium(c.mediumPlus(state))}
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
                        c.adultMinus(adults, setAdults);
                    }}
                    plusClick={() => {
                        c.adultPlus(adults, setAdults);
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
                        c.childrenMinus(children, setChildren);
                    }}
                    plusClick={() => {
                        c.childrenPlus(children, setChildren);
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
