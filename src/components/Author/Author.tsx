import React, { SFC } from "react";
import { Internal } from "App.style";

const HN = "https://news.ycombinator.com";

const Author: SFC<{ id: string }> = ({ id }) => (
  <Internal href={`${HN}/user?id=${id}`}>{id}</Internal>
);

export default Author;
