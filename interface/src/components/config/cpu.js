import React from "react";
import Grid from "../grid";
import { getCurrentCpu, getCpuHistory } from "../../state/cpu";
import Box from "../graphs/box";
import DoughnutChart from "../graphs/doughnut";
import LineChart from "../graphs/line";
import Settings from "../navbar/settings"
import { Spinner } from "react-bootstrap";


class Cpu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      unit: "minutely",
      quantity: 7,
      date: new Date(),
      current: null,
      history: null
    };
  }

  componentDidMount() {
    getCurrentCpu().then((r) => {
      this.setState({
        current: r.data.rows,
      });
    });

    getCpuHistory(this.state.unit, this.state.quantity).then((r) => {
      this.setState({
        history: r.data.rows.filter((v) => { return v.STAT_NAME === "LOAD" }).reverse(),
      })
    });
  }

  getData = async () => {
    const c = await getCurrentCpu();
    const h = await getCpuHistory(this.state.unit, this.state.quantity);

    const s =  {
      date: new Date(),
      current: c.data.rows,
      history: h.data.rows.filter((v) => { return v.STAT_NAME === "LOAD" }).reverse()
    };

    this.setState(s);
  };

  changeUnit = async (unit) => {
    this.setState({unit: unit});
    this.getData();
  };

  changeQuantity = async (quantity) => {
    this.setState({quantity: quantity});
    this.getData();
  };

  createDivs = (state) => {
    return ([
      <div key={"num"} style={{"border": "1px solid"}}>
        <Box name={state.current[0].STAT_NAME} value={state.current[0].VALUE} />
      </div>,
      <div key={"cores"} style={{"border": "1px solid"}}>
        <Box name={state.current[9].STAT_NAME} value={state.current[9].VALUE} />
      </div>,
      <div key={"mem"} style={{"border": "1px solid"}}>
        <Box name={state.current[11].STAT_NAME} value={state.current[11].VALUE} />
      </div>,
      <div key={"cpu"} style={{"border": "1px solid"}}>
        <DoughnutChart
          labels={[
            state.current[8].STAT_NAME,
            "FREE"
          ]}
          data={[
            state.current[8].VALUE,
            1 - state.current[8].VALUE
          ]}
        />
      </div>,
      <div key={"idle"} style={{"border": "1px solid"}}>
        <DoughnutChart
          labels={[
            state.current[1].STAT_NAME,
            state.current[2].STAT_NAME
          ]}
          data={[
            state.current[1].VALUE,
            state.current[2].VALUE
          ]}
        />
      </div>,
      <div key={"time_share"} style={{"border": "1px solid"}}>
        <DoughnutChart
          labels={[
            state.current[3].STAT_NAME,
            state.current[4].STAT_NAME
          ]}
          data={[
            state.current[3].VALUE,
            state.current[4].VALUE
          ]}
        />
      </div>,
      <div key={"mem_free"} style={{"border": "1px solid"}}>
        <DoughnutChart
          labels={[
            state.current[14].STAT_NAME,
            state.current[15].STAT_NAME
          ]}
          data={[
            state.current[14].VALUE,
            state.current[15].VALUE
          ]}
        />
      </div>,
      <div key={"load_h"} style={{"border": "1px solid"}}>
        <LineChart
          name="CPU usage"
          dates={state.history.map((v) => v.QUERY_DATE)}
          values={state.history.map((v) => v.AVG_VALUE)}
        />
      </div>
    ]);
  };

  layout = [
    {i: "num",        x: 0, y: 0, w: 3, h: 1},
    {i: "mem",        x: 0, y: 2, w: 3, h: 1},
    {i: "cores",      x: 3, y: 0, w: 3, h: 1},
    {i: "cpu",        x: 0, y: 1, w: 2, h: 1},
    {i: "idle",       x: 2, y: 1, w: 2, h: 1},
    {i: "time_share", x: 4, y: 1, w: 2, h: 1},
    {i: "mem_free",   x: 3, y: 2, w: 3, h: 1},
    {i: "load_h",     x: 6, y: 0, w: 6, h: 3}
  ];

  render() {
    return (
      <div>
        {
          this.state.current !== null && this.state.history !== null ?
            <div>
              <Settings
                lastUpdate={this.state.date} getData={this.getData}
                changeUnit={this.changeUnit} quantity={this.state.quantity} changeQuantity={this.changeQuantity}
              />
              <Grid layout={this.layout} divs={this.createDivs(this.state)} date={this.state.date}/>
            </div> :
            <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
        }
      </div>
    );
  }
}

export default Cpu;
