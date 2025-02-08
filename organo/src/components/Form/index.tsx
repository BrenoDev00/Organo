import { FormEvent, useState, useContext } from "react";
import { ModalContext } from "../../contexts/ModalContext";
import { TextField } from "../TextField";
import { Dropdown } from "../Dropdown";
import { Button } from "../Button";
import { FormProps } from "../../types/components";
import { GiCancel } from "react-icons/gi";
import { ModalContextType } from "../../types/contexts/ModalContext.type";

export const Form = (props: FormProps) => {
  const [collaboratorName, setNameField] = useState<string>("");
  const [collaboratorPosition, setPositionField] = useState<string>("");
  const [collaboratorImage, setImageField] = useState<string>("");
  const [collaboratorTeam, setTeamField] = useState<string>("");

  const preventDefault = (event: FormEvent) => {
    event.preventDefault();

    props.onCollaboratorRegistered({
      collaboratorID: String(Date.now()),
      collaboratorName,
      collaboratorPosition,
      collaboratorImage,
      collaboratorTeam,
    });

    setNameField("");
    setPositionField("");
    setImageField("");
    setTeamField("");
  };

  const modalContext = useContext<ModalContextType | null>(ModalContext);

  if (!modalContext) throw new Error("modalContext não pode ser nulo.");

  return (
    <section className=" mt-[80px] mb-[80px] flex justify-center ">
      <form
        onSubmit={preventDefault}
        className="relative bg-light-gray shadow-xl w-[800px] text-dark-color py-[32px] px-[80px] flex flex-col  gap-[44px] rounded-[20px]"
      >
        <GiCancel
          className="absolute right-6 top-4 w-6 h-6 fill-bg-blue cursor-pointer"
          onClick={() => modalContext.setIsModalOpen(!modalContext.isModalOpen)}
        />

        <h1 className="font-prata text-[25px] ">{props.title}</h1>

        <div className="flex flex-col gap-[29px]">
          <TextField
            required={true}
            label="Nome"
            for="nome"
            type="text"
            placeholder="Digite seu nome"
            value={collaboratorName}
            onInput={(event) => setNameField(event)}
          />

          <TextField
            required={true}
            label="Cargo"
            for="cargo"
            type="text"
            placeholder="Digite seu cargo"
            value={collaboratorPosition}
            onInput={(event) => setPositionField(event)}
          />

          <TextField
            required={false}
            label="Imagem"
            for="imagem"
            type="text"
            placeholder="Imagem da web (ex.: https://github.com/nome do perfil.png)"
            value={collaboratorImage}
            onInput={(event) => setImageField(event)}
          />

          <Dropdown
            required={true}
            teams={props.teams}
            label="Time"
            for="time"
            value={collaboratorTeam}
            onChange={(event) => setTeamField(event)}
          />

          <div className="self-start">
            <Button
              type="submit"
              title="Criar card"
              onClick={() => {
                if (
                  collaboratorName.length > 0 &&
                  collaboratorPosition.length > 0 &&
                  collaboratorTeam.length > 0
                ) {
                  return modalContext.setIsModalOpen(!modalContext.isModalOpen);
                }
              }}
            />
          </div>
        </div>
      </form>
    </section>
  );
};
