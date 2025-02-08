import { useState } from "react";
import { Banner } from "./components/Banner";
import { Form } from "./components/Form";
import { RecordCounter } from "./components/RecordCounter";
import { SearchBar } from "./components/SearchBar";
import { Team } from "./components/Team";
import { Footer } from "./components/Footer";
import { teams } from "./utils/teams";
import { CollaboratorType } from "./types/Collaborator.type";

function App() {
  const [collaborators, setCollaborators] = useState<CollaboratorType[]>([]);

  const [filteredCollaborators, setFilteredCollaborators] = useState<
    CollaboratorType[]
  >([]);

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

      <Form
        title="Preencha os dados para criar o card do colaborador."
        teams={teams.map((team) => team.teamName)}
        onCollaboratorRegistered={(collaborator) =>
          onNewCollaboratorRegistered(collaborator)
        }
      />

      {collaborators.length > 0 && (
        <>
          <div className="ml-4 mb-4">
            <RecordCounter total={collaborators.length} />
          </div>

          <div className="flex justify-center mb-4 translate-y-[-160%]">
            <SearchBar onInput={(event) => handleCollaboratorSearch(event)} />
          </div>
        </>
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

      <Footer />
    </>
  );
}

export default App;
