import { useState } from "react";
import { useFormContext } from "../../context/contextoFormulario";

const Input = ({ name, label, type = "text" }) => {
  const { formState, dispatch } = useFormContext();
  const [value, setValue] = useState(formState[name]);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onBlur = (e) => {
    e.preventDefault();

    const dispatchType = name.includes("Pokemon")
      ? "ATUALIZAR_POKEMON"
      : "ATUALIZAR_TREINADOR";

    dispatch({ type: dispatchType, name, value: value });
  };

  return (
    <div className="input-receptor">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        value={value}
        id={name}
        placeholder={`Digite aqui o ${label}`}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
};

export default Input;
