import React, { Component } from "react";
import Tabs from "./Tab/Tabs";
/*
const tabData = [
  {
    name: "B1-Tab",
    isActive: true
  },
  {
    name: "B2-Tab",
    isActive: true
  }
];

const Tab = (props) => {
  return (
    <li onClick={this.props.handleClick} className={this.props.isActive ? "active" : null}>
      <a href="/">{this.this.props.data.name}</a>
    </li>
  );
};

const Tabs = (props) => {
  return (
    <nav>
      <ul className="nav nav-tabs">
        {tabData.map(function(tab) {
          return (
            <Tab
              data={tab}
              isActive={this.props.activeTab === tabData[0]}
              handleClick={this.props.changeTab.bind(this, tab)}
            />
          );
        })}
      </ul>
    </nav>
  );
};
*/

class Fragments extends Component {
  /*
  state = {
    activeTab: tabData[0]
  };

  handleClick(tab) {
    this.setState({
      activeTab: tab
    });
  }
  */

  state = {
    name: "Honey-badger"
  };

  render() {
    return (
      <div>
        <h3 className="heading">Content from Service B</h3>
        <div className="row">
          <div className="col-md-12">
            <Tabs>
              <div label="B1-Tab">
                <p className="heading">Hi</p>
                <p className="name-tag">{this.state.name}</p>
                <p>this service B-1 calling your name</p>
              </div>
              <div label="B2-Tab">
                <p className="heading">Hi</p>
                <p className="name-tag">{this.state.name}</p>
                <p>this service B-2 calling your name</p>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    );
  }
}

export default Fragments;
