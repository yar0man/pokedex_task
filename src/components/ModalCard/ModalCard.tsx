import { HTMLAttributes } from "react";
import { Pokemon } from "../../types/types"
import { PokemonTableRow } from "../PokemonTableRow/PokemonTableRow"
import { IoCloseSharp } from "react-icons/io5";


import { capitalize, pad } from "../../utils/helper";
import './ModalCard.scss';
import { TYPES } from "../../utils/constants";

interface Props extends HTMLAttributes<HTMLDivElement> {
  pokemon: Pokemon;
  setOpenModalIndex: (val: number | null) => void;
}

export const ModalCard: React.FC<Props> = ({ pokemon, setOpenModalIndex }) => {

  return (
    <div
      className="modal-card"
      style={{
        backgroundColor: TYPES[pokemon.types[0]].color,
      }}
    >

      <IoCloseSharp
        className="modal-card__closer"
        fill="#fff" 
        width={24}
        onClick={() => setOpenModalIndex(null)}
      />

      <div className="modal-card__container">
        <img
          className="modal-card__img"
          src={pokemon.sprite}
          alt={pokemon.name}
        />
      </div>

      <h1 className="modal-card__name">
        {capitalize(pokemon.name )} #
        {pad(pokemon.id.toString(), 3)}
      </h1>

      <table className="modal-card__table">
        <tbody>
          <PokemonTableRow label="Type" value={pokemon.types.join(', ')} />
          <PokemonTableRow label="Attack" value={pokemon.attack} />
          <PokemonTableRow label="Defense" value={pokemon.defense} />
          <PokemonTableRow label="HP" value={pokemon.hp} />
          <PokemonTableRow label="SP Attack" value={pokemon.SPAttack} />
          <PokemonTableRow label="SP Defense" value={pokemon.SPDefense} />
          <PokemonTableRow label="Speed" value={pokemon.speed} />
          <PokemonTableRow label="Weight" value={pokemon.weight} />
          <PokemonTableRow label="Total moves" value={pokemon.totalMoves} />
        </tbody>
      </table>
    </div>
  )
}