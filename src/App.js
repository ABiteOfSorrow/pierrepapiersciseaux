import HandIcon from "./HandIcon";

const WINS = {
    pierre: 'ciseaux',
    ciseaux: 'papier',
    papier: 'pierre'
}

const me = 'pierre';
const other = 'ciseaux';


function getResult(left, right) {
    if (WINS[left] === right) {
        return 'Victoire';
    } else if (WINS[right] === left) {
        return 'Défaite';
    } else {
        return 'Égalité'
    }
}


function handleClick() {
    console.log('Pierre-Papier-Ciseaux');
}

function App() {
    return (
        <div>
            <HandIcon />
    <h1 id="title">Pierre-Papier-Ciseaux</h1>
    <h2>{getResult(me, other)}</h2>
    <button className="hand" onClick={handleClick}>Pierre</button>
    <button className="hand" onClick={handleClick}>Papier</button>
    <button className="hand" onClick={handleClick}>Ciseaux</button>
        </div>
    )
}

export default App