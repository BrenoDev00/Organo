export const Team = (props) => {
  return (
    <section
      className="p-8 bg-blue-200"
      style={{ backgroundColor: props.backgroundColor }}
    >
      <div className="flex flex-col gap-[9px] items-center">
          <h2 className="text-[32px] text-center font-prata ">{props.title}</h2>
          <span className="w-[32px] h-1" style={{backgroundColor: props.color}}></span>
      </div>
    </section>
  );
};
