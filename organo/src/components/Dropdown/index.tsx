import { DropdownProps } from "../../types/components";

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

        {props.teams.map((team) => {
          return <option key={team}>{team}</option>;
        })}
      </select>
    </div>
  );
};
