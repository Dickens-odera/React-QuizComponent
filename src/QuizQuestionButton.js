import React, { Component } from 'react'

class QuizQuestionButton extends Component {
  render() {
    return (
      <ul><li><button>{this.props.button_text}</button></li></ul>
    )
  }
}

export default QuizQuestionButton
