export const Footer = () => {
  return (
    <>
      <footer className="bg-bg-blue flex items-center p-[20px] gap-[20px] justify-center">
        <div>
          <img
            className="2xl:w-[150px] md:w-[120px]"
            src="/images/logo.png"
            alt="Logo do Organo."
          />
        </div>

        <p className="text-white 2xl:text-lg md:text-base">
          Desenvolvido por Breno.
        </p>
      </footer>
    </>
  );
};
