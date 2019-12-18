import React from "react";
import RGL, { WidthProvider } from "react-grid-layout";

import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

const ReactGridLayout = WidthProvider(RGL);

class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: this.props.date, layout: props.layout, divs: props.divs };
  }

  componentDidUpdate(prevProps, prevState, prevContext){
    if(prevState.date !== this.props.date) {
       this.setState({ date: this.props.date, layout: this.props.layout, divs: this.props.divs });
    }
  }

  render() {
    return (
      <ReactGridLayout layout={this.state.layout}>
        {this.state.divs}
      </ReactGridLayout>
    );
  }
}

export default Grid;
