import React from "react";

// Styles
import {AppContainerStyles} from "./app.styles";

// Components
import Board from "../../components/board/board.component";

class App extends React.Component {
    render() {
        return (
            <AppContainerStyles>
                <Board />
            </AppContainerStyles>
        );
    }
}

export default App;