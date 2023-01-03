import "./App.css";

function Button({children, onClick}) {
    return <button name="Recommencer" onClick={onClick}>{children}</button>
}



export default Button