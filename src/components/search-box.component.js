import React from 'react';

export const SearchBox = ({placeholder, handleChange}) => (
    <div className="col-lg-6 offset-md-4" style={{marginBottom: '30px'}}>
         <input 
        className='form-control'
        type='search' 
        placeholder={placeholder} 
        onChange={handleChange}
        />
    </div>
   
);