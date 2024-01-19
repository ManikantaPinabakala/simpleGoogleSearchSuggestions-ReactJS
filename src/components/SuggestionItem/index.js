import {Component} from 'react'
import './index.css'

class SuggestionItem extends Component {
  render() {
    const {suggestionDetails, onArrowClick} = this.props
    const {suggestion, id} = suggestionDetails
    const onArrow = () => {
      onArrowClick(id)
    }

    return (
      <li className="suggestion-item">
        <p className="suggestion">{suggestion}</p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow"
          onClick={onArrow}
        />
      </li>
    )
  }
}

export default SuggestionItem
