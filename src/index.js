import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    <h1 id="title">Pierre-Papier-Ciseaux</h1>

    <button className="hand">Pierre</button>
    <button className="hand">Papier</button>
    <button className="hand">Ciseaux</button>
    </>
);
