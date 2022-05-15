

import React from 'react';

 export default class AddOption extends React.Component {

  state = {
    error : undefined
  }
  addOption = (e) => {
    e.preventDefault();
    const option = e.target.option.value.trim();
    const error = this.props.addOption(option);
    this.setState(() => ({ error: error }));

    if (!error) {
      e.target.option.value = "";
    }
  }


  
    render() {
      return (
        <div>
          <div>{this.state.error && <p className='add-option-error'>{this.state.error}</p>}</div>
          <form className='add-option' onSubmit={this.addOption}>
            <input className='add-option__input' type="text" name="option" />
            <button className='button'>Add Option</button>
          </form>
        </div>
      );
    }
  }

