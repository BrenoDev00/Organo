import { useContext } from "react";
import { ModalContext } from "../../contexts/ModalContext";
import { useForm } from "react-hook-form";
import { TextField } from "../TextField";
import { ErrorMessage } from "../ErrorMessage";
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

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CollaboratorType>();

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
        className="relative bg-light-gray shadow-xl xl:w-[800px] md:w-[700px] text-dark-color xl:py-[32px] md:py-[26px] xl:px-[80px] md:px-[74px] flex flex-col xl:gap-[44px] md:gap-[40px] rounded-[20px]"
      >
        <GiCancel
          className="absolute right-6 top-4 w-6 h-6 fill-bg-blue cursor-pointer"
          onClick={() => modalContext.setIsModalOpen(!modalContext.isModalOpen)}
        />

        <h1 className="font-prata xl:text-[25px] md:text-[22px] ">
          {props.title}
        </h1>

        <div className="flex flex-col xl:gap-[29px] md:gap-[20px]">
          <div className="flex flex-col gap-2">
            <TextField
              label="Nome"
              for="nome"
              type="text"
              placeholder="Digite seu nome"
              register={register("collaboratorName", {
                required: "Campo obrigatório",
                minLength: {
                  value: 3,
                  message: "Mínimo 3 caracteres",
                },
              })}
            />

            {errors.collaboratorName && (
              <ErrorMessage message={errors.collaboratorName.message} />
            )}
          </div>

          <div className="flex flex-col gap-2">
            <TextField
              label="Cargo"
              for="cargo"
              type="text"
              placeholder="Digite seu cargo"
              register={register("collaboratorPosition", {
                required: "Campo obrigatório",
              })}
            />

            {errors.collaboratorPosition && (
              <ErrorMessage message={errors.collaboratorPosition.message} />
            )}
          </div>

          <TextField
            label="Imagem"
            for="imagem"
            type="text"
            placeholder="Imagem da web (ex.: https://github.com/nome do perfil.png)"
            register={register("collaboratorImage")}
          />

          <div className="flex flex-col gap-2">
            <Dropdown
              options={teams}
              label="Time"
              for="time"
              register={register("collaboratorTeam", {
                required: "Campo obrigatório",
              })}
            />

            {errors.collaboratorTeam && (
              <ErrorMessage message={errors.collaboratorTeam.message} />
            )}
          </div>

          <div className="self-start">
            <Button type="submit" title="Criar card" />
          </div>
        </div>
      </form>
    </section>
  );
};
