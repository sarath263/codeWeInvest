import React from 'react';
const smallMinus = val => {
    let newPerson = val.children.slice();
    if (newPerson[0] > 0) {
        newPerson[0] = newPerson[0] - 1;
        if (newPerson[0] <= 0) {
            newPerson[2] = true;
            newPerson[3] = false;
        }
    }
    return { small: decrement(val.small), children: newPerson };
};
const mediumMinus = val => {
    let newPerson = val.adults.slice();
    if (newPerson[0] > 1) {
        newPerson[0] = newPerson[0] - 1;
        if (newPerson[0] <= 1) {
            newPerson[2] = true;
            newPerson[3] = false;
        }
    }
    let newVal = val.medium.slice();
    if (newVal[0] > 1 || (newVal[0] == 1 && val.large[0] > 0)) {
        newVal[0] = newVal[0] - 1;
        if (newVal[0] <= 0) {
            newVal[2] = true;
            newVal[3] = false;
        }
    }
    return { medium: newVal, adults: newPerson };
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

const smallPlus = val => {
    let newPerson = val.children.slice();
    newPerson[0] = newPerson[0] + 1;
    newPerson[2] = false;
    return { small: increment(val.small), children: newPerson };
};
const mediumPlus = val => {
    let newPerson = val.adults.slice();
    newPerson[0] = newPerson[0] + 1;
    newPerson[2] = false;
    return { medium: increment(val.medium), adults: newPerson };
};
const largePlus = val => {
    return increment(val.large);
};
const increment = val => {
    let newVal = val.slice();
    newVal[0] = newVal[0] + 1;
    newVal[2] = false;
    return newVal;
};

const adultMinus = val => {
    let newVal = val.medium.slice();
    if ((newVal[0] > 0 && val.large > 0) || newVal[0] > 1) {
        newVal[0] = newVal[0] - 1;
        if (newVal[0] <= 0) {
            newVal[2] = true;
            newVal[3] = false;
        }
    }
    let newPerson = val.adults.slice();
    if (newPerson[0] > 1) {
        newPerson[0] = newPerson[0] - 1;
        if (newPerson[0] <= 1) {
            newPerson[2] = true;
            newPerson[3] = false;
        }
    }
    let newObj = { medium: newVal, adults: newPerson };
    return newObj;
};
const adultPlus = val => {
    let newVal = val.medium.slice();
    newVal[0] = newVal[0] + 1;
    newVal[2] = false;
    let newPerson = val.adults.slice();
    newPerson[0] = newPerson[0] + 1;
    newPerson[2] = false;
    let newObj = { medium: newVal, adults: newPerson };
    return newObj;
};
const childrenMinus = val => {
    let newVal = val.small.slice();
    if (newVal[0] > 0) {
        newVal[0] = newVal[0] - 1;
        if (newVal[0] <= 0) {
            newVal[2] = true;
            newVal[3] = false;
        }
    }
    let newPerson = val.children.slice();
    if (newPerson[0] > 0) {
        newPerson[0] = newPerson[0] - 1;
        if (newPerson[0] <= 0) {
            newPerson[2] = true;
            newPerson[3] = false;
        }
    }
    let newObj = { small: newVal, children: newPerson };
    return newObj;
};
const childrenPlus = val => {
    let newVal = val.small.slice();
    newVal[0] = newVal[0] + 1;
    newVal[2] = false;
    let newPerson = val.children.slice();
    newPerson[0] = newPerson[0] + 1;
    newPerson[2] = false;
    let newObj = { small: newVal, children: newPerson };
    return newObj;
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
