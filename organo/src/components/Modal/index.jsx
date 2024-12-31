import { Button } from "../Button";

export const Modal = (props) => {
  return (
    <dialog className="hidden absolute top-1/2 translate-y-1/2  bg-light-gray w-[500px] flex flex-col gap-[80px] items-center px-[100px] py-[50px] rounded-[20px] shadow-xl">
      <div className="flex flex-col items-center gap-[50px]">
        <div className="rounded-full border-2 border-bg-blue flex justify-center items-center p-[20px] bg-white">
          {props.icon}
        </div>
        <p className="font-medium text-xl text-dark-color">{props.message}</p>
      </div>
      {props.children}
      <div className="flex gap-[60px]">
        <Button title={props.primaryButtonMessage} variant="default" />
        <Button title={props.secondaryButtonMessage} />
      </div>
    </dialog>
  );
};
