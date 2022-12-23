import HandIcon from "./HandIcon";

function HandButton({value, onClick}) {
    let handleClick = () => onClick(value);

    return (
        <button onClick={handleClick}>
            <HandIcon value={value} />
        </button>
    );
}

export default HandButton