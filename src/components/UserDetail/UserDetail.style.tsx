import styled, { css } from "react-emotion";
import { subdued } from "App.style";

export const Detail = styled.dl`
  padding: 10px 35px;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
`;

const labelWidth = "60px";

export const Label = styled.dt`
  ${subdued};
  flex: 0 0 ${labelWidth};
  padding: 2px 0;

  &::after {
    content: ":";
  }
`;

export const Value = styled.dd`
  flex: 1 0 calc(100% - ${labelWidth});
  padding: 2px 0;
  margin: 0;

  & + & {
    margin-left: ${labelWidth};
  }
`;
