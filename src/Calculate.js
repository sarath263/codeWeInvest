import React from 'react';
const smallMinus = val => {
    return decrement(val.small);
};
const mediumMinus = val => {
    return decrement(val.medium);
};
const largeMinus = val => {
    return decrement(val.large);
};
const decrement = val => {
    let newVal = val.slice();
    if (newVal[0] > 0) {
        newVal[0] = newVal[0] - 1;
        if (newVal[0] <= 0) {
            newVal[2] = true;
            newVal[3] = false;
        }
    }
    return newVal;
};

const smallPlus = (val, set = () => {}) => {
    return increment(val.small);
};
const mediumPlus = (val, set = () => {}) => {
    return increment(val.medium);
};
const largePlus = (val, set = () => {}) => {
    return increment(val.large);
};
const increment = val => {
    let newVal = val.slice();
    newVal[0] = newVal[0] + 1;
    newVal[2] = false;
    return newVal;
};

const adultMinus = () => {
    console.log('hii');
};
const adultPlus = () => {
    console.log('hii');
};
const childrenMinus = () => {
    console.log('hii');
};
const childrenPlus = () => {
    console.log('hii');
};

export {
    smallMinus,
    mediumMinus,
    largeMinus,
    smallPlus,
    mediumPlus,
    largePlus,
    adultMinus,
    adultPlus,
    childrenMinus,
    childrenPlus
};
