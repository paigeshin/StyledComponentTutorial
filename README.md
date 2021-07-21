# URL

[https://www.youtube.com/watch?v=c5-Vex3ufFU](https://www.youtube.com/watch?v=c5-Vex3ufFU)

# Installation

```bash
npm i styled-components @types/styled-components
```

# How to define Styled Component

```tsx
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
    font-sie: 0.4rem;
    color: blue;
  }
`;
```

# Styled Component Inheritance

```tsx
// Inherit all the styles
const SuperButton = styled(StyledButton)`
  font-size: 2.5rem;
`;
```

# Styled Component that defines other component

```tsx
//Component which styles another component
const OutterWrapper = styled.div`
  width: 100%;
  background: blueviolet;
  margin-top: 2rem;
  &:hover ${StyledButton} {
    color: red;
  }
`;
```

# Styled Component with default attribute

```tsx
//Set default attribute
const Link = styled.a.attrs((props) => ({
  target: "_blank",
}))`
  color: violet;
  font-size: 1.5rem;
`;
```

# Apply Style to exterior module

```tsx
import { Link } from "react-router-dom";
const styledLink = styled(Link)``;
```

# Dynamic Styled Component

```tsx
interface PaginationProps {
  page: string;
}

const PaginationWrapper = styled.div<PaginationProps>`
  display: flex;
  width: 100%;
  justify-content: ${(props) => {
    if (props.page === "first") return "flex-end";
    else if (props.page === "middle") return "space-between";
    else return "flex-start";
  }};
`;

//Usage 
<PaginationWrapper page="middle">
```

# Styled Component Global Style

- /theme/GlobalStyles.ts

```tsx
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

html {
    height: 100%;
    background: rebeccapurple;
}

* {
    padding: 0;
    margin: 0;
}

body {
    background: red;
}

`;

export default GlobalStyle;
```

- index.tsx

```tsx
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import GlobalStyle from "./theme/GlobalStyles";

ReactDOM.render(
  <React.StrictMode>
      <GlobalStyle />
      <App />
  </React.StrictMode>,
  document.getElementById("root")
);
```

# Define Theme

- /theme/Theme.ts ⇒ Define Theme

```tsx
export const Theme = {
  colors: {
    main: "#3747f4",
    dark: "#263237",
    light: "#54637a",
    lighter: "#b0bec5",
    text: "#fafafa",
    link: "#444444",
  },
  fontSizes: {
    large: "3rem",
    medium: "2rem",
    p: "1.5rem",
  },
  mediaQueries: {
    "below-768": `only screen and (max-width: 768px)`,
  },
};
```

- index.tsx

```tsx
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import GlobalStyle from "./theme/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { Theme } from "./theme/Theme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
```

- Button.tsx ⇒ access global theme property through props

```tsx
const StyledButton = styled.button<ButtonProps>`
  background-color: ${(props) => props.theme.colors.light};
  color: ${(props) => props.theme.colors.link};
  font-size: ${(props) => props.theme.fontSizes.p};
`
```

# Animation

```tsx
import styled, { keyframes } from "styled-components";

export const FadeIn = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

// apply 
```

# Modularize

- /components/styled/index.tsx

```tsx
import styled, { keyframes } from "styled-components";

const FadeIn = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

const StyledButton = styled.button<ButtonProps>`
	animation: 2s ${FadeIn} ease-in;
`
```