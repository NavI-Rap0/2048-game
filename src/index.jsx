import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './main.scss';
import './styles.scss';
import BoardView from './components/Board';
import Loader from './components/Loader/Loader';

const App = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            await new Promise(resolve => setTimeout(resolve, 3000));
            setIsLoading(false); 
        };

        loadData();
    }, []);

    return isLoading ? <Loader /> : <BoardView />;
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
