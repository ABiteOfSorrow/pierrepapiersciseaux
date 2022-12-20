import HandIcon from "./HandIcon";

function HandButton({value}) {
    let handleClick = () => console.log(value);

    return (
        <button onClick={handleClick}>
            <HandIcon value={value} />
        </button>
    )
}

export default HandButton