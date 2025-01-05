export const RecordCounter = (props) => {
  return (
    <p className="text-lg text-bg-blue font-medium">
      Total de Registros: {props.total}
    </p>
  );
};
