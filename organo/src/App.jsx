import { useState } from "react";
import { Banner } from "./components/Banner";
import { Form } from "./components/Form";
import { Team } from "./components/Team";
import { Footer } from "./components/Footer";
import { Modal } from "./components/Modal";
import { FaTrashAlt } from "react-icons/fa";

function App() {
  const teams = [
    {
      name: "Programação",
      primaryColor: "#57C278",
      backgroundColor: "#D9F7E9",
    },
    {
      name: "Front-End",
      primaryColor: "#82CFFA",
      backgroundColor: "#E8F8FF",
    },
    {
      name: "Data Science",
      primaryColor: "#A6D157",
      backgroundColor: "#F0F8E2",
    },
    {
      name: "Devops",
      primaryColor: "#E06B69",
      backgroundColor: "#FDE7E8",
    },
    {
      name: "UX e Design",
      primaryColor: "#DB6EBF",
      backgroundColor: "#FAE9F5",
    },
    {
      name: "Mobile",
      primaryColor: "#FFBA05",
      backgroundColor: "#FFF5D9",
    },
    {
      name: "Inovação e Gestão",
      primaryColor: "#FF8A29",
      backgroundColor: "#FFEEDF",
    },
  ];

  const [collaborators, setCollaborators] = useState([]);

  const onNewCollaboratorRegistered = (collaborator) => {
    setCollaborators([...collaborators, collaborator]);
  };

  const removeCollaborator = (card) => {
    const newCollaborators = [...collaborators];
    const collaboratorsIndex = newCollaborators.indexOf(card);

    newCollaborators.splice(collaboratorsIndex, 1);
    setCollaborators(newCollaborators);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Banner />

      <Form
        title="Preencha os dados para criar o card do colaborador."
        teams={teams.map((team) => team.name)}
        onCollaboratorRegistered={(collaborator) =>
          onNewCollaboratorRegistered(collaborator)
        }
      />
      
      {teams.map((team) => (
        <Team
          key={team.name}
          title={team.name}
          primaryColor={team.primaryColor}
          backgroundColor={team.backgroundColor}
          collaborators={collaborators.filter(
            (collaborator) => collaborator.teamField === team.name
          )}
          removeCollaborator={removeCollaborator}
          setIsModalOpen={setIsModalOpen}
          isModalOpen={isModalOpen}
        />
      ))}

      <Footer />

      <Modal
        icon={<FaTrashAlt className="fill-bg-blue w-[20px] h-[20px]" />}
        message="Deseja remover o colaborador?"
        primaryButtonMessage="Remover"
        secondaryButtonMessage="Cancelar"
        isOpen={isModalOpen}
      ></Modal>
    </>
  );
}

export default App;
