import React from 'react';
import { createRoot } from 'react-dom/client';
import './main.scss';
import './styles.scss';
import BoardView from './components/Board';

const App = () => {
    return <BoardView />;
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);


// import React from "react";
// import ReactDOM from "react-dom"
// import BoardView from './components/Board';
// import './main.scss';
// import './styles.scss';

// const App = () => {
//     return <BoardView />;
// };

// ReactDOM.render(<App />, document.getElementById('root'));