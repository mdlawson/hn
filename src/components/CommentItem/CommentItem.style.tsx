import styled, { css } from "react-emotion";

import { subdued, Internal } from "App.style";

export const Header = styled.div`
  ${subdued};
  font-size: 8pt;
  margin-bottom: 3px;
`;

export const Content = styled.div<{ collapsed?: boolean }>(
  {
    fontSize: "9pt",
  },
  props => ({
    display: props.collapsed ? "none" : "block",
  }),
);

export const ReplyList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0 0 0 35px;
`;

export const ListItem = styled.li`
  margin: 10px 0;
  padding: 0;
`;

export const Collapse = styled.span`
  user-select: none;
  cursor: pointer;

  &::before {
    content: "[";
  }

  &::after {
    content: "]";
  }
`;
