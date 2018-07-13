import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { persistCache } from "apollo-cache-persist";
import { withClientState } from "apollo-link-state";
import { ApolloLink } from "apollo-link";
import merge from "lodash/merge";

import { firebaseLink } from "./firebase";
import { resolvers as itemResolvers } from "components/Item";

const cache = new InMemoryCache();

persistCache({ cache, storage: window.localStorage as any });
const stateLink = withClientState({
  cache,
  resolvers: merge(itemResolvers),
});

const link = ApolloLink.from([stateLink, firebaseLink]);

export default new ApolloClient({ cache, link });
