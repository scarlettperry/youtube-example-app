import React from 'react'

class SearchBar extends React.Component {
  render() {
    return (
      <div className="sixteen wide column">
        <div className="ui segment secondary">
          <div className="ui huge fluid input">
            <input type="text" placeholder="Search Youtube..."/>
          </div>
        </div>
      </div>
    )
  }
}

export default SearchBar
