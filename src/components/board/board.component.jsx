import React from "react";
import {connect} from "react-redux";

// Styles
import { ParentBoxStyles } from "./board.styles";

// Components
import Menu from "../menu/menu.component";
import cn from "../../redux/board/board.data";

const Board = ({children, power}) => {
    return (
        <ParentBoxStyles>
            <Menu />
            {power ? children : cn}
        </ParentBoxStyles>
    );
};

const mapStateToProps = ({board}) => ({
    ...board
});

export default connect(mapStateToProps)(Board);