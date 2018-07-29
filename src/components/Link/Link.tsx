import React, { SFC, AnchorHTMLAttributes } from "react";
import { Link, LinkProps, NavLink, NavLinkProps } from "react-router-dom";

import { active } from "./Link.style";

type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement>;

export const Base: SFC<LinkProps | AnchorProps> = ({ href, ...rest }) =>
  href ? <a href={href} {...rest} /> : <Link {...rest as LinkProps} />;

export const Nav: SFC<NavLinkProps> = props => (
  <NavLink activeClassName={active} {...props} />
);
