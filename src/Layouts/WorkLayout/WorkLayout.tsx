import { Button, Layout } from "antd";
import { Outlet } from "react-router-dom";
import React, { useState } from "react";
import styled from "styled-components";

import Logo from "../Logo";
import MenuSide from "../MenuSide";
import CollapseBtn from "../CollapseBtn";
import TopHeader from "../TopHeader";

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
  const [collapsed, setCollapsed] = useState(false);

  return (
    <WorkLayoutSC>
      <WorkLayoutSideSC width={208} collapsed={collapsed} collapsedWidth={48}>
        <Logo
          to="/"
          icon={logoSvg}
          showTitle={!collapsed}
          title="Ant Design Pro"
        />
        <MenuSide />
        <CollapseBtn collapsed={collapsed} onChange={setCollapsed} />
      </WorkLayoutSideSC>
      <Layout>
        <TopHeader fixed nav={[<Button>111</Button>, <Button>gege</Button>]} />
        <Outlet />
      </Layout>
    </WorkLayoutSC>
  );
};

export default WorkLayout;
