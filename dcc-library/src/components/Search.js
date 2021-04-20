import React from 'react';

const Search = (props) =>{
    return (
      <div>
        <form>
        <input
          type='search'
          placeholder= {props.placeholder}
          onChange = {props.handleChange}
          />
          </form>
      </div>
    )
  }




export default Search
