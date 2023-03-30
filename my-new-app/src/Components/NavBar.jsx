function Navbar({pokemonList, count, setCount}) {

    const PreviousPok = () => {
        if (count > 0)  {
            setCount(count - 1)
        }
    }

    const NextPok = () => {
        if (count < pokemonList.length - 1) {
            setCount(count + 1)
        }
    }


    return (
        <nav>
          <button onClick={PreviousPok}>Précédant</button>
          <button onClick={NextPok}>Suivant</button>
        </nav>
      );
};


export default Navbar;