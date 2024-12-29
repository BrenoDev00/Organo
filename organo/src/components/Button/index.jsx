export const Button = (props) => {
  return (
    <button
      className={`${
        props.variant === "default"
          ? "bg-bg-blue hover:text-cyan-hover text-white"
          : "bg-white text-bg-blue border-2 border-bg-blue hover:bg-cyan-hover"
      } p-[15px] font-bold font-montserrat rounded-[10px] transition`}
      type={props.type}
      variant={props.variant}
    >
      {props.title}
    </button>
  );
};
