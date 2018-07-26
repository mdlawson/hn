import React, { SFC } from "react";
import Interweave, { TransformCallback } from "interweave";

import { External } from "App.style";

const Markup: SFC<{ html: string }> = ({ html }) => (
  <Interweave tagName="fragment" disableLineBreaks transform={transform} content={html} />
);

const transform: TransformCallback = (node, children) => {
  if (node.tagName === "A") {
    return <External href={node.getAttribute("href") || undefined}>{children}</External>;
  }
};

export default Markup;
