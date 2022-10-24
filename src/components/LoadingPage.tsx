import React from "react";
import Loading from "./Loading";
import styled from "styled-components";

const LoadingContainer = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
`;

const LoadingPage: React.FC = () => {
  return (
    <LoadingContainer>
      <Loading />
    </LoadingContainer>
  );
};

export default LoadingPage;
