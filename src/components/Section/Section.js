import React, { Component } from "react";
import shortid from "shortid";
import Button from "../Button/Button";
import SmallForm from "../SmallForm/SmallForm";
//import Title from "../Title/Title";

export default class Section extends Component {
  static defaultProps = {
    initShowMenu: false,
    initCities: [],
  };

  state = {
    showMenu: this.props.initShowMenu,
    cities: this.props.initCities,
  };

  addCities = (city) => {
    console.log(city.value);

    const newCity = {
      id: shortid.generate(),
      value: city.value,
    };

    this.setState(({ cities }) => ({
      cities: [newCity, ...cities],
    }));
  };

  handleShow = (e) => {
    e.preventDefault();

    this.setState({
      showMenu: true,
    });
  };

  handleRemove = (e) => {
    this.setState({
      cities: this.state.cities.filter(
        (city) => city.value !== e.target.previousSibling.nodeValue
      ),
    });
  };

  render() {
    const { cities, showMenu } = this.state;
    return (
      <>
        {cities.length ? (
          <ul>
            {cities.map((city) => (
              <li key={shortid.generate()}>
                {city.value}
                <Button
                  onSubmit={this.handleRemove}
                  nameButton={"Удалить город"}
                />
              </li>
            ))}
          </ul>
        ) : null}
        {showMenu && <SmallForm onSubmit={this.addCities} />}
        <Button onSubmit={this.handleShow} nameButton={"Добавить город"} />
      </>
    );
  }
}
