import React from "react";
import {connect} from "react-redux";

// Styles
import { 
    CenterBoxStyles,
    DisplayButtonsStyles,
    TitleStyles,
    ButtonStyles
} from "./menu.styles";
import { ChildBoxStyles } from "../board/board.styles";

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
    strict, 
    steps, 
    togglePower, 
    toggleStart, 
    toggleStrict, 
    setChildren,
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
            newChild = <ChildBoxStyles
                styleColor={colorMap[index]}
                mustActive={true}
                key={`${index}`}
            ></ChildBoxStyles>
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
        <CenterBoxStyles>
            <TitleStyles>Simon</TitleStyles>
            <DisplayButtonsStyles>
                <ButtonStyles 
                    noc={"count"}
                    visible={!power}
                >{steps.length > 0 && power ? steps.length : "--"}</ButtonStyles>
                <ButtonStyles
                    noc={"start"}
                    visible={!power}
                    onClick={
                        () => {
                            if (!power) return;
                            toggleStart();
                            runBehind();
                        }
                    }
                >Start</ButtonStyles>
                <ButtonStyles
                    noc={"strict"}
                    visible={!strict}
                    onClick={() => power && toggleStrict()}
                >Strict</ButtonStyles>
            </DisplayButtonsStyles>
            <ButtonStyles
                noc={"switch"}
                visible={!power}
                onClick={togglePower}
            >On/Off</ButtonStyles>
        </CenterBoxStyles>
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