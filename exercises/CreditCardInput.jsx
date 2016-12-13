import React from 'react';

class CreditCardInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {number: ''};
    this.handleChange = this.handleChange.bind(this);
    this.checkType = this.checkType.bind(this);
  }

  process(number) {
    let type = this.checkType(number);
    let text = this.insertSpaces(number);
    text = text.trim();
    return { text: text, type: type}
  }

  insertSpaces(text) {
    return text.replace(/(.{4})/g, '$1 ')
  }

  checkType(text) {
    let types = this.props.types;
    for(var type in types) {
      if(text.match(types[type])) {
        return type;
      }
    }
    return '';
  }

  handleChange(e) {
    let newValue = e.target.value;
    let newNumber = this.filterWhitespace(newValue);
    this.setState({number: newNumber});
  }

  filterWhitespace(text) {
    return text.replace(/\s/g, '');
  }

  render() {
    let { text: text, type: type} = this.process(this.state.number);

    return (
      <div>
        <input type="text" onChange={this.handleChange} value={text}/>
        <input type="text" value={type}/>
      </div>
    )
  }
}

export default CreditCardInput;
