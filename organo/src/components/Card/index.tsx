import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { Modal } from "../Modal";
import { Button } from "../Button";
import { CardProps } from "../../types/components";

export const Card = (props: CardProps) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <>
      <div className="flex flex-col gap-2">
        <div className="self-center">
          <FaTrashAlt
            data-test="remove-collaborator-button"
            className="w-[20px] cursor-pointer"
            style={{ fill: props.backgroundColor }}
            onClick={() => {
              setIsModalOpen(!isModalOpen);
            }}
          />
        </div>

        <div className="hidden">{props.collaboratorID}</div>

        <article
          data-test="collaborator-card"
          className="flex flex-col w-[262px] shadow-lg rounded-[10px] bg-white"
        >
          <div
            className="flex justify-center h-[90px] w-full rounded-tl-[10px] rounded-tr-[10px]"
            style={{ backgroundColor: props.backgroundColor }}
          >
            <img
              className="translate-y-1/4 w-[120px] h-[120px] rounded-full "
              src={props.collaboratorImage}
              alt={`imagem de ${props.collaboratorName}`}
            />
          </div>

          <div className="flex flex-col gap-[10px] bg-white font-montserrat text-center rounded-bl-[10px] rounded-br-[10px] px-[30px] py-[27px] ">
            <h3 className="text-bg-blue text-[18px] font-semibold mt-[50px] break-words">
              {props.collaboratorName}
            </h3>
            <p className="break-words">{props.collaboratorPosition}</p>
          </div>
        </article>
      </div>

      <Modal dataTest="remove-collaborator-modal" isOpen={isModalOpen}>
        <div className="py-12 px-6 flex flex-col gap-12 w-[500px] items-center">
          <div className="bg-white border-2 border-bg-blue rounded-full p-5">
            <FaTrashAlt className="fill-bg-blue w-[20px] h-[20px]" />
          </div>

          <p className="text-[20px] font-semibold -mt-[20px]">
            Deseja remover o colaborador?
          </p>

          <div className="flex gap-[70px]">
            <Button
              type="button"
              title="Remover"
              onClick={() => props.removeCollaborator(props.collaboratorID)}
            />
            <Button
              type="button"
              title="Cancelar"
              variant="secondary"
              onClick={() => setIsModalOpen(!isModalOpen)}
            />
          </div>
        </div>
      </Modal>
    </>
  );
};
