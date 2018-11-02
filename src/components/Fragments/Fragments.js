import React, { Component } from "react";
import Tabs from "../Tab/Tabs";
import TabContent from "../Fragments/TabContent"

class Fragments extends Component {
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
                <TabContent serviceName="B-1" name={this.state.name}/>
              </div>
              <div label="B2-Tab">
                <TabContent serviceName="B-2" name={this.state.name}/>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    );
  }
}

export default Fragments;
