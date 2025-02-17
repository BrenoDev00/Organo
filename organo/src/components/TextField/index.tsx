import { TextFieldProps } from "../../types/components";

export const TextField = (props: TextFieldProps) => {
  return (
    <div className="flex flex-col gap-[8px] font-montserrat">
      <label className="text-[16px] font-semibold" htmlFor={props.for}>
        {props.label}
      </label>

      <input
        className="py-[20px] px-[15px] focus:outline-none shadow-md"
        type={props.type}
        placeholder={props.placeholder}
        required={props.required}
        id={props.for}
        {...props.register}
      />
    </div>
  );
};
