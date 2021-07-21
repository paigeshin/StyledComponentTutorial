import React from "react";
import styled from "styled-components";
import Button from "./components/Button";
import { Link } from "react-router-dom";

const MainWrapper = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

//Customize exterior Components
const styledLink = styled(Link);

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

const App: React.FC = () => {
  return (
    <MainWrapper className="">
      <Button primary bgColor="violet">
        My Primary Button
      </Button>
      <Button>hello world</Button>
      <PaginationWrapper page="middle">
        <Button>Page5</Button>
      </PaginationWrapper>
    </MainWrapper>
  );
};

export default App;
