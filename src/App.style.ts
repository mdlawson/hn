import styled, { css } from "react-emotion";
import { Link as RouterLink } from "react-router-dom";

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
`;

export const Header = styled.div`
  background-color: ${ACCENT};
  font-size: 10pt;
  line-height: 12pt;
  padding: 2px;
  display: flex;
  align-items: center;
`;

export const Icon = styled.img`
  border: 1px solid white;
  margin-right: 5px;
`;

export const A = styled.a`
  color: black;
  text-decoration: none;

  &:visited {
    color: ${GREY};
  }
`;

export const Link = A.withComponent(RouterLink);

export const Title = styled.div`
  font-weight: bold;
  margin-right: 8px;

  ${Link}:visited {
    color: black;
  }
`;

export const subdued = css`
  color: ${GREY};

  ${A}, ${Link} {
    color: ${GREY};
  }
`;
