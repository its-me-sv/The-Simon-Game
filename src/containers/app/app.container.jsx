import React from "react";

// Styles
import "./app.styles.css";

// Components
import Board from "../../components/board/board.component";

class App extends React.Component {
    render() {
        return (
            <div className="app-container">
                <Board />
            </div>
        );
    }
}

export default App;