import PokemonLogo from '../../assets/pokemon-logo.png';
import './Header.scss'

export const Header = () => {

  return (
    <header className="header">
      <div className="header__container">
        <img className="header__img" src={PokemonLogo} alt="Pokemon Logo" />
        <p className="header__text">Pokedex</p>
      </div>
    </header>
  )
}