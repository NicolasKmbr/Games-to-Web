import Button from "./Button"

function Dialog(props) {


return (
    props.isOpen ? (
        <div className={props.className || "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-5 z-50"}>
            <h2>{props.title}</h2>
            {props.children}
            <Button onClick={props.onClose}>Close</Button>
        </div>
    ) : null
);
}

export default Dialog