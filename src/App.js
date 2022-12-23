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

function App() {

    const [myHand, setMyHand] = useState('pierre');
    const [otherHand, setOtherHand] = useState('pierre');


    let handleClearClick = () => {
        setMyHand('pierre');
        setOtherHand('pierre');
        console.log("Clear");
    }

    function handleButtonClick(nextMyHand) {
        console.log(nextMyHand);
        let nextOtherHand = generateRandomHand();
        setMyHand(nextMyHand);
        setOtherHand(nextOtherHand);
    }

    return (
        <div>
            <h1 id="title">Pierre-Papier-Ciseaux</h1>

            <div>
                <Button onClick={handleClearClick}>Recommencer</Button>
            </div>        

            <h2>{getResult(myHand, otherHand)}</h2>

            <div>
                <HandIcon value={myHand}/>
                vs
                <HandIcon value={otherHand}/>
            </div>

            <HandButton value="pierre" onClick={handleButtonClick}/>
            <HandButton value="ciseaux" onClick={handleButtonClick}/>
            <HandButton value="papier" onClick={handleButtonClick}/>

        </div>
    )
}

export default App