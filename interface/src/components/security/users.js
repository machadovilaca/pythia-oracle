import React from "react";
import {getCurrentUsers, getUsersHistory} from "../../state/users";
import Settings from "../navbar/settings";
import Table from "react-bootstrap/Table";
import {Spinner} from "react-bootstrap";

const keys = ["USERNAME", "USER_ID", "ACCOUNT_STATUS", "LOCK_DATE", "EXPIRY_DATE", "DEFAULT_TABLESPACE", "TEMPORARY_TABLESPACE", "LOCAL_TEMP_TABLESPACE", "CREATED", "PROFILE", "AUTHENTICATION_TYPE", "COMMON", "LAST_LOGIN", "ORACLE_MAINTAINED", "DEFAULT_COLLATION"];

class Users extends React.Component {
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
    getCurrentUsers().then((r) => {
      this.setState({
        current: r.data.rows,
      });
    });

    getUsersHistory(this.state.unit, this.state.quantity).then((r) => {
      this.setState({
        history: r.data.rows,
      })
    });
  }

  getData = async () => {
    const c = await getCurrentUsers();
    const h = await getUsersHistory(this.state.unit, this.state.quantity);

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

export default Users;
