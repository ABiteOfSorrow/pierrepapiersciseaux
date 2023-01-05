import { useState } from "react";
import HandButton from "./HandButton";
import Button from "./Button";
import HandIcon from "./HandIcon";
import { compareHand, generateRandomHand } from "./Util";
import "./App.css";
import resetImg from './assets/ic-reset.svg';


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
    const [winMyBtn, setWinMyBtn] = useState("Hand")
    const [winOtherBtn, setWinOtherBtn] = useState("Hand")

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
        if (comparison > 0) {
            setWinMyBtn("Hand winner");
            setWinOtherBtn("Hand");
        } else if (comparison < 0) {
            setWinMyBtn("Hand");
            setWinOtherBtn("Hand winner");
        } else {
            setWinMyBtn("Hand");
            setWinOtherBtn("Hand");
        }
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
        
        <div className="App">
            <h1 className="App-heading">Pierre-Papier-Ciseaux</h1>
            <Button onClick={handleClearClick}>
                <img className="App-reset" src={resetImg} alt="Recommencer"/>
            </Button>
            <div className="App-scores">
                <div className="Score">
                    <div class="Score-num">{myScore}</div>
                    <div className="Score-name">Moi</div>
                </div>
                <div className="App-versus"> : </div>
                <div className="Score">
                    <div class="Score-num">{otherScore}</div>
                    <div className="Score-name">Compétiteur</div>
                </div>
            </div>   

            <div className="Box App-box">
                <div className="Box-inner">
                    <h2>{getResult(myHand, otherHand)}</h2>
                    <div className="App-hands">                        
                        <div className={winMyBtn}>
                            <HandIcon className="Hand-icon" value={myHand}/>
                        </div>
                        <div className="App-versus">vs</div>
                        <div className={winOtherBtn}>
                            <HandIcon className="Hand-icon" value={otherHand}/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="App-bet">
                <span>Multiplier</span>
                <input type="number" value={bet} min={1} max={9} onChange={handleBetChange}></input>
                <span>Fois</span>
            </div>

            <div className="App-history">
                <h2>Record du match</h2>
                <h3>{handHistory.join(', ')}</h3>
            </div>
    
            <HandButton classname="HandButton" value="pierre" onClick={handleButtonClick}/>
            <HandButton classname="HandButton" value="ciseaux" onClick={handleButtonClick}/>
            <HandButton classname="HandButton" value="papier" onClick={handleButtonClick}/>

        </div>
    )
}

export default App