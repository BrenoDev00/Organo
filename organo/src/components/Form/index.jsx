import { TextField } from "../TextField";
import { Dropdown } from "../Dropdown";
import { Button } from "../Button";
import { useState } from "react";

export const Form = (props) => {
  const [nameField, setNameField] = useState("");
  const [positionField, setPositionField] = useState("");
  const [imageField, setImageField] = useState("");
  const [teamField, setTeamField] = useState("");

  const preventDefault = (event) => {
    event.preventDefault();

    props.onCollaboratorRegistered({
      id: Date.now(),
      nameField,
      positionField,
      imageField,
      teamField,
    });

    setNameField("");
    setPositionField("");
    setImageField("");
    setTeamField("");
  };

  return (
    <section className=" mt-[80px] mb-[80px] flex justify-center ">
      <form
        onSubmit={preventDefault}
        className="bg-light-gray shadow-xl w-[800px] text-dark-color py-[32px] px-[80px] flex flex-col  gap-[44px] rounded-[20px]"
      >
        <h1 className="font-prata text-[25px] ">{props.title}</h1>

        <div className="flex flex-col gap-[29px]">
          <TextField
            required={true}
            label="Nome"
            for="nome"
            type="text"
            placeholder="Digite seu nome"
            value={nameField}
            onInput={(event) => setNameField(event)}
          />

          <TextField
            required={true}
            label="Cargo"
            for="cargo"
            type="text"
            placeholder="Digite seu cargo"
            value={positionField}
            onInput={(event) => setPositionField(event)}
          />

          <TextField
            required={false}
            label="Imagem"
            for="imagem"
            type="text"
            placeholder="Imagem da web (ex.: https://github.com/nome do perfil.png)"
            value={imageField}
            onInput={(event) => setImageField(event)}
          />

          <Dropdown
            required={true}
            teams={props.teams}
            label="Time"
            for="time"
            value={teamField}
            onChange={(event) => setTeamField(event)}
          />

          <div className="self-start">
            <Button type="submit" title="Criar card" />
          </div>
        </div>
      </form>
    </section>
  );
};
