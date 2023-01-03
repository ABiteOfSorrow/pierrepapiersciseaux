import HandIcon from "./HandIcon";
import "./App.css";


function HandButton({value, onClick}) {
    let handleClick = () => onClick(value);

    return (
        <button className="HandButton" onClick={handleClick}>
            <HandIcon className="HandButton-icon" value={value} />
        </button>
    );
}

export default HandButton