import { useContext } from "react";
import { ModalContext } from "../../contexts/ModalContext";
import { useForm } from "react-hook-form";
import { TextField } from "../TextField";
import { Dropdown } from "../Dropdown";
import { Button } from "../Button";
import { FormProps } from "../../types/components";
import { GiCancel } from "react-icons/gi";
import { CollaboratorType } from "../../types/Collaborator.type";
import { ModalContextType } from "../../types/contexts/ModalContext.type";
import { teams } from "../../utils/teams";

export const Form = (props: FormProps) => {
  const modalContext = useContext<ModalContextType | null>(ModalContext);

  if (!modalContext) throw new Error("modalContext não pode ser nulo.");

  const { register, handleSubmit, reset } = useForm<CollaboratorType>();

  const submitForm = (data: CollaboratorType) => {
    const collaborators = {
      ...data,
      collaboratorID: String(Date.now()),
    };

    props.onCollaboratorRegistered(collaborators);

    modalContext.setIsModalOpen(!modalContext.isModalOpen);

    reset();
  };

  return (
    <section className="flex justify-center ">
      <form
        onSubmit={handleSubmit(submitForm)}
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
            register={register("collaboratorName", {
              required: "Campo obrigatório",
            })}
          />

          <TextField
            required={true}
            label="Cargo"
            for="cargo"
            type="text"
            placeholder="Digite seu cargo"
            register={register("collaboratorPosition", {
              required: "Campo obrigatório",
            })}
          />

          <TextField
            required={false}
            label="Imagem"
            for="imagem"
            type="text"
            placeholder="Imagem da web (ex.: https://github.com/nome do perfil.png)"
            register={register("collaboratorImage")}
          />

          <Dropdown
            required={true}
            options={teams}
            label="Time"
            for="time"
            register={register("collaboratorTeam", {
              required: "Campo obrigatório",
            })}
          />

          <div className="self-start">
            <Button type="submit" title="Criar card" />
          </div>
        </div>
      </form>
    </section>
  );
};
