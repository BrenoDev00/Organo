export const Card = (props) => {
  return (
    <article className="flex flex-col w-[262px] shadow-lg rounded-[10px]">
      <div
        className="flex justify-center h-[90px] w-full rounded-tl-[10px] rounded-tr-[10px]"
        style={{ backgroundColor: props.backgroundColor }}
      >
        <img
          className="translate-y-1/4 w-[120px] h-[120px] rounded-full "
          src={props.image}
          alt={`imagem de ${props.name}`}
        />
      </div>

      <div className="flex flex-col gap-[10px] bg-white font-montserrat text-center rounded-bl-[10px] rounded-br-[10px] px-[30px] py-[27px] ">
        <h3 className="text-bg-blue text-[18px] font-semibold mt-[50px]">
          {props.name}
        </h3>
        <p>{props.position}</p>
      </div>
    </article>
  );
};
