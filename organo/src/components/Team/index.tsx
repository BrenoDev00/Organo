import { Card } from "../Card";
import { TeamProps } from "../../types/components";

export const Team = (props: TeamProps) => {
  return (
    props.collaborators.length > 0 && (
      <section
        className="p-8 bg-blue-200 flex flex-col gap-[38px]"
        style={{ backgroundColor: props.backgroundColor }}
      >
        <div className="flex flex-col gap-[9px] items-center">
          <h2 className="text-[32px] text-center font-prata ">{props.title}</h2>
          <span
            className="w-[32px] h-1"
            style={{ backgroundColor: props.primaryColor }}
          ></span>
        </div>

        <div className="flex justify-center flex-wrap gap-[28px]">
          {props.collaborators.map((collaborator: string) => (
            <Card
              key={collaborator.id}
              id={collaborator.id}
              image={collaborator.imageField}
              name={collaborator.nameField}
              position={collaborator.positionField}
              backgroundColor={props.primaryColor}
              removeCollaborator={props.removeCollaborator}
            />
          ))}
        </div>
      </section>
    )
  );
};
