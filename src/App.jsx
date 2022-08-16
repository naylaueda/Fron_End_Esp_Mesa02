import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Inicio from "./components/Inicio";
import Formulario from "./components/Formulario";
import "./App.css";
import { FormProvider } from "./context/contextoFormulario";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <FormProvider>
        <div className="App">
          <Routes>
            <Route path="/" exact element={<Inicio />} />
            <Route path="/formularioEntrada" element={<Formulario />} />
          </Routes>
        </div>
      </FormProvider>
    </QueryClientProvider>
  );
}

export default App;
