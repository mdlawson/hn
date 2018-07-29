import styled, { css } from "react-emotion";

import { GREY } from "App.style";
import { Base, Nav as NavLink } from "./Link";

export const active = css``;

export const Default = styled(Base)`
  color: inherit;
  text-decoration: underline;

  &:visited {
    color: ${GREY};
  }
`;

export const Minimal = styled(Base)`
  color: inherit;
  text-decoration: none;

  &:visited {
    color: ${GREY};
  }

  &:hover {
    text-decoration: underline;
  }
`;

export const Plain = styled(Base)`
  color: inherit;
  text-decoration: none;

  &:visited {
    color: inherit;
  }

  &.${active} {
    color: white;
  }
`;

export const Nav = Plain.withComponent(NavLink);
