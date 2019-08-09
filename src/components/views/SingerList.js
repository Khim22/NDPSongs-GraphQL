import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getSingersQuery } from "../../queries/queries";

class SingerList extends Component {
  displaySingers() {
    let data = this.props.data;
    if (data.loading) {
      return <tr><td>Loading Singers</td></tr>;
    } else if (data.singers){
    
      return data.singers.map(singer => 
        <tr key = {singer.id} className="paperRow">
          <td>{singer.name}</td>
          <td> {singer.id}</td>
        </tr>
      );
    }
    else{
      return <tr><td>Server Disconnected</td></tr>;
    }
  }
  render() {
    return (
      <div className="paperR">
        <h1>Singers List</h1>
        <table>
          <tbody>
            <tr className="paperRow">
              <td>Singer Name </td>
              <td>Singer Id </td>
            </tr>
            {this.displaySingers()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default graphql(getSingersQuery)(SingerList);
