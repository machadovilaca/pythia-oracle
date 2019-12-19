import React from "react";
import "./index.css";

class Box extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: props.value, name: props.name };
  }

  componentDidUpdate(prevProps, prevState, prevContext){
    if(prevState.value !== this.props.value) {
      this.setState({ value: this.props.value });
    }
  }

  render() {
    return (
      <div className="box">
        <div className="box__body">
          <div className="stats stats--main">
            <div className="stats__amount">{this.state.value}</div>
            <div className="stats__caption">{this.state.name}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Box;
