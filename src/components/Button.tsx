import React from "react";
import styled, { css, keyframes } from "styled-components";
import { Wrapper } from "./styled";

// Nested Interpolation, Nested Interpolation is not recommended
// const StyledButton = styled.button<ButtonProps>`
//   padding: 1rem 1.5rem;
//   font-size: 1.8rem;
//   /* color: ${(props) => (props.primary ? "red" : "#fff")}; */
//   color: #fff;
//   outline: none;
//   border: none;
//   background-color: #333;
//   ${(props) => {
//     return (
//       props.primary &&
//       css`
//         color: red;
//         background-color: ${props.bgColor};
//       `
//     );
//   }}
// `;

const FadeIn = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

const StyledButton = styled.button<ButtonProps>`
  background-color: ${(props) => props.theme.colors.light};
  color: ${(props) => props.theme.colors.link};
  font-size: ${(props) => props.theme.fontSizes.p};
  margin: ${(props) => props.margin || "2rem"};
  padding: 0.5rem 1rem;
  border: 1px solid palevioletred;
  border-radius: 3px;
  animation: 2s ${FadeIn} ease-in;
  ${(props) =>
    props.primary &&
    css`
      background-color: palevioletred;
      color: white;
      box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.2);
    `}
  &:hover {
    color: white;
    background-color: palevioletred;
  }
  .some-class {
    color: blue;
  }
  @media ${(props) => props.theme.mediaQueries["below-768"]} {
    font-size: 0.4rem;
    color: blue;
  }
`;

//Component which styles another component
const OutterWrapper = styled.div`
  width: 100%;
  background: blueviolet;
  margin-top: 2rem;
  &:hover ${StyledButton} {
    color: red;
  }
`;

// Inherit all the styles
const SuperButton = styled(StyledButton)`
  font-size: 2.5rem;
`;

//Set default attribute
const Link = styled.a.attrs((props) => ({
  target: "_blank",
}))`
  color: violet;
  font-size: 1.5rem;
`;

interface ButtonProps {
  children: any;
  primary?: any;
  bgColor?: string;
  margin?: string;
}

const Button: React.FC<ButtonProps> = ({ children, primary, bgColor }) => {
  return (
    <OutterWrapper>
      <StyledButton primary={primary} bgColor={bgColor} margin="5rem">
        {children}
        <p className="some-class">Test</p>
      </StyledButton>
      <Link href="https://www.google.com">One Link</Link>
      <Link href="https://www.google.com">Another Link</Link>
    </OutterWrapper>
  );
};

export default Button;
