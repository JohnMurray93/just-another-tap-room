import React from 'react';
import PropTypes from 'prop-types';

function Keg(props){
  const kegInformation =
    <div>
      <h3>{props.brand}</h3>
      <h3>{props.name}</h3>
      <h4>{props.formattedTime}</h4>
      <hr/>
    </div>;
  if (props.currentRouterPath === '/admin'){
    return (
      <div onClick={() => {props.onKegSelection(props.kegId);}}>
        {kegInformation}
      </div>
    );
  } else {
    return (
      <div>
        {kegInformation}
      </div>
    );
  }
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.string,
  formattedTime: PropTypes.string.isRequired,
  currentRouterPath: PropTypes.string,
  onKegSelection: PropTypes.func,
  kegId: PropTypes.string.isRequired
};

export default Keg;