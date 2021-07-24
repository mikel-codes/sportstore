import React, { Component } from "react";

import { GetMessages } from "./ValidationMessages";
import { ValidationError } from "./validationError";
export default class ValidatedForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      validationErrors: {}
    };
    this.formElements = {};
  }
  handleSubmit = () => {
    this.setState(
      state => {
        const newState = { ...state, validationErrors: {} };
        Object.values(this.formElements).forEach(el => {
          if (!el.checkValidity()) {
            newState.validationErrors[el.name] = GetMessages(el);
          }
        });
        return newState;
      },
      () => {
        if (Object.keys(this.state.validationErrors).length === 0) {
          const data = Object.assign(
            ...Object.entries(this.formElements).map(e => ({
              [e[0]]: e[1].value
            }))
          );
          this.props.submitCallback(data);
        }
      }
    );
  };

  registerRef = element => {
    if (element !== null) {
      this.formElements[element.name] = element;
    }
  };

  renderElement = modelItem => {
    const name = modelItem.name || modelItem.label.toLowerCase();
    return (
      <div className="ui two field" key={modelItem}>
        <label>{modelItem.label}</label>
        <ValidationError errors={this.state.validationErrors[name]} />
        <input
          className="ui input"
          name={name}
          ref={this.registerRef}
          {...this.props.defaultAttrs}
          {...modelItem.attrs}
        />
      </div>
    );
  };
  render() {
    const {
      submitText,
      formModel,
      cancelCallback,
      cancelText,
      submitCallback
    } = this.props;
    return (
      <React.Fragment>
        {this.props.formModel.map(m => this.renderElement(m))}
        <div className="right floated">
          <button
            className="ui primary button"
            onClick={this.props.cancelCallback}
          >
            {this.props.cancelText || "cancel"}
          </button>
        </div>
        <div className="left floated">
          <button className="ui positive button" onClick={this.handleSubmit}>
            {this.props.submitText || "submit"}
          </button>
        </div>
      </React.Fragment>
    );
  }
}
