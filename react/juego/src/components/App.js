import React from 'react';
import Header from './Header';
import Game from './Game';

const App = () => {
    return (
        <div>
            <Header title="Game React" />
            <div className="mt-5">
                <Game />
            </div>
        </div>
    );
};

export default App;