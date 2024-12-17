import { Banner } from "./components/Banner";
import {Form} from "./components/Form"

function App() {
  return (
    <div>
      <Banner />
      <Form title="Preencha os dados para criar o card do colaborador." />
    </div>
  );
}

export default App;
