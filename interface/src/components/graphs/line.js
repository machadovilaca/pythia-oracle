import React from "react";
import { Line } from "react-chartjs-2";
import { options } from "./index"

class LineChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dates: props.dates, name: props.name, values: props.values };
  }

  componentDidUpdate(prevProps, prevState, prevContext){
    if(prevState.dates !== this.props.dates) {
      this.setState({ dates: this.props.dates });
    }

    if(prevState.name !== this.props.name) {
      this.setState({ name: this.props.name });
    }

    if(prevState.values !== this.props.values) {
      this.setState({ values: this.props.values });
    }
  }

  render() {
    const data = {
      labels: this.state.dates,
      datasets: [{
        label: this.state.name,
        data: this.state.values,
        borderColor: "rgba(255, 67, 92, 0.7)"
      }]
    };

    return (
      <Line options={options} data={data} />
    );
  }
}

export default LineChart;
