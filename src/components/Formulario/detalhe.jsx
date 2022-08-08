import { useFormContext } from "../../context/contextoFormulario";

const Detalhe = () => {
  const { formState } = useFormContext();

  return (
    <div className="detalhe-formulario">
      <div className="cabecalho">
        <h3>Vista prévia da solicitação</h3>
      </div>
      <section className="dados-cliente">
        <h4>Dados do Treinador</h4>
        <div className="lista">
          <p>Nome: {formState.nome}</p>
          <p>Sobrenome: {formState.sobrenome}</p>
          <p>Email: {formState.email}</p>
        </div>
      </section>
      <section className="dados-cliente">
        <h4>Dados do Pokémon</h4>
        <div className="lista">
          <p>Nome:{formState.nomePokemon}</p>
          <p>Tipo:{formState.tipoPokemon}</p>
          <p>Elemento:{formState.idadePokemon}</p>
          <p>Altura:{formState.alturaPokemon}</p>
          <p>Idade:{formState.idadePokemon}</p>
        </div>
      </section>
      <button
        className="botao-enviar"
        onClick={() => alert("Solicitação enviada :)")}
      >
        Enviar Solicitação
      </button>
    </div>
  );
};

export default Detalhe;
