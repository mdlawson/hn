import React, { SFC } from "react";
import formatDistance from "date-fns/formatDistance";

const Time: SFC<{ since: number }> = ({ since }) => (
  <>{formatDistance(since * 1000, new Date(), { addSuffix: true }) + " "}</>
);

export default Time;
