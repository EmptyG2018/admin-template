import { Typography } from "antd";
import { Link } from "react-router-dom";
import type { To } from "react-router-dom";
import React from "react";
import styled from "styled-components";

type Props = {
  to: To;
  icon?: string;
  title: string;
};

const LogoWrapSC = styled.div`
  padding: 16px;
`;

const LogoLinkSC = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 32px;
`;

const LogoIconSC = styled.img`
  display: inline-block;
  height: 32px;
  margin: 0 12px 0 0;
  vertical-align: middle;
`;

const LogoTitleSC = styled(Typography.Title)`
  &.ant-typography {
    display: inline-block;
    height: 32px;
    color: #fff;
    font-weight: 600;
    font-size: 18px;
    line-height: 32px;
    vertical-align: middle;
  }
`;

const Logo: React.FC<Props> = ({ to, icon, title, ...props }) => {
  return (
    <LogoWrapSC {...props}>
      <LogoLinkSC to={to}>
        {icon && <LogoIconSC src={icon} />}
        <LogoTitleSC level={1}>{title}</LogoTitleSC>
      </LogoLinkSC>
    </LogoWrapSC>
  );
};

export default Logo;
