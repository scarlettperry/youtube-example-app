import React from 'react'

class SearchBar extends React.Component {

  state = {
    term: ''
  }

  handleChange = (e) => {
    this.setState({
      term: e.target.value
    })
  }

  handleButtonClick = () => {
    this.props.handleSearch(this.state.term)
  }

  render() {
    // console.log(this.state)
    return (
      <div className="sixteen wide column">
        <div className="ui segment secondary">
          <div className="ui huge fluid input">
            <input type="text"
              placeholder="Search Youtube..."
              value={this.state.term}
              onChange={this.handleChange}/>
            <button onClick={this.handleButtonClick}> Search </button>
          </div>
        </div>
      </div>
    )
  }
}

export default SearchBar
