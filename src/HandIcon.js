import pierreImg from './assets/pierre.svg'
import papierImg from './assets/papier.svg'
import ciseauxImg from './assets/ciseaux.svg'

const HAND_IMAGES = {
    pierre: pierreImg,
    papier: papierImg,
    ciseaux: ciseauxImg
}

function HandIcon(props) {

    const SRC = HAND_IMAGES[props.value];
    return <img src={SRC} alt={props.value} />
}

export default HandIcon;

