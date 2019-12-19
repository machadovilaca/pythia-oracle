import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { IconContext } from "react-icons";
import { AiOutlineReload } from "react-icons/ai";
import moment from "moment";
import SliderPure from "rc-slider";
import {Dropdown} from "semantic-ui-react";

import "./bar.css"
import "rc-slider/assets/index.css";

const createSliderWithTooltip = SliderPure.createSliderWithTooltip;
const Slider = createSliderWithTooltip(SliderPure);

class Settings extends React.Component {
  render() {
    return (
        <Navbar bg="dark" variant="dark">
          {
            this.props.changeUnit !== undefined ?
              <Nav variant="pills" defaultActiveKey="link-1">
                <Nav.Item>
                  <Nav.Link onSelect={this.props.changeUnit.bind(this, "minutely")} eventKey="link-1">Minutely</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link onSelect={this.props.changeUnit.bind(this, "hourly")} eventKey="link-2">Hourly</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link onSelect={this.props.changeUnit.bind(this, "daily")} eventKey="link-3">Daily</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link onSelect={this.props.changeUnit.bind(this, "monthly")} eventKey="link-4">Monthly</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link onSelect={this.props.changeUnit.bind(this, "yearly")} eventKey="link-5">Yearly</Nav.Link>
                </Nav.Item>
              </Nav> :
              <div/>
          }
          {
            this.props.changeKeys !== undefined && this.props.dropdown_options !== undefined ?
              <Dropdown onChange={this.props.changeKeys} placeholder='Options' fluid multiple search selection options={this.props.dropdown_options}/> :
              <div/>
          }
          {
            this.props.changeQuantity !== undefined ?
              <Nav className="pl-lg-5">
                <div style={{color:"rgba(153, 156, 159, 3)"}}>
                  Quantity
                </div>
                <div className="pl-3 pt-1" style={{width: "200px"}}>
                  <Slider onAfterChange={this.props.changeQuantity.bind(this)} min={1} max={12}/>
                </div>
              </Nav> :
              <div/>
          }

          <Navbar.Collapse className="justify-content-end" >
            <Nav className="nav-item-style">
              <div onClick={this.props.getData.bind(this)}>
                <Nav>
                  <IconContext.Provider value={{ color: "gray", size: "30px" }}>
                    <AiOutlineReload />
                  </IconContext.Provider>
                </Nav>
              </div>

              <Nav>
                <p className={"text"}>Last updated at: {moment(this.props.lastUpdate).format('HH:mm:ss')}</p>
              </Nav>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    );
  }
}

export default Settings;
