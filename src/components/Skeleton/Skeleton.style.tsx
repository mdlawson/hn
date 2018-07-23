import styled, { css, keyframes } from "react-emotion";

const shine = keyframes`
  0% {
    transform:translateX(-100%);
  }
  100% {
    transform:translateX(100%);
  }
`;

export const SkeletonText = styled.span`
  color: transparent;
  background-color: rgba(0, 0, 0, 0.1);
  mix-blend-mode: multiply;
  box-decoration-break: clone;
  border-radius: 10px;
  font-size: 0.7em;
  margin-right: 0.5em;
  position: relative;
  display: inline-block;
  overflow: hidden;

  &::after {
    content: "";
    transform: translateX(100%);
    animation: ${shine} 1.2s ease-in-out infinite;
    width: 100%;
    position: absolute;
    height: 100%;
    top: 0;
    background: linear-gradient(
      100deg,
      rgba(255, 255, 255, 0) 5%,
      rgba(255, 255, 255, 0.3) 30%,
      rgba(255, 255, 255, 0) 55%
    );
  }
`;
