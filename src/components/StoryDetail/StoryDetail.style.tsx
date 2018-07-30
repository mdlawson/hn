import styled, { css } from "react-emotion";

export const Detail = styled.div`
  padding: 10px 35px;
  & > * + * {
    margin-top: 20px;
  }
`;

export const CommentList = styled.ul`
  list-style: none;
  padding: 0;
  margin-left: 0;
  margin-right: 0;
`;

export const ListItem = styled.li`
  padding: 0;
  margin-bottom: 8px;
`;
