export const Button = (props) => {
  return (
    <button
      className="bg-bg-blue text-white p-[20px] font-bold rounded-[10px] hover:text-cyan-hover"
      type={props.type}
    >
      {props.title}
    </button>
  );
};
