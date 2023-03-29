function PokemonCard(props) {
    return (
      <figure>
        {(props.imgSrc != null) ? (
          <img src={props.imgSrc} alt={props.name} />
        ) : (
          <p>???</p>
        )}
        <figcaption>{props.name}</figcaption>
      </figure>
    );
}

export default PokemonCard;