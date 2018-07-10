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
  padding-right: 35px;
  display: flex;
  flex: 1;

  &::before {
    ${subdued};
    content: counter(ListItem) ".";
    text-align: right;
    width: 30px;
    font-size: 10pt;
    padding-right: 5px;
  }
`;
