import { ButtonProps } from "../../types/components";

export const Button = (props: ButtonProps) => {
  return (
    <button
      onClick={props.onClick}
      className={`${
        props.variant === "secondary"
          ? "bg-white text-bg-blue border-2 border-bg-blue hover:bg-cyan-hover"
          : "bg-bg-blue hover:text-cyan-hover text-white"
      } 2xl:p-[15px] md:p-[12px] 2xl:text-base md:text-sm font-bold font-montserrat rounded-[10px] transition flex items-center gap-2`}
      type={props.type}
    >
      {props.icon} {props.title}
    </button>
  );
};
