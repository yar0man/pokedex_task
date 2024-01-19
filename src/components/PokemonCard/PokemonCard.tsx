import { HTMLAttributes, MutableRefObject, useEffect, useRef } from 'react';
import { Pokemon } from '../../types/types'
import './PokemonCard.scss'
import { TYPES } from '../../utils/constants';
import VanillaTilt from 'vanilla-tilt';
import { capitalize } from '../../utils/helper';


interface Props extends HTMLAttributes<HTMLDivElement> {
  pokemon: Pokemon;
}

export const PokemonCard: React.FC<Props> = ({ pokemon, onClick }) => {

  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardRef.current) {
      const tiltInstance = VanillaTilt.init(cardRef.current, {
        max: 25,
        speed: 400,
        glare: true,
        'max-glare': 0.5,
      }) as any;;

      return () => {
        if (tiltInstance) {
          tiltInstance.destroy();
        }
      };
    }
  }, []);

  return (
    <>
      <div
        ref={cardRef}
        className="card"
        style={{
          border: `5px solid ${TYPES[pokemon.types[0]].color}`,
        }}
        onClick={onClick}
      >
        <div className="card__top">
          <img
            src={pokemon.sprite}
            alt={pokemon.name}
            className="card__img"
          />

          <h1 className="card__name">{capitalize(pokemon.name)}</h1>

          <div className="card__types">
            {pokemon.types.map((type) => (
              <span
                className="card__type"
                style={{ backgroundColor: TYPES[type].color }}
                key={type}
              >
                {type}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>

  )
}