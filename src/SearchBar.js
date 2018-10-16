import React from 'react'




class SearchBar extends React.Component {

  constructor(){
    super()
    this.state = {
      searchTerm: ''
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.fetchSomeVids(this.state.searchTerm)
  }

  handleChange(event) {
    this.setState({
      searchTerm: event.target.value
    })
  }

  render() {
    return (
      <form className="sixteen wide column" onSubmit={this.handleSubmit}>
        <div className="ui segment secondary">
          <div className="ui huge fluid input">
            <input name="searchTerm" type="text" onChange={this.handleChange} placeholder="Search Youtube..."/>
            <button className="ui button" type="submit">Search</button>
          </div>
        </div>
      </form>
    )
  }
}

export default SearchBar
