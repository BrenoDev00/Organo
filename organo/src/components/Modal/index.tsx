import { ModalProps } from "../../types/components";

export const Modal = (props: ModalProps) => {
  return (
    <div
      className={`${
        props.isOpen
          ? "opacity-100 pointer-events-auto flex duration-300"
          : "opacity-0 pointer-events-none duration-100"
      } flex z-10 bg-transparent backdrop-blur-md h-screen w-screen fixed top-0 bottom-0 left-0 right-0 justify-center items-center transition-opacity `}
    >
      <dialog
        data-test={props.dataTest}
        className={`bg-light-gray flex items-center rounded-[20px] shadow-xl`}
      >
        {props.children}
      </dialog>
    </div>
  );
};
