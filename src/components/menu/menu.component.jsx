import React from "react";
import {connect} from "react-redux";

// Styles
import "./menu.styles.css";

// Actions
import {
    togglePower,
    toggleStart,
    toggleStrict,
    updateSteps,
    setChildren,
    userMove,
    setShouldRun
} from "../../redux/board/board.actions";

// Utility Functions
import sleep from "../../utils/sleep";
import colorMap from "../../utils/colorMap";
import cn from "../../redux/board/board.data";
import playSound from "../../utils/playSound";

const Menu = ({
    power, 
    start, 
    strict, 
    steps, 
    togglePower, 
    toggleStart, 
    toggleStrict, 
    updateSteps,
    setChildren,
    children,
    userMove,
    shouldRun,
    setShouldRun
}) => {
    const runBehind = async () => {
        let newChild;
        let childrenCpy;
        await sleep(1000);
        for (let index of steps) {
            childrenCpy = [...cn];
            let noc = `child-box ${colorMap[index]} ${colorMap[index]}-active`;
            newChild = <div className={noc} key={`${index}`}></div>
            childrenCpy[index] = newChild;
            setChildren(childrenCpy);
            playSound(`${index}`);
            await sleep(1000);
        }
        let finalChildren = [];
        for (let i = 0; i < 4; i += 1) {
            finalChildren.push(
                <div
                    className={`child-box ${colorMap[i]}`}
                    onClick={
                        () => {
                            playSound(`${i}`);
                            userMove(i);
                        }
                    }
                    key={i}
                ></div>
            );
        }
        setChildren([...finalChildren]);
    };

    if (shouldRun === true) {
        runBehind();
        setShouldRun(false);
    }

    return (
        <div className="center-box">
            <span className="title">Simon</span>
            <div className="disp-btns">
                <button className={`count ${power ? "" : "disabled"}`}>
                    {steps.length > 0 && power ? steps.length : "--"}
                </button>
                <button 
                    className={`start ${power ? "" : "disabled"}`}
                    onClick={
                        () => {
                            if (!power) return;
                            toggleStart();
                            runBehind();
                        }
                    }
                >Start</button>
                <button 
                    className={`strict ${power && strict ? "" : "disabled"}`}
                    onClick={() => power && toggleStrict()}
                >Strict</button>
            </div>
            <button 
                className={`switch ${power ? "" : "disabled"}`}
                onClick={togglePower}
            >
                On/Off
            </button>
        </div>
    );
};

const mapStateToProps = ({board}) => ({
    ...board
});

const mapDispatchToProps = dispatch => ({
    togglePower: () => dispatch(togglePower()),
    toggleStart: () => dispatch(toggleStart()),
    toggleStrict: () => dispatch(toggleStrict()),
    updateSteps: () => dispatch(updateSteps()),
    setChildren: newArr => dispatch(setChildren(newArr)),
    userMove: val => dispatch(userMove(val)),
    setShouldRun: val => dispatch(setShouldRun(val))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Menu);