import { RecordCounterProps } from "../../types/components";

export const RecordCounter = (props: RecordCounterProps) => {
  return (
    <p data-test={props.dataTest} className="text-lg text-bg-blue font-medium">
      Total de Registros: {props.total}
    </p>
  );
};
