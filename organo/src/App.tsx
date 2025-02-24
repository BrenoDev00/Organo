import { useState } from "react";
import { ModalContext } from "./contexts/ModalContext";
import { Banner } from "./components/Banner";
import { Button } from "./components/Button";
import { IoMdAdd } from "react-icons/io";
import { Modal } from "./components/Modal";
import { Form } from "./components/Form";
import { RecordCounter } from "./components/RecordCounter";
import { SearchBar } from "./components/SearchBar";
import { IsEmptyListing } from "./components/IsEmptyListing";
import { MdGroups } from "react-icons/md";
import { Team } from "./components/Team";
import { Footer } from "./components/Footer";
import { teams } from "./utils/teams";
import { CollaboratorType } from "./types/Collaborator.type";

function App() {
  const [collaborators, setCollaborators] = useState<CollaboratorType[]>([]);

  const [filteredCollaborators, setFilteredCollaborators] = useState<
    CollaboratorType[]
  >([]);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const onNewCollaboratorRegistered = (collaborator: CollaboratorType) => {
    const newCollaborators = [...collaborators, collaborator];

    setCollaborators(newCollaborators);

    setFilteredCollaborators(newCollaborators);
  };

  const removeCollaborator = (id: string) => {
    const newCollaborators = collaborators.filter(
      (collaborator: CollaboratorType) => {
        return collaborator.collaboratorID !== id;
      }
    );

    setCollaborators(newCollaborators);

    setFilteredCollaborators(newCollaborators);
  };

  const handleCollaboratorSearch = (result: string) => {
    if (!result.trim()) {
      setFilteredCollaborators(collaborators);
      return;
    }

    const collaboratorResearched = collaborators.filter((collaborator) =>
      collaborator.collaboratorName.toLowerCase().includes(result.toLowerCase())
    );

    setFilteredCollaborators(collaboratorResearched);
  };

  return (
    <>
      <Banner />

      <div className="flex justify-end mt-6 mr-10">
        <Button
          type="button"
          icon={<IoMdAdd className="h-6 w-6 fill-white" />}
          title="Novo colaborador"
          onClick={() => setIsModalOpen(!isModalOpen)}
        />
      </div>

      <div className="min-h-[400px]">
        <ModalContext.Provider value={{ isModalOpen, setIsModalOpen }}>
          <Modal isOpen={isModalOpen}>
            <Form
              title="Preencha os dados para criar o card do colaborador."
              onCollaboratorRegistered={(collaborator) =>
                onNewCollaboratorRegistered(collaborator)
              }
            />
          </Modal>
        </ModalContext.Provider>

        {collaborators.length > 0 ? (
          <>
            <div className="ml-4 mb-4">
              <RecordCounter total={collaborators.length} />
            </div>

            <div className="flex justify-center mb-4 translate-y-[-160%]">
              <SearchBar onInput={(event) => handleCollaboratorSearch(event)} />
            </div>
          </>
        ) : (
          <div className="mt-6">
            <IsEmptyListing
              icon={
                <MdGroups className="fill-bg-blue xl:w-[90px] xl:h-[90px] md:w-[80px] md:h-[80px]" />
              }
              message={`Aperte o botão "Novo colaborador" para cadastrar um novo colaborador.`}
            />
          </div>
        )}

        {teams.map((team) => (
          <Team
            key={team.teamName}
            teamName={team.teamName}
            primaryColor={team.primaryColor}
            backgroundColor={team.backgroundColor}
            collaborators={filteredCollaborators.filter(
              (collaborator) => collaborator.collaboratorTeam === team.teamName
            )}
            removeCollaborator={removeCollaborator}
          />
        ))}
      </div>

      <Footer />
    </>
  );
}

export default App;
