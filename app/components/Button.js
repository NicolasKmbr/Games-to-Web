
function Button(props) {
  return (
      <button onClick={props.handleButtonClick || null}
      className={`text-center ${props.buttonStyle || ""}`}
      >
        {props.children}
      </button>
  );
}

export default Button;
