import React, { Component } from 'react'

class QuizEnd extends Component {
  handleResetClick() {
    this.props.resetClickHandler()
  }
  render() {
    return (
      <div>
        <p>Thanks for playing!</p>
        <hr />
        <i class="fas fa-award"></i>
        <br/>
        <i class="fas fa-sync reset-quiz" onClick={this.handleResetClick.bind(this)}></i> Reset Quiz
      </div>
    )
  }
}

export default QuizEnd
