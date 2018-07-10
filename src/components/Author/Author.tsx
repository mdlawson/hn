import React, { SFC } from "react";
import { A } from "App.style";

const HN = "https://news.ycombinator.com";

const Author: SFC<{ id: string }> = ({ id }) => (
  <A href={`${HN}/user?id=${id}`}> {id} </A>
);

export default Author;
