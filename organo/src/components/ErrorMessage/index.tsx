import { ErrorMessageProps } from "../../types/components";

export const ErrorMessage = (props: ErrorMessageProps) => {
  return <p className="text-bg-blue font-medium">{props.message}</p>;
};
