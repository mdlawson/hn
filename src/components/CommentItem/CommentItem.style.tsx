import styled, { css } from "react-emotion";

import { subdued, Internal } from "App.style";

export const Header = styled.div`
  ${subdued};
  font-size: 8pt;
  margin-bottom: 3px;
`;

export const Content = styled.div`
  font-size: 9pt;
`;

export const ReplyList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0 0 0 35px;
`;

export const ListItem = styled.li`
  margin: 10px 0;
  padding: 0;
`;
