import React from "react";
import {getCurrentMemory, getMemoryHistory} from "../../state/memory";
import Settings from "../navbar/settings";
import Grid from "../grid";
import {Spinner} from "react-bootstrap";
import AreaChart from "../graphs/area";
import Box from "../graphs/box";

class Memory extends React.Component {
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
    getCurrentMemory().then((r) => {
      this.setState({
        current: r.data.rows,
      });
    });

    getMemoryHistory(this.state.unit, this.state.quantity).then((r) => {
      this.setState({
        history: r.data.rows,
      })
    });
  }

  getData = async () => {
    const c = await getCurrentMemory();
    const h = await getMemoryHistory(this.state.unit, this.state.quantity);

    const s =  {
      date: new Date(),
      current: c.data.rows,
      history: h.data.rows
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
      <div key={"mem_a"} style={{"border": "1px solid"}}>
        <Box name={"Memory Used / Total Memory"} value={"700.222648620605 / 1280"} />
      </div>,
      <div key={"mem_h"} style={{"border": "1px solid"}}>
        <AreaChart
          dates={state.history.map((l) => {return l["QUERY_DATE"]})}
          total={state.history.map((l) => {return l["AVERAGE TOTAL (MB)"]})}
          used={state.history.map((l) => {return l["AVERAGE USED (MB)"]})}
        />
      </div>
    ]);
  };

  layout = [
    {i: "mem_a", x: 3, y: 0, w: 6, h: 1},
    {i: "mem_h", x: 3, y: 0, w: 6, h: 3}
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

export default Memory;
