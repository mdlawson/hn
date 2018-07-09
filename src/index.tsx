import React from "react";
import { render } from "react-dom";
import { ApolloProvider } from "react-apollo";
import * as serviceWorker from "./serviceWorker";

import client from "./apollo";
import App from "./App";

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root"),
);

serviceWorker.register();
