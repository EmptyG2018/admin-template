import { Layout, Space } from "antd";
import React from "react";
import styled from "styled-components";

type Props = {
  fixed: boolean;
  height?: number;
  nav?: React.ReactElement[];
  extra?: React.ReactElement[];
};

const HeaderSC = styled(Layout.Header)<{ height: number }>`
  height: ${(props) => props.height}px;
  line-height: ${(props) => props.height}px;
`;

const HeaderPlaceholderSC = styled(HeaderSC)`
  background: transparent;
`;

const HeaderFixedSC = styled(HeaderSC)<{ fixed: boolean }>`
  position: ${props => props.fixed ? 'fixed' : 'initial'};
  top: ${props => props.fixed ? 0 : 'initial'};
  padding: 0;
`;

const HeaderWrappSC = styled.div`
  position: relative;
  align-items: center;
  display: flex;
  padding: 0 16px;
  height: 100%;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
`;

const HeaderNavSC = styled.div``;

const HeaderExtraSC = styled.div``;

const TopHeader: React.FC<Props> = ({
  fixed,
  height = 48,
  nav,
  extra,
  ...props
}) => {
  return (
    <>
      {<HeaderPlaceholderSC height={height} />}
      <HeaderFixedSC fixed={fixed} height={height}>
        <HeaderWrappSC>
          <HeaderNavSC>
            {nav && <Space>{nav.map((item) => item)}</Space>}
          </HeaderNavSC>
          <HeaderExtraSC>
            {extra && <Space>{extra.map((item) => item)}</Space>}
          </HeaderExtraSC>
        </HeaderWrappSC>
      </HeaderFixedSC>
    </>
  );
};

export default TopHeader;
