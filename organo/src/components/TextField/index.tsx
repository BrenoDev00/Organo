import { TextFieldProps } from "../../types/components";

export const TextField = (props: TextFieldProps) => {
  return (
    <div className="flex flex-col gap-[8px] font-montserrat">
      <label className="text-base font-semibold" htmlFor={props.for}>
        {props.label}
      </label>

      <input
        className="xl:py-[20px] md:py-[15px] xl:px-[15px] md:px-[10px] focus:outline-none shadow-md"
        type={props.type}
        placeholder={props.placeholder}
        id={props.for}
        {...props.register}
      />
    </div>
  );
};
