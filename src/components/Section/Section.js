import React from "react";
import Button from "../Button/Button";

export default class Section extends React.Component {
  static defaultProps = {
    initShowMenu: false,
  };

  state = {
    showMenu: this.initShowMenu,
  };

  handleShow = (e) => {
    e.preventDefault();

    this.setState({
      showMenu: true,
    });
  };

  render() {
    return (
      <>
        {this.state.showMenu && <p>Форма для добавления города</p>}
        <Button onSubmit={this.handleShow} nameButton={"Добавить город"} />
      </>
    );
  }
}
