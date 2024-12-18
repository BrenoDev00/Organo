export const Dropdown = (props) => {
  return (
    <div className="flex flex-col gap-[8px] font-montserrat">
      <label className="font-semibold text-[16px]">{props.label}</label>

      <select
        required={props.required}
        className="py-[20px] px-[15px] focus:outline-none shadow-md"
      >
        <option value="">Escolha um time</option>

        {props.teams.map((team) => {
          return <option key={team}>{team}</option>;
        })}
      </select>
    </div>
  );
};
