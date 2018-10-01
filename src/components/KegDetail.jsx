import React from 'react';
import PropTypes from 'prop-types';

function KegDetail(props){
  return (
    <div>
      <hr/>
      <h1>{props.selectedKeg.name} - {props.selectedKeg.brand}</h1>
      <h2>Submitted {props.selectedKeg.formattedTime} ago</h2>
      <h4><em>{props.selectedKeg.price}</em></h4>
      <hr/>
    </div>
  );
}

KegDetail.propTypes = {
  selectedKeg: PropTypes.object
};

export default KegDetail;