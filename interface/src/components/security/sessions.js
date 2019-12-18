import React from "react";
import { getCurrentSessions, getSessionsHistory } from "../../state/sessions";
import Settings from "../navbar/settings";
import Table from "react-bootstrap/Table";
import { Spinner } from "react-bootstrap";

const allKeys = ["SID", "SERIAL#", "AUDSID", "USER#", "USERNAME", "COMMAND", "OWNERID", "TADDR", "LOCKWAIT", "STATUS", "SERVER", "SCHEMA#", "SCHEMANAME", "OSUSER", "PROCESS", "MACHINE", "PORT", "TERMINAL", "PROGRAM", "TYPE", "SQL_HASH_VALUE", "SQL_ID", "SQL_CHILD_NUMBER", "SQL_EXEC_START", "SQL_EXEC_ID", "PREV_HASH_VALUE", "PREV_SQL_ID", "PREV_CHILD_NUMBER", "PREV_EXEC_START", "PREV_EXEC_ID", "PLSQL_ENTRY_OBJECT_ID", "PLSQL_ENTRY_SUBPROGRAM_ID", "PLSQL_OBJECT_ID", "PLSQL_SUBPROGRAM_ID", "MODULE", "MODULE_HASH", "ACTION", "ACTION_HASH", "CLIENT_INFO", "FIXED_TABLE_SEQUENCE", "ROW_WAIT_OBJ#", "ROW_WAIT_FILE#", "ROW_WAIT_BLOCK#", "ROW_WAIT_ROW#", "TOP_LEVEL_CALL#", "LOGON_TIME", "LAST_CALL_ET", "PDML_ENABLED", "FAILOVER_TYPE", "FAILOVER_METHOD", "FAILED_OVER", "RESOURCE_CONSUMER_GROUP", "PDML_STATUS", "PDDL_STATUS", "PQ_STATUS", "CURRENT_QUEUE_DURATION", "CLIENT_IDENTIFIER", "BLOCKING_SESSION_STATUS", "BLOCKING_INSTANCE", "BLOCKING_SESSION", "FINAL_BLOCKING_SESSION_STATUS", "FINAL_BLOCKING_INSTANCE", "FINAL_BLOCKING_SESSION", "SEQ#", "EVENT#", "EVENT", "WAIT_CLASS_ID", "WAIT_CLASS#", "WAIT_CLASS", "WAIT_TIME", "SECONDS_IN_WAIT", "STATE", "WAIT_TIME_MICRO", "TIME_REMAINING_MICRO", "TIME_SINCE_LAST_WAIT_MICRO", "SERVICE_NAME", "SQL_TRACE", "SQL_TRACE_WAITS", "SQL_TRACE_BINDS", "SQL_TRACE_PLAN_STATS", "SESSION_EDITION_ID", "CREATOR_SERIAL#", "ECID", "SQL_TRANSLATION_PROFILE_ID", "PGA_TUNABLE_MEM", "SHARD_DDL_STATUS", "CON_ID", "EXTERNAL_NAME", "PLSQL_DEBUGGER_CONNECTED"];
const initialKeys = ["SID", "SERIAL#", "USERNAME", "OWNERID", "STATUS", "SERVER", "SCHEMANAME", "OSUSER", "PROCESS", "MACHINE", "PORT", "TERMINAL", "PROGRAM", "TYPE"];

const options = [];
allKeys.forEach(k => options.push({ key: k, text: k, value: k }));

class Sessions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      unit: "minutely",
      quantity: 7,
      date: new Date(),
      current: null,
      history: null,
      currentKeys: initialKeys
    };
  }

  componentDidMount() {
    getCurrentSessions().then((r) => {
      this.setState({
        current: r.data.rows,
      });
    });

    getSessionsHistory(this.state.unit, this.state.quantity).then((r) => {
      this.setState({
        history: r.data.rows,
      })
    });
  }

  getData = async () => {
    const c = await getCurrentSessions();
    const h = await getSessionsHistory(this.state.unit, this.state.quantity);

    const s =  {
      date: new Date(),
      current: c.data.rows,
      history: h.data.rows
    };

    this.setState(s);
  };

  changeKeys = (vs, { value }) => {
    if(value.length === 0) {
      this.setState({currentKeys: initialKeys});
    } else {
      this.setState({currentKeys: value});
    }
  };

  render() {
    return (
      <div>
        {
          this.state.current !== null && this.state.history !== null ?
            <div>
              <Settings
                lastUpdate={this.state.date} getData={this.getData}
                changeKeys={this.changeKeys} dropdown_options={options}
              />
              <div className="p-lg-5">
                <Table striped bordered hover style={{fontSize: 10}}>
                  <thead>
                  <tr>
                    { this.state.currentKeys.map((key, i) => <th key={i}>{key}</th>) }
                  </tr>
                  </thead>
                  <tbody>
                  {this.state.current.map((v, i) =>
                    <tr key={i}>
                      { this.state.currentKeys.map((key, i) => <td key={i}>{v[key]}</td>) }
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

export default Sessions;
