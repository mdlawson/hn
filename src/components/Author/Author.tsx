import React, { SFC } from "react";
import { Link } from "App.style";

const Author: SFC<{ id: string }> = ({ id }) => <Link to={`/user/${id}`}>{id}</Link>;

export default Author;
