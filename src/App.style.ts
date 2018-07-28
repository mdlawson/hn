import styled, { css } from "react-emotion";

export const GREY = "#828282";
export const BG = "#f6f6ef";
export const ACCENT = "#ff6600";

export const Container = styled.div`
  font-family: sans-serif;
  width: 85%;
  margin: 0 auto;
  background-color: ${BG};
  display: flex;
  flex-direction: column;
  font-size: 10pt;
`;

export const Header = styled.div`
  background-color: ${ACCENT};
  line-height: 12pt;
  padding: 2px;
  display: flex;
  align-items: center;
`;

export const Icon = styled.img`
  border: 1px solid white;
  margin-right: 5px;
`;

export const Title = styled.div`
  font-weight: bold;
  margin-right: 8px;
`;

export const subdued = css`
  color: ${GREY};
`;
