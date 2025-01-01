import { Button } from "../Button";

export const Modal = (props) => {
  return (
    <dialog
      className={`${
        props.isOpen ? "flex" : "hidden"
      } bg-light-gray w-[500px] flex-col gap-[80px] items-center px-[100px] py-[50px] rounded-[20px] shadow-xl`}
    >
      <div className="flex flex-col items-center gap-[50px]">
        <div className="rounded-full border-2 border-bg-blue flex justify-center items-center p-[20px] bg-white">
          {props.icon}
        </div>
        <p className="font-medium text-xl text-dark-color">{props.message}</p>
      </div>
      {props.children}
      <div className="flex gap-[60px]">
        <Button type="button" title={props.primaryButtonMessage} />
        <Button
          type="button"
          title={props.secondaryButtonMessage}
          variant="secondary"
        />
      </div>
    </dialog>
  );
};
