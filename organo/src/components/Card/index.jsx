export const Card = () => {
  return (
    <article className="flex flex-col w-[262px] shadow-lg rounded-[10px]">
      <div className="flex justify-center h-[90px] bg-blue-500 w-full rounded-tl-[10px] rounded-tr-[10px]">
        <img
          className="translate-y-1/4 w-[120px] h-[120px] rounded-full "
          src="https://github.com/BrenoDev00.png"
          alt=""
        />
      </div>

      <div className="flex flex-col gap-[10px] bg-white font-montserrat text-center rounded-bl-[10px] rounded-br-[10px] px-[30px] py-[27px] ">
        <h3 className="text-bg-blue text-[18px] font-semibold mt-[50px]">Breno</h3>
        <p>Desenvolvedor Front-End</p>
      </div>
    </article>
  );
};
