import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import React from "react";
import styled from "styled-components";

import Logo from "../Logo";
import MenuSide from "../MenuSide";
import CollapseBtn from "../CollapseBtn";

import logoSvg from "../../assets/logo.svg";

const WorkLayoutSC = styled(Layout)`
  height: 100vh;
`;

const WorkLayoutSideSC = styled(Layout.Sider)`
  .ant-layout-sider-children {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`;

const WorkLayout: React.FC = () => {
  return (
    <WorkLayoutSC>
      <WorkLayoutSideSC>
        <Logo to="/" icon={logoSvg} title="Ant Design Pro" />
        <MenuSide />
        <CollapseBtn />
      </WorkLayoutSideSC>
      <Layout.Content>
        <Outlet />
      </Layout.Content>
    </WorkLayoutSC>
  );
};

export default WorkLayout;
