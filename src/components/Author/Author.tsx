import React, { SFC } from "react";
import Link from "components/Link";

const Author: SFC<{ id: string }> = ({ id }) => (
  <Link.Minimal to={`/user/${id}`}>{id}</Link.Minimal>
);

export default Author;
