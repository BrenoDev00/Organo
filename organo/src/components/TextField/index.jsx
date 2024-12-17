export const TextField = (props) => {
  return (
    <div className="flex flex-col gap-[8px]">
      <label className="text-[18px]">{props.label}</label>
      <input
        className="py-[20px] px-[15px] focus:outline-none shadow-md"
        type={props.type}
        placeholder={props.placeholder}
      />
    </div>
  );
};
