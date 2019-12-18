import React from "react";
import { getCurrentTablespaces, getTablespacesHistory } from "../../state/tablespaces";
import Settings from "../navbar/settings";
import { Spinner } from "react-bootstrap";
import Table from "react-bootstrap/Table";

const keys = ["TABLESPACE_NAME", "BLOCK_SIZE", "INITIAL_EXTENT", "NEXT_EXTENT", "MIN_EXTENTS", "MAX_EXTENTS", "MAX_SIZE", "PCT_INCREASE", "MIN_EXTLEN", "STATUS", "CONTENTS", "LOGGING", "FORCE_LOGGING", "EXTENT_MANAGEMENT", "ALLOCATION_TYPE", "PLUGGED_IN", "SEGMENT_SPACE_MANAGEMENT"];

class Tablespaces extends React.Component {
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
    getCurrentTablespaces().then((r) => {
      this.setState({
        current: r.data.rows,
      });
    });

    getTablespacesHistory(this.state.unit, this.state.quantity).then((r) => {
      this.setState({
        history: r.data.rows,
      })
    });
  }

  getData = async () => {
    const c = await getCurrentTablespaces();
    const h = await getTablespacesHistory(this.state.unit, this.state.quantity);

    const s =  {
      date: new Date(),
      current: c.data.rows,
      history: h.data.rows
    };

    this.setState(s);
  };

  render() {
    return (
      <div>
        {
          this.state.current !== null && this.state.history !== null ?
            <div>
              <Settings
                lastUpdate={this.state.date} getData={this.getData}
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

export default Tablespaces;
