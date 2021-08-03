import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {
    lettersCount: '',
  }

  getUserInput = event => {
    this.setState({lettersCount: event.target.value})
  }

  render() {
    const {lettersCount} = this.state

    return (
      <div className="app-container">
        <div className="calculator-container">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <label className="input-text" htmlFor="phraseText">
            Enter the phrase
          </label>
          <input
            type="text"
            id="phraseText"
            className="input-bar"
            placeholder="Enter the phrase"
            onChange={this.getUserInput}
          />
          <p className="letter-count">No.of letters: {lettersCount.length}</p>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="calculator"
          className="calculator-image"
        />
      </div>
    )
  }
}

export default LettersCalculator
