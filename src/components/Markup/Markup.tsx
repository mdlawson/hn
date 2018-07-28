import React, { SFC } from "react";
import Interweave, { TransformCallback } from "interweave";

import Link from "components/Link";

const Markup: SFC<{ html: string }> = ({ html }) => (
  <Interweave tagName="fragment" disableLineBreaks transform={transform} content={html} />
);

const transform: TransformCallback = (node, children) => {
  if (node.tagName === "A") {
    return <Link href={node.getAttribute("href") || undefined}>{children}</Link>;
  }
};

export default Markup;
