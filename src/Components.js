import React from 'react';
const SubBox = props => {
    return (
        <div className="sub_box">
            <div className="labels">
                <i
                    className={'fa fa-pizza-slice ' + props.text.toLowerCase()}
                ></i>
                <span className="left_pad">{props.text}</span>
            </div>
            <div className="action_btns">
                <button
                    onClick={props.minusClick}
                    className="buttonCircle blue"
                    disabled={props.minusStatus}
                >
                    <i className="fa fa-minus"></i>
                </button>
                <span>{props.value}</span>
                <button
                    onClick={props.plusClick}
                    className="buttonCircle red"
                    disabled={props.plusStatus}
                >
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
                    disabled={props.minusStatus}
                >
                    <i className="fa fa-minus"></i>
                </button>
                <span>{props.value}</span>
                <button
                    onClick={props.plusClick}
                    className="buttonCircle red"
                    disabled={props.plusStatus}
                >
                    <i className="fa fa-plus"></i>
                </button>
            </div>
        </div>
    );
};
export { SubBox, FullBox };
