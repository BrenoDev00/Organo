import { useState } from "react";
import { Banner } from "./components/Banner";
import { Form } from "./components/Form";
import { RecordCounter } from "./components/RecordCounter";
import { Team } from "./components/Team";
import { Footer } from "./components/Footer";
import { Teams } from "./types/Teams.type";
import { Collaborator } from "./types/Collaborator.type";

function App() {
  const teams: Teams[] = [
    {
      teamName: "Programação",
      primaryColor: "#57C278",
      backgroundColor: "#D9F7E9",
    },
    {
      teamName: "Front-End",
      primaryColor: "#82CFFA",
      backgroundColor: "#E8F8FF",
    },
    {
      teamName: "Data Science",
      primaryColor: "#A6D157",
      backgroundColor: "#F0F8E2",
    },
    {
      teamName: "Devops",
      primaryColor: "#E06B69",
      backgroundColor: "#FDE7E8",
    },
    {
      teamName: "UX e Design",
      primaryColor: "#DB6EBF",
      backgroundColor: "#FAE9F5",
    },
    {
      teamName: "Mobile",
      primaryColor: "#FFBA05",
      backgroundColor: "#FFF5D9",
    },
    {
      teamName: "Inovação e Gestão",
      primaryColor: "#FF8A29",
      backgroundColor: "#FFEEDF",
    },
  ];

  const [collaborators, setCollaborators] = useState<Collaborator[]>([]);

  const onNewCollaboratorRegistered = (collaborator: Collaborator) => {
    setCollaborators([...collaborators, collaborator]);
  };

  const removeCollaborator = (id: string) => {
    const newCollaborators = collaborators.filter((collaborator) => {
      return collaborator.collaboratorID !== id;
    });

    setCollaborators(newCollaborators);
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
        <div className="ml-4 mb-4">
          <RecordCounter total={collaborators.length} />
        </div>
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
