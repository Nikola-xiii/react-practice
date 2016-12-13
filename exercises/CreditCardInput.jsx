import React from 'react';

class CreditCardInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {number: ''}
  }

  process(number) {
    return { text: '', type: ''}
  }

  render() {
    let { text: text, type: type} = this.process(this.state.number);

    return (
      <div>
        <input type="text" value={text}/>
        <input type="text" value={type}/>
      </div>
    )
  }
}

export default CreditCardInput;
