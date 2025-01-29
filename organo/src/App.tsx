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

  const onNewCollaboratorRegistered = (collaborator: CollaboratorType) => {
    setCollaborators([...collaborators, collaborator]);
  };

  const removeCollaborator = (id: string) => {
    const newCollaborators = collaborators.filter(
      (collaborator: CollaboratorType) => {
        return collaborator.collaboratorID !== id;
      }
    );

    setCollaborators(newCollaborators);
  };

  const handleCollaboratorSearch = (result: string) => {
    const newCollaborators = [...collaborators];

    const collaboratorResearched: CollaboratorType[] = newCollaborators.filter(
      (collaborator) => {
        return collaborator.collaboratorName === result;
      }
    );

    setCollaborators(collaboratorResearched);
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
          collaborators={collaborators.filter(
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
