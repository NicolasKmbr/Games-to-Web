
function Button(props) {
  return (
      <button onClick={props.onClick || null}
      className={`text-center ${props.buttonStyle || "bg-slate-400 p-3 rounded-md"}`}
      data-cy={props["data-cy"] || ""}
      >
        {props.children}
      </button>
  );
}

export default Button;
