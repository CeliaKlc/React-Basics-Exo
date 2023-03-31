function Navbar({ pokemonList, setCount }) {
  return (
    <nav>
      {pokemonList.map((pokemon, index) => (
        <button
          type="button"
          key={pokemon.name}
          onClick={() => setCount(index)}
        >
          {pokemon.name}
        </button>
      ))}
    </nav>
  );
}

export default Navbar;
