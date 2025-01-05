export const RecordCounter = (props) => {
  return (
    <p className="text-lg text-dark-color font-medium">
      Total de Registros: {props.total}
    </p>
  );
};
