import React from 'react';


const GooglePlacesList = props => {
  if(props.places.length === 0) {
    return null;
  }

  const restaurants = props.places.map(place => {
    return (
      <li className="found-place">
        <h1>{place.name}</h1>
      </li>
    );
  });

  console.log(restaurants);
  return (
    <div>
      <ul>
        {restaurants}
      </ul>
    </div>
  );
};


GooglePlacesList.propTypes = {
  places: React.PropTypes.array
};


export default GooglePlacesList;
