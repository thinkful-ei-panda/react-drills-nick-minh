import React from 'react';

class Accordion extends React.Component {

  static defaultProps = {sections : []};

  state = {
    currentSectionIndex : 0
  }

  handleButtonClick(index) {
    this.setState(
      {
        currentSectionIndex : index
      }
    )
  }

  renderContent() {
    let currentSection = this.props.sections[this.state.currentSectionIndex];
    return (
      <p className="content">{currentSection.content}</p>
    )
  }

  renderButtons() {
    return this.props.sections.map( (section,index) => (
      <li>
        <button key={index} onClick={() => this.handleButtonClick(index)}>{section.title}</button>
        {index===this.state.currentSectionIndex && this.renderContent()}
      </li>      
    ))
  }

  render() {
    return (
      <ul>
        {this.renderButtons()}
      </ul>
    )
  }


}

export default Accordion;