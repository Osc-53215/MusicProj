import React from 'react';

class Search extends React.Component{

  constructor(props){
    super(props);

    this.state = {
        query: '',
        results: {},
        loading: false,
        messasge: ''
    }
  }

  handleOnInputChange = (event) => {
      const query = event.target.value;
      this.setState({query: query, loading: true, message:''});
  };

  render() {
    // using object destruction which means pulling query variable state to store in this const
    const {query} = this.state;

    return (
      <div>
        <label htmlFor='search-input'>
        <input
          type='text'
          name='query'
          value={query}
          id='search-input'
          placeholder='Begin your search here...'
          onChange={this.handleOnInputChange}

          />
          </label>
      </div>
    )
  }
}



export default Search
