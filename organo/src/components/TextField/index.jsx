export const TextField = (props) => {
  return (
<<<<<<< HEAD
    <div className="flex flex-col gap-[8px]">
      <label className="text-[18px] font-semibold">{props.label}</label>
=======
    <div className="flex flex-col gap-[8px] font-montserrat">
      <label className="text-[16px] font-semibold">{props.label}</label>
>>>>>>> develop
      <input
        className="py-[20px] px-[15px] focus:outline-none shadow-md"
        type={props.type}
        placeholder={props.placeholder}
        required={props.required}
        onInput={(event) => props.onInput(event.target.value)}
        value={props.value}
      />
    </div>
  );
};
