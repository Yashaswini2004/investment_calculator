import { createPortal } from "react-dom";
import { forwardRef, useImperativeHandle } from "react";
import { useRef } from "react";
const Modal = forwardRef(function Modal({ children }, ref) {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  return createPortal(
    <dialog ref={dialog}>{children}</dialog>,
    document.getElementById("modal")
  );
});
export default Modal;
