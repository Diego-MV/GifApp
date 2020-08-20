import React, { useState } from "react";
import PropTypes from 'prop-types';

const AddCategory = ({setCategories}) => {
  const [inputValue, setInputValue] = useState('');
  
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(inputValue.trimStart().length){
        setCategories(categ => [ inputValue ,...categ]);
        setInputValue('');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group mb-3">
        <input onChange={handleInputChange} type="text" class="form-control" placeholder="Search Gif's" aria-label="Recipient's username" aria-describedby="button-addon2"/>
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" type="submit" id="button-addon2">Search</button>
        </div>
      </div>
    </form>
  );
};

AddCategory.protoTypes = {
    setCategories : PropTypes.func.isRequired 
}

export default AddCategory;
