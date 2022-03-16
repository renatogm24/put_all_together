import { Component } from "react";
import "./card.css";

class PersonCard extends Component {
  constructor(props) {
    super(props);
    this.state = { age: props.age };
  }

  render() {
    const { name, hairColor } = this.props;
    return (
      <div>
        <div className="cardBx">
          <div className="title">{name}</div>
          <div className="property">Age: {this.state.age}</div>
          <div className="property">Hair Color: {hairColor}</div>
          <button onClick={() => this.setState({ age: this.state.age + 1 })}>
            Birthday Button for {name}
          </button>
        </div>
      </div>
    );
  }
}

export default PersonCard;
