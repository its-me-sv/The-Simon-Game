import React from "react";
import {connect} from "react-redux";

// Styles
import "./board.styles.css";


// Components
import Menu from "../menu/menu.component";
import cn from "../../redux/board/board.data";

const Board = ({children, power}) => {
    return (
        <div className="parent-box">
            <Menu />
            {power ? children : cn}
        </div>
    );
};

const mapStateToProps = ({board}) => ({
    ...board
});

export default connect(mapStateToProps)(Board);