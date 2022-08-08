import { Routes, Route } from "react-router-dom";
import Inicio from "./components/Inicio";
import Formulario from "./components/Formulario";
import "./App.css";
import { FormProvider } from "./context/contextoFormulario";

function App() {
  return (
    <FormProvider>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Inicio />} />
          <Route path="/formularioEntrada" element={<Formulario />} />
        </Routes>
      </div>
    </FormProvider>
  );
}

export default App;
