import React, { SFC, AnchorHTMLAttributes } from "react";
import { Link as RouterLink, LinkProps } from "react-router-dom";

const Base: SFC<LinkProps | AnchorHTMLAttributes<HTMLAnchorElement>> = ({
  href,
  ...rest
}) => (href ? <a href={href} {...rest} /> : <RouterLink {...rest as LinkProps} />);

export default Base;
