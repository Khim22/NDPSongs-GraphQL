import React, { Component } from "react";
import { getSingersQuery, addSingerMutation } from "../../queries/queries";
import { graphql, compose, withApollo } from "react-apollo";

export class AddSinger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: ""
    };
  }

  submitForm(e) {
    e.preventDefault();

    this.props.addSingerMutation({
      variables: {
        name: this.state.name,
        age: parseInt(this.state.age)
      },
      refetchQueries: [{ query: getSingersQuery }]
    });
  }
  render() {
    return (
      <form id="add-singer" onSubmit={this.submitForm.bind(this)}>
        <h2>Add Singer</h2>
        <div>
          <label>Singer Name</label>
          <input
            type="text"
            onChange={e => this.setState({ name: e.target.value })}
          />
        </div>
        <div>
          <label>Singer Age</label>
          <input
            type="text"
            style={{
              border: "1px",
              borderRadius: "3px",
              margin: "5px",
              padding: "5px"
            }}
            onChange={e => this.setState({ age: e.target.value })}
          />
        </div>
        {/* {this.displayProps()} */}
        <button
          type="submit"
          style={{
            background: "#CF3A24",
            borderRadius: "3px",
            border: "1px",
            color: "white",
            padding: "10px"
          }}
        >
          Add Singer
        </button>
      </form>
    );
  }
}

export default compose(
  graphql(addSingerMutation, { name: "addSingerMutation" }),
  withApollo
)(AddSinger);
