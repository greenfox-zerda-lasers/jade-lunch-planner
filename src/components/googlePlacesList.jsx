import React from 'react';


const GooglePlacesList = props => {
  if(props.places.length === 0) {
    return null;
  }

  const restaurants = props.places.map(place => {
    return (
      <li
        key={place.id}
        className="found-place-item"
        title={place.vicinity}
        onClick={event => props.setPlace(place.name)}
        >
        <h1>{place.name.split("-")[0]}</h1>
      </li>
    );
  });

  return (
    <div className="found-places">
      <ul>
        {restaurants}
      </ul>
    </div>
  );
};


GooglePlacesList.propTypes = {
  places: React.PropTypes.array,
  setPlace: React.PropTypes.func,
};


export default GooglePlacesList;
