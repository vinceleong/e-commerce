import React from "react";
import styled from "styled-components";

const FloatingBottomBar: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <Root>{children}</Root>;
};

const Root = styled.div(
  (p) => `
  position: fixed;
  left: 0;
  right: 0;
  bottom: 1rem;
  padding-right: 1rem;
  padding-left: 1rem;
  ${p.theme.size.md(`
    padding-right: auto;
    paddding-left: auto;
  `)}
`
);

export default FloatingBottomBar;
