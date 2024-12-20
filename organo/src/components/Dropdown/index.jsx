export const Dropdown = (props) => {
  return (
<<<<<<< HEAD
    <div className="flex flex-col gap-[8px]">
      <label className="font-semibold text-[18px]">{props.label}</label>

      <select className="py-[20px] px-[15px] focus:outline-none shadow-md">
=======
    <div className="flex flex-col gap-[8px] font-montserrat">
      <label className="font-semibold text-[16px]">{props.label}</label>

      <select
        required={props.required}
        className="py-[20px] px-[15px] focus:outline-none shadow-md"
        value={props.value}
        onChange={(event) => props.onChange(event.target.value)}
      >
>>>>>>> develop
        <option value="">Escolha um time</option>

        {props.teams.map((team) => {
          return <option key={team}>{team}</option>;
        })}
      </select>
    </div>
  );
};
