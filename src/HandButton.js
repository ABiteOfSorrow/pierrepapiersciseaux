import HandIcon from "./HandIcon";
import buttonBack from "./assets/purple.svg";


const HandButtonStyle = {
    width: '166px',
    height: '166px',
    border: 'none',
    outline: 'none',
    textAlign: 'center',
    cursor: 'pointer',
    backgroundColor: 'transparent',
    backgroundImage: `url('${buttonBack}')`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'contain',
  }


function HandButton({value, onClick}) {
    let handleClick = () => onClick(value);

    return (
        <button style={HandButtonStyle} onClick={handleClick}>
            <HandIcon value={value} />
        </button>
    );
}

export default HandButton