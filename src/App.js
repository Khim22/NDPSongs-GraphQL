import React, { Component } from "react";
import ApolloClient, { InMemoryCache } from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import Main from "./components/pages/Main";
import SingerListAdmin from "./components/views/SingerListAdmin";
import SongDetailsAdmin from "./components/views/SongDetailsAdmin";

const dotenv = require("dotenv");
dotenv.config();

const client = new ApolloClient({
  uri: process.env.REACT_APP_DB_URL,
  cache: new InMemoryCache({
    dataIdFromObject: o => (o._id ? `${o.__typename}:${o._id}` : null)
  })
});

const Admin = props => (
  <div>
    <Switch>
      <Route path={`${props.match.path}/songs`} component={SongDetailsAdmin} />

      <Route path={`${props.match.path}/singers`} component={SingerListAdmin} />
    </Switch>
  </div>
);

class App extends Component {
  state = {
    selected: ""
  };

  setSelected = item => {
    this.setState({ selected: item });
  };

  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <Route exact path="/" component={Main} />
          <Route path="/admin" component={Admin} />
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
