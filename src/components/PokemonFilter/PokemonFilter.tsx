import { TYPES } from "../../utils/constants";
import { capitalize } from "../../utils/helper";
import './PokemonFilter.scss'

interface Props {
  filter: string | null | undefined;
  setFilter: React.Dispatch<React.SetStateAction<string | null | undefined>>;
}

export const PokemonFilter: React.FC<Props> = ({ filter, setFilter}) => {
  return (
    <ul className="filter">
        {Object.keys(TYPES).map((type) => {
          const { color, icon: Icon } = TYPES[type];

          return (
            <button
              type="button"
              key={type}
              onClick={() => setFilter((prev) => (prev !== type ? type : null))}
              className="filter__bth"
            >
              <Icon
                className="filter__icon"
                fill={!filter || type === filter ? color : 'gray'}
                width={48}
              />
              <p className="filter__text">{capitalize(type)}</p>
            </button>
          );
        })}
      </ul>
  )
}