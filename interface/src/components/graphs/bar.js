import React from "react";
import { Bar } from "react-chartjs-2";
import { options } from "./index"

class BarChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = { datasets: props.datasets, dates: props.dates };
  }

  componentDidUpdate(prevProps, prevState, prevContext){
    if(prevState.datasets !== this.props.datasets) {
      this.setState({ datasets: this.props.datasets });
    }

    if(prevState.dates !== this.props.dates) {
      this.setState({ dates: this.props.dates });
    }
  }

  render() {
    const data = {
      labels: this.state.dates,
      datasets: this.state.datasets
    };

    return (
      <Bar options={options} data={data} />
    );
  }
}

export default BarChart;
