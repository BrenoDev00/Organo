import { IsEmptyListingProps } from "../../types/components";

export const IsEmptyListing = (props: IsEmptyListingProps) => {
  return (
    <article className="flex flex-col gap-2 items-center">
      {props.icon}

      <p className="text-dark-color xl:text-lg md:text-base font-medium">
        {props.message}
      </p>
    </article>
  );
};
