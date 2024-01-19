import {Component} from 'react'
import './index.css'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {
    searchInputValue: '',
  }

  onInputChange = event => {
    this.setState({searchInputValue: event.target.value})
  }

  onArrowClick = id => {
    const {suggestionsList} = this.props
    const onArrowElement = suggestionsList.filter(each => each.id === id)

    this.setState({searchInputValue: onArrowElement[0].suggestion})
  }

  render() {
    const {searchInputValue} = this.state
    const {suggestionsList} = this.props
    const searchResults = suggestionsList.filter(eachSuggestion =>
      eachSuggestion.suggestion
        .toLowerCase()
        .includes(searchInputValue.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="google-logo"
        />
        <div className="inner-container">
          <div className="search-bar-section">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="search-icon"
            />
            <input
              type="search"
              placeholder="Search Google"
              className="input-field"
              value={searchInputValue}
              onChange={this.onInputChange}
            />
          </div>
          <ul className="suggestion-list">
            {searchResults.map(eachSuggestion => (
              <SuggestionItem
                suggestionDetails={eachSuggestion}
                key={eachSuggestion.id}
                onArrowClick={this.onArrowClick}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
