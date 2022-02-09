import React from "react";

class Card extends React.Component {
  state = {
    name: "default card",
    value: "",
    inputDisable: false,
  };
  componentWillMount() {
    console.log("componentWillMount");
  }
  componentDidMount() {
    console.log("componentDidMount");
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate", prevState, this.state);
    if (this.state.value.length > 9 && prevState.value.length === 9) {
      console.log("set input disable");
      this.setState({ inputDisable: true });
    }
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  changeName = () => {
    // this.state.name = "updated"; // No
    this.setState({ name: "updated" });
  };
  onChangeHandler = (e) => {
    console.log(e.target.value);
    this.setState({ value: e.target.value });
  };

  render() {
    const { colorFromParent, callbackFunction } = this.props;
    const { name, inputDisable, value } = this.state;
    console.log("render");
    return (
      <React.Fragment>
        <div>{this.state.name}</div>
        <div>Card component {colorFromParent} </div>
        <button onClick={callbackFunction}>Button</button>
        <button onClick={this.changeName}>Change name</button>
        <input
          onChange={this.onChangeHandler}
          disabled={this.state.inputDisable}
          value={this.state.value}
        />
      </React.Fragment>
    );
  }
}

export default Card;
