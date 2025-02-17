import { DropdownProps } from "../../types/components";
import { TeamsType } from "../../types/utils/Teams.type";


export const Dropdown = (props: DropdownProps) => {
  return (
    <div className="flex flex-col gap-[8px] font-montserrat">
      <label className="font-semibold text-[16px]" htmlFor={props.for}>
        {props.label}
      </label>

      <select
        required={props.required}
        className="py-[20px] px-[15px] focus:outline-none shadow-md"
        value={props.value}
        onChange={(event) => props.onChange(event.target.value)}
        id={props.for}
      >
        <option value="">Escolha um time</option>

        {props.options.map((option: TeamsType) => {
          return <option key={option.teamName}>{option.teamName}</option>;
        })}
      </select>
    </div>
  );
};
