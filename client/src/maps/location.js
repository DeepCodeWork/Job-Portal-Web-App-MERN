import React, { useState } from 'react';
import PlacesAutocomplete,{geocodeByAddress,getLatLng} from 'react-places-autocomplete';

const LocationAutoComplete = () => {

    const [address, setAddress] = useState({address:''});
    const handleSelect = address => {
        geocodeByAddress(address)
            .then(results => getLatLng(results[0]))
            .then(latLng => console.log('success',latLng))
            .catch(error => console.error('Error',error)) 
    }

    const handleChange = address => {
        setAddress({address:address});
    }

    return (
        <div>
            <PlacesAutocomplete
                value={address.address}
                onChange={handleChange}
                onSelect={handleSelect}
            >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input className="form-control" {...getInputProps({placeholder: 'Location...'})}/>
            
            <div className="autocomplete-dropdown-container" style={{overflow:"auto"}}>
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                console.log(suggestion)
                const style = suggestion.active
                  ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                  : { backgroundColor: '#ffffff', cursor: 'pointer' };
                  return(
                    <div
                    {...getSuggestionItemProps(suggestion, {style})}>
                    <span>{suggestion.description}</span>
                  </div>
                  )
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
        </div>
    );
}

export default LocationAutoComplete;