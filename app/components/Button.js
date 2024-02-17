
function Button(props) {
  return (
      <button onClick={props.onClick || null}
      className={`text-center ${props.buttonStyle || ""}`}
      data-cy={props["data-cy"] || ""}
      >
        {props.children}
      </button>
  );
}

export default Button;
