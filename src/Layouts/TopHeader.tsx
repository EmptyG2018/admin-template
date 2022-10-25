import { Layout, Space } from "antd";
import React, { Fragment } from "react";
import styled, { css } from "styled-components";

type ActionProps = {
  children: React.ReactElement;
};

const ActionSC = styled.div``;

export const Action: React.FC<ActionProps> = ({ children }) => {
  return <ActionSC>{children}</ActionSC>;
};

type ActionsProps = {
  items: React.ReactElement[];
};

const Actions: React.FC<ActionsProps> = ({ items }) => {
  return (
    <Space>
      {items.map((item, index) => (
        <Fragment key={index}>{item}</Fragment>
      ))}
    </Space>
  );
};

type Props = {
  fixed: boolean;
  height?: number;
  nav?: React.ReactElement[];
  extra?: React.ReactElement[];
  fixedStyle?: React.CSSProperties;
};

const HeaderSC = styled(Layout.Header)<{ height: number }>`
  ${({ height }) => css`
    height: ${height}px;
    line-height: ${height}px;
  `}
`;

const HeaderPlaceholderSC = styled(HeaderSC)`
  background: transparent;
`;

const HeaderFixedSC = styled(HeaderSC)<{
  fixed: boolean;
}>`
  ${({ fixed }) => css`
    position: ${fixed && "fixed"};
    top: ${fixed && 0};
  `}
  right: 0;
  padding: 0;
`;

const HeaderWrappSC = styled.div`
  position: relative;
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 0 16px;
  height: 100%;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
`;

const HeaderActonsSC = styled.div`
  height: 100%;
`;

const TopHeader: React.FC<Props> = ({
  fixed,
  height = 48,
  nav,
  extra,
  fixedStyle,
}) => {
  return (
    <>
      {fixed && <HeaderPlaceholderSC height={height} />}
      <HeaderFixedSC fixed={fixed} height={height} style={fixedStyle}>
        <HeaderWrappSC>
          <HeaderActonsSC>{nav && <Actions items={nav} />}</HeaderActonsSC>
          <HeaderActonsSC>{extra && <Actions items={extra} />}</HeaderActonsSC>
        </HeaderWrappSC>
      </HeaderFixedSC>
    </>
  );
};

export default TopHeader;
