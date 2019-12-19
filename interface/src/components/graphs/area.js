import React from "react";
import { Line } from "react-chartjs-2";
import { options } from "./index"

class AreaChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = { used: props.used, total: props.total, dates: props.dates };
  }

  componentDidUpdate(prevProps, prevState, prevContext){
    if(prevState.used !== this.props.used) {
      this.setState({ used: this.props.used });
    }

    if(prevState.total !== this.props.total) {
      this.setState({ total: this.props.total });
    }

    if(prevState.dates !== this.props.dates) {
      this.setState({ dates: this.props.dates });
    }
  }

  render() {
    const data = {
      labels: this.state.dates,
      datasets: [
        {
          label: "Total used",
          data: this.state.used,
          backgroundColor: "rgba(255, 67, 92, 0.7)",
        },
        {
          label: "Total available",
          data: this.state.total,
          backgroundColor: "rgba(45, 108, 255, 0.7)",
        }
      ]
    };

    return (
      <Line options={options} data={data} />
    );
  }
}

export default AreaChart;
