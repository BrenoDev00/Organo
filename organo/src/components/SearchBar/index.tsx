import { IoSearch } from "react-icons/io5";
import { SearchBarProps } from "../../types/components";

export const SearchBar = (props: SearchBarProps) => {
  return (
    <div className="relative">
      <input
        data-test="search-bar"
        type="text"
        placeholder="Pesquisar colaborador"
        className="text-lg text-dark-color outline-none border-b-2 border-bg-blue w-[323px] pl-8"
        onInput={(event) => props.onInput(event.currentTarget.value)}
      />

      <IoSearch className="w-[20px] h-[20px] absolute top-1 left-0 fill-bg-blue" />
    </div>
  );
};
