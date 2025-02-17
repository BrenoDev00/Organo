import { IsEmptyListingProps } from "../../types/components";

export const IsEmptyListing = (props: IsEmptyListingProps) => {
  return (
    <article className="flex flex-col gap-2 items-center">
      {props.icon}

      <p className="text-dark-color text-lg font-medium">{props.message}</p>
    </article>
  );
};
