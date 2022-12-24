import { useState } from "react";
import HandButton from "./HandButton";
import Button from "./Button";
import HandIcon from "./HandIcon";
import { compareHand, generateRandomHand } from "./Util";


function getResult(me, other) {
    let comparison = compareHand(me, other);
    console.log(comparison)
    if (comparison > 0) return 'Victoire';
    if (comparison < 0) return 'Défaite';
    return 'Égalité';
}

const INITIAL_VALUE = 'pierre';



function App() {

    const [myHand, setMyHand] = useState(INITIAL_VALUE);
    const [otherHand, setOtherHand] = useState(INITIAL_VALUE);
    const [handHistory, setHandHistory] = useState([]);
    const [myScore, setMyScore] = useState(0);
    const [otherScore, setOtherScore] = useState(0);
    const [bet, setBet] = useState(1);

    function handleButtonClick(nextMyHand) {
        console.log(nextMyHand);
        let nextOtherHand = generateRandomHand();
        let nextHistory = getResult(nextMyHand, nextOtherHand);
        let comparison = compareHand(nextMyHand, nextOtherHand);
        setMyHand(nextMyHand);
        setOtherHand(nextOtherHand);
        setHandHistory([...handHistory, nextHistory]);
        if (comparison > 0) setMyScore(myScore + bet);
        if (comparison < 0) setOtherScore(otherScore + bet);
    }

    let handleClearClick = () => {
        setMyHand(INITIAL_VALUE);
        setOtherHand(INITIAL_VALUE);
        setHandHistory([]);
        setMyScore(0);
        setOtherScore(0);
        setBet(1);
        console.log("Clear");
    }

    let handleBetChange = (e) => {
        let num = Number(e.target.value);
        if (num < 1) num = 1;
        // generate 1 ~ 9 number
        if (num > 9) num %= 10;
        num = Math.floor(num);
        setBet(num);
    }


    return (
        
        <div>
            <h1 id="title">Pierre-Papier-Ciseaux</h1>

            <div>
                <Button onClick={handleClearClick}>Recommencer</Button>
            </div>        
            <div>
                {myScore} : {otherScore}
            </div>
            <h2>{getResult(myHand, otherHand)}</h2>

            <div>
                <HandIcon value={myHand}/>
                vs
                <HandIcon value={otherHand}/>
            </div>
            <div>
                <input type="number" value={bet} min={1} max={9} onChange={handleBetChange}></input>
            </div>
            <h3>{handHistory.join(', ')}</h3>
            <HandButton value="pierre" onClick={handleButtonClick}/>
            <HandButton value="ciseaux" onClick={handleButtonClick}/>
            <HandButton value="papier" onClick={handleButtonClick}/>

        </div>
    )
}

export default App