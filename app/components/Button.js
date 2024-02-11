
function Button(props) {
  return (
      <button onClick={props.handleButtonClick || null}
      className={`text-center ${props.buttonStyle || ""}`}
      data-cy={props["data-cy"] || ""}
      >
        {props.children}
      </button>
  );
}

export default Button;
