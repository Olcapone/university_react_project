import React from "react";
import Button from "../Button/Button";

export default class SmallForm extends React.Component {
  static defaultProps = {
    initValue: "",
  };

  state = {
    value: this.initValue,
  };

  handleSave = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ value: "" });
  };

  render() {
    const { value } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <p>Добавление города</p>
        <input type="text" value={value} onChange={this.handleSave} />
        <Button type="submit" nameButton={"Добавить"} />
      </form>
    );
  }
}
