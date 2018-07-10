import React from "react";
import { render } from "react-dom";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router } from "react-router-dom";

import * as serviceWorker from "./serviceWorker";

import client from "./apollo";
import App from "./App";

render(
  <ApolloProvider client={client}>
    <Router>
      <App />
    </Router>
  </ApolloProvider>,
  document.getElementById("root"),
);

serviceWorker.register();
