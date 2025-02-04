import { Button } from "../Button";
import { ModalProps } from "../../types/components";

export const Modal = (props: ModalProps) => {
  return (
    <div
      className={`${
        props.isOpen
          ? "opacity-100 pointer-events-auto flex duration-300"
          : "opacity-0 pointer-events-none duration-100"
      } z-10 bg-transparent backdrop-blur-md h-screen w-screen fixed top-0 bottom-0 left-0 right-0 justify-center items-center transition-opacity `}
    >
      <dialog
        className={`bg-light-gray w-[500px] flex flex-col gap-[80px] items-center px-[100px] py-[50px] rounded-[20px] shadow-xl`}
      >
        <div className="flex flex-col items-center gap-[50px]">
          <div className="rounded-full border-2 border-bg-blue flex justify-center items-center p-[20px] bg-white">
            {props.icon}
          </div>
          <p className="font-medium text-xl text-dark-color">{props.message}</p>
        </div>

        {props.children}

        <div className="flex gap-[60px]">
          <Button
            onClick={props.handleModalType}
            type="button"
            title={props.primaryButtonMessage}
          />
          <Button
            onClick={() => props.isClose(!props.isOpen)}
            type="button"
            title={props.secondaryButtonMessage}
            variant="secondary"
          />
        </div>
      </dialog>
    </div>
  );
};
