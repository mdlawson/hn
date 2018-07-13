import firebase from "firebase";
import { createRtdbLink } from "apollo-link-firebase";

if (firebase.apps.length === 0) {
  firebase.initializeApp({
    databaseURL: "https://hacker-news.firebaseio.com",
  });
}

export const firebaseLink = createRtdbLink({ database: firebase.database() });
