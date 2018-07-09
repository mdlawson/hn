import styled, { css } from "react-emotion";

import { subdued } from "App.style";

export const List = styled.ol`
  list-style: none;
  margin: 0;
  padding: 10px 0;
  counter-reset: ListItem;
`;

export const ListItem = styled.li`
  margin-bottom: 7px;
  counter-increment: ListItem;
  display: flex;
  flex: 1;

  &::before {
    ${subdued} content: counter(ListItem) ".";
    text-align: right;
    width: 2em;
    font-size: 10pt;
    padding-right: 0.5em;
  }
`;
