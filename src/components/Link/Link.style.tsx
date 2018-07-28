import styled from "react-emotion";

import { GREY } from "App.style";
import Base from "./Link";

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
`;
