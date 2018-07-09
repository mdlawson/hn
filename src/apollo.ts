import firebase from "firebase";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { persistCache } from "apollo-cache-persist";
import { createRtdbLink } from "apollo-link-firebase";

if (firebase.apps.length === 0) {
  firebase.initializeApp({
    databaseURL: "https://hacker-news.firebaseio.com",
  });
}

const cache = new InMemoryCache();

persistCache({ cache, storage: window.localStorage as any });

const link = createRtdbLink({ database: firebase.database() });

export default new ApolloClient({ cache, link });
