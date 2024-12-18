import { TextField } from "../TextField";
import { Dropdown } from "../Dropdown";
import { Button } from "../Button";

export const Form = (props) => {
  const preventDefault = (event) => {
    event.preventDefault();
  };

  return (
    <section className=" mt-[80px] mb-[80px] flex justify-center ">
      <form
        onSubmit={preventDefault}
        className="bg-light-gray shadow-xl w-[800px] text-dark-color py-[32px] px-[80px] flex flex-col  gap-[44px] rounded-[20px]"
      >
        <h1 className="font-prata text-[25px] ">{props.title}</h1>

        <div className="flex flex-col gap-[29px]">
          <TextField
            required={true}
            label="Nome"
            type="text"
            placeholder="Digite seu nome"
          />

          <TextField
            required={true}
            label="Cargo"
            type="text"
            placeholder="Digite seu cargo"
          />

          <TextField
            required={false}
            label="Imagem"
            type="text"
            placeholder="Informe o endereço da imagem"
          />

          <Dropdown required={true} teams={props.teams} label="Time" />

          <div className="self-start ">
            <Button type="submit" title="Criar card" />
          </div>
        </div>
      </form>
    </section>
  );
};
