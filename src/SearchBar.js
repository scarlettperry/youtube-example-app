import React from 'react'




class SearchBar extends React.Component {
  render() {
    return (
      <form className="sixteen wide column">
        <div className="ui segment secondary">
          <div className="ui huge fluid input">
            <input type="text" placeholder="Search Youtube..."/>
            <button className="ui button" type="submit">Search</button>
          </div>
        </div>
      </form>
    )
  }
}

export default SearchBar
