import Button from "./Button";
import PropTypes from "prop-types";
import { useEffect, useRef } from "react";

// Todo: Add a close action when clicking outside the dialog
function Dialog(props) {

  return props.isOpen ? (
    <div
      className={`fixed flex items-center justify-center w-screen h-screen bg-slate-500 bg-opacity-50 z-40 top-0 left-0${
        props.className ? props.className : ""
      }`} // white space at end of classes could cause problems
    >
      <div
        className="flex flex-col bg-white opacity-100 p-5 rounded-md z-50"
      >
        <h2>{props.title}</h2>
        <p>{props.children}</p>
        <Button onClick={props.onClose}>Close</Button>
      </div>
    </div>
  ) : null;
}

Dialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  className: PropTypes.string,
  onClose: PropTypes.func,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Dialog;
