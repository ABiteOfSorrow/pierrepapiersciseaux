import pierreImg from './assets/pierre.svg';
import papierImg from './assets/papier.svg';
import ciseauxImg from './assets/ciseaux.svg';
import "./App.css";

const HAND_IMAGES = {
    pierre: pierreImg,
    papier: papierImg,
    ciseaux: ciseauxImg
}

function HandIcon({value, className = ''}) {

    const SRC = HAND_IMAGES[value];
    return <img src={SRC} alt={value} className={className}/>
}

export default HandIcon;

