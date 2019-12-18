import React from "react";
import { getCurrentDatafiles, getDatafilesHistory } from "../../state/datafiles";
import Settings from "../navbar/settings";
import { Spinner } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import BarChart from "../graphs/bar";

const keys = ["FILE_NAME", "FILE_ID", "TABLESPACE_NAME", "BYTES", "BLOCKS", "STATUS", "RELATIVE_FNO", "AUTOEXTENSIBLE", "MAXBYTES", "MAXBLOCKS", "INCREMENT_BY", "USER_BYTES", "USER_BLOCKS", "ONLINE_STATUS", "LOST_WRITE_PROTECT"];

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#28';
  for (let i = 0; i < 4; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

class Datafiles extends React.Component {
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
    getCurrentDatafiles().then((r) => {
      this.setState({
        current: r.data.rows,
      });
    });

    getDatafilesHistory(this.state.unit, this.state.quantity).then((r) => {
      this.setState({
        history: r.data.rows,
      })
    });
  }

  getData = async () => {
    const c = await getCurrentDatafiles();
    const h = await getDatafilesHistory(this.state.unit, this.state.quantity);

    const s =  {
      date: new Date(),
      current: c.data.rows,
      history: h.data.rows
    };

    this.setState(s);
  };

  changeQuantity = async (quantity) => {
    this.setState({quantity: quantity});
    this.getData();
  };

  render() {
    let dates = [];
    let names = [];
    let datasets = [];

    if(this.state.current !== null && this.state.history !== null) {
      dates = new Set();
      names = new Set();
      this.state.history.forEach((l) => {
        dates.add(l.QUERY_DATE);
        names.add(l.FILE_NAME);
      });

      names.forEach(name => {
        const data = [];
        this.state.history.forEach(h => {
          if (name === h.FILE_NAME) {
            data.push(h.AVG_BYTES);
          }
        });
        datasets.push({
          label: name,
          data: data,
          backgroundColor: getRandomColor()
        });
      });
    }

    return (
      <div>
        {
          this.state.current !== null && this.state.history !== null ?
            <div>
              <Settings
                lastUpdate={this.state.date} getData={this.getData}
                quantity={this.state.quantity} changeQuantity={this.changeQuantity}
              />
              <div className="p-lg-5">
                <Table striped bordered hover style={{fontSize: 10}}>
                  <thead>
                  <tr>
                    { keys.map((key, i) => <th key={i}>{key}</th>) }
                  </tr>
                  </thead>
                  <tbody>
                  {this.state.current.map((v, i) =>
                    <tr key={i}>
                      { keys.map((key, i) => <td key={i}>{v[key]}</td>) }
                    </tr>
                  )}
                  </tbody>
                </Table>
                <div className="pt-5">
                  <h2>Average Size in Bytes</h2>
                  <BarChart dates={Array.from(dates)} datasets={datasets} />
                </div>
              </div>
            </div> :
            <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
        }
      </div>
    );
  }
}

export default Datafiles;
