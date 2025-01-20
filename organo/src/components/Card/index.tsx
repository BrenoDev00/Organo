import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { Modal } from "../Modal";
import { CardProps } from "../../types/components";

export const Card = (props: CardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col gap-2">
        <div className="self-center">
          <FaTrashAlt
            className="w-[20px] cursor-pointer"
            style={{ fill: props.backgroundColor }}
            onClick={() => {
              setIsModalOpen(!isModalOpen);
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
        isOpen={isModalOpen}
        isClose={setIsModalOpen}
        handleModalType={() => props.removeCollaborator(props.id)}
      ></Modal>
    </>
  );
};
