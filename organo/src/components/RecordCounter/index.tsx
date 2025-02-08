import { RecordCounterProps } from "../../types/components";

export const RecordCounter = (props: RecordCounterProps) => {
  return (
    <p className="text-lg text-bg-blue font-medium">
      Total de Registros: {props.total}
    </p>
  );
};
