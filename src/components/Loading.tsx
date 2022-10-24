import React from "react";
import { Space, Spin, Typography } from "antd";
import styled from "styled-components";

type Props = {
  description?: string;
};

const SpinContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const Loading: React.FC<Props> = ({ description }) => {
  return (
    <SpinContainer>
      <Space direction="vertical" align="center">
        <Spin size="large" />
        {description && <Typography.Text>{description}</Typography.Text>}
      </Space>
    </SpinContainer>
  );
};

export default Loading;
