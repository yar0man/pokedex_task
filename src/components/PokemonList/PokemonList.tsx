import { useEffect, useState } from 'react'
import './PokemonList.scss'
import { Pokemon } from '../../types/types';
import { PokemonCard } from '../PokemonCard/PokemonCard';
import { getPokemonPage } from '../../api/pokemons';
import { Loader } from '../Loader/Loader';
import Modal from '../Modal/Modal';
import '../PokemonCard/PokemonCard.scss'
import { ModalCard } from '../ModalCard/ModalCard';
import { PokemonFilter } from '../PokemonFilter/PokemonFilter';

export const PokemonList = () => {
  const [openModalIndex, setOpenModalIndex] = useState<number | null>(null);
  const [filter, setFilter] = useState<string | null>();
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(false);
  const [limit, setLimit] = useState(12);

  const fetchData = async () => {
    try {
      setLoading(true);
      const data = await getPokemonPage(limit);
      setPokemons(data.results);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [limit]);

  const handleLoadMore = (event: React.FormEvent) => {
    event.preventDefault();
    setLimit(limit + 12)
  };

  function getFilterPokemons(pokemons: Pokemon[]) {
    if (filter) {
      return pokemons.filter((p) => p.types.includes(filter));
    }

    return pokemons;
  }

  return (
    <>
      <PokemonFilter filter={filter} setFilter={setFilter}/>
      <ul className="list">
        {
          getFilterPokemons(pokemons).map((pokemon) => (
            <>
              <li className="list__item">
                <PokemonCard
                  key={pokemon.id}
                  pokemon={pokemon}
                  onClick={() => {
                    setOpenModalIndex(pokemons.indexOf(pokemon));
                  }}
                />
              </li>

              <Modal
                open={openModalIndex === pokemons.indexOf(pokemon)}
                onClose={() => setOpenModalIndex(null)}
              >
                {pokemon && (
                  <ModalCard
                    pokemon={pokemon}
                    setOpenModalIndex={setOpenModalIndex}
                  />
                )}
              </Modal>
            </>
          ))
        }
      </ul>

      {!getFilterPokemons(pokemons).length && (
        <p className="list__text">
          No Pokemons found for your filter, load more Pokemons
        </p>
      )}

      <button
        disabled={loading}
        className="bth"
        onClick={handleLoadMore}
      >
        Load more
      </button>

      {loading && (
        <Loader />
      )}
    </>
  )
}