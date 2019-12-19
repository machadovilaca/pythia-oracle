import React from "react";
import { Doughnut } from "react-chartjs-2";
import { options } from "./index"

class DoughnutChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: props.data, labels: props.labels };
  }

  componentDidUpdate(prevProps, prevState, prevContext){
    if(prevState.data !== this.props.data) {
      this.setState({ data: this.props.data });
    }

    if(prevState.labels !== this.props.labels) {
      this.setState({ labels: this.props.labels });
    }
  }

  render() {
    const data = {
      datasets: [{
        data: this.state.data,
        backgroundColor: ["#963e41", "#226cae"]
      }],
      labels: this.state.labels
    };

    return (
      <Doughnut options={options} data={data} />
    );
  }
}

export default DoughnutChart;
