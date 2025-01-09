import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { MdModeEditOutline } from "react-icons/md";
import { Modal } from "../Modal";
import { TextField } from "../TextField";

export const Card = (props) => {
  const [isRemoveModalOpen, setIsRemoveModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col gap-2">
        <div className="self-center flex items-center gap-2">
          <FaTrashAlt
            className="w-[20px] h-[20px] cursor-pointer"
            style={{ fill: props.backgroundColor }}
            onClick={() => {
              setIsRemoveModalOpen(!isRemoveModalOpen);
            }}
          />
          <MdModeEditOutline
            className="w-[23px] h-[23px] cursor-pointer"
            style={{ fill: props.backgroundColor }}
            onClick={() => {
              setIsEditModalOpen(!isEditModalOpen);
            }}
          />
        </div>

        <div className="hidden">{props.id}</div>

        <article className="flex flex-col w-[262px] shadow-lg rounded-[10px] bg-white">
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
            <h3 className="text-bg-blue text-[18px] font-semibold mt-[50px] break-words">
              {props.name}
            </h3>
            <p className="break-words">{props.position}</p>
          </div>
        </article>
      </div>

      <Modal
        icon={<FaTrashAlt className="fill-bg-blue w-[20px] h-[20px]" />}
        message="Deseja remover o colaborador?"
        primaryButtonMessage="Remover"
        secondaryButtonMessage="Cancelar"
        isOpen={isRemoveModalOpen}
        isClose={setIsRemoveModalOpen}
        handleModalType={() => props.removeCollaborator(props.id)}
      ></Modal>

      <Modal
        className="flex"
        icon={<MdModeEditOutline className="fill-bg-blue w-[25px] h-[25px]" />}
        message="Editar colaborador"
        primaryButtonMessage="Editar"
        secondaryButtonMessage="Cancelar"
        isOpen={isEditModalOpen}
        isClose={setIsEditModalOpen}
      >
        <form className="w-full -mt-10 flex flex-col gap-6 items-center">
          <div className="w-[400px]">
            <TextField
              for="nome"
              label="Nome"
              type="text"
              placeholder="Informe o nome do colaborador"
              required={true}
            />
          </div>

          <div className="w-[400px]">
            <TextField
              for="cargo"
              label="Cargo"
              type="text"
              placeholder="Informe o cargo do colaborador"
              required={true}
            />
          </div>

          <div className="w-[400px]">
            <TextField
              for="imagem"
              label="Imagem"
              type="text"
              placeholder="Imagem da web"
              required={true}
            />
          </div>
        </form>
      </Modal>
    </>
  );
};
