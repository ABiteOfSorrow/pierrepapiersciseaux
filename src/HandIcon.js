import rockImg from './assets/rock.svg'
import paperImg from './assets/paper.svg'
import scissorImg from './assets/scissor.svg'

const HAND_IMAGES = {
    rock: rockImg,
    paper: paperImg,
    scissor: scissorImg
}

function HandIcon(props) {

    const SRC = HAND_IMAGES[props.value];
    return <img src={SRC} alt={props.value} />
}

export default HandIcon;

