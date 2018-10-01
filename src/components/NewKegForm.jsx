import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';

function NewKegForm(props){
  let _name = null;
  let _brand = null;
  let _price = null;

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewCreation({name: _name.value, brand: _brand.value, price: _price.value, timeOpen: new Moment()});
    _name.value = '';
    _brand.value = '';
    _price.value = '';
  }

  return (
    <div>
      <form onSubmit={handleNewKegFormSubmission}>
        <input
          type='text'
          id='name'
          placeholder='Name'
          ref={(input) => {_name = input;}}/>
        <input
          type='text'
          id='brand'
          placeholder='Brand'
          ref={(input) => {_brand = input;}}/>
        <textarea
          id='price'
          placeholder='5'
          ref={(input) => {_price = input;}}/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

NewKegForm.propTypes = {
  onNewCreation: PropTypes.func
};

export default NewKegForm;
