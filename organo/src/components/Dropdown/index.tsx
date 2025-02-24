import { DropdownProps } from "../../types/components";
import { TeamsType } from "../../types/utils/Teams.type";

export const Dropdown = (props: DropdownProps) => {
  return (
    <div className="flex flex-col gap-[8px] font-montserrat">
      <label className="font-semibold text-base" htmlFor={props.for}>
        {props.label}
      </label>

      <select
        className="2xl:py-[20px] md:py-[15px] 2xl:px-[15px] md:px-[10px] focus:outline-none shadow-md"
        id={props.for}
        {...props.register}
      >
        <option value="">Escolha um time</option>

        {props.options.map((option: TeamsType) => {
          return <option key={option.teamName}>{option.teamName}</option>;
        })}
      </select>
    </div>
  );
};
