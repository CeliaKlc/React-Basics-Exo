import PropTypes from "prop-types";

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

PokemonCard.PropTypes = {
  pokemon:PropTypes.shape ({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
  }).isRequired,
}

export default PokemonCard;