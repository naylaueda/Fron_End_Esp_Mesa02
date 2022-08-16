import { useFormContext } from "../../context/contextoFormulario";
import { useState } from "react";
import { useQuery } from '@tanstack/react-query'

const Select = ({ name, label, type = "text"}) => {
  
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
  
  const { isLoading, error, data } = useQuery(['repoData'], () =>
    fetch('https://pokeapi.co/api/v2/type/').then(res =>
      res.json()
    )
  )

  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  return (
    <div className="input-receptor">
      <label htmlFor={name}>{label}</label>
      <select
        onBlur={onBlur}
        onChange={onChange}
      >
        {data?.results.map((type) => {
          return (
            <option value={type.name} key={type.name}>
              {type.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;