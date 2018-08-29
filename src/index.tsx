import React from "react";
import { ApolloProvider } from "react-apollo";
import ReactDOM from "react-dom";
import client from "./Apollo";
import App from "./App";


ReactDOM.render(<App />, document.getElementById("root") as HTMLElement);
ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root") as HTMLElement
);