import React from "react";
import Loading from "./Loading";
import styled from "styled-components";

type Props = {
  description?: string;
}

const LoadingContainer = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
`;

const LoadingPage: React.FC<Props> = ({ description }) => {
  return (
    <LoadingContainer>
      <Loading description={description} />
    </LoadingContainer>
  );
};

export default LoadingPage;
