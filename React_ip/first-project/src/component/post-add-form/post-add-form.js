import React, { Component } from 'react';
import './post-add-form.css';

export default class PostAddForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
    };

    this.onInputValue = this.onInputValue.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onInputValue(e) {
    this.setState(({ text }) => {
      return {
        text: e.target.value,
      };
    });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.onAdd(this.state.text);
    this.setState(({ text }) => {
      return {
        text: '',
      };
    });
  }

  render() {
    return (
      <form className="bottom-panel d-flex" onSubmit={this.onSubmit}>
        <input
          type="text"
          placeholder="О чем вы думаете сейчас"
          className="form-control new-post-label"
          onChange={this.onInputValue}
          value={this.state.text}
        />
        <button className="btn btn-outline-secondary" type="submit">
          Добавить
        </button>
      </form>
    );
  }
}
