import { Layout } from "antd";
import type { MenuProps } from "antd";
import { GlobalOutlined } from "@ant-design/icons";
import { Outlet } from "react-router-dom";
import React, { useState } from "react";
import LanguagePropdown from "../../components/LanguagePropdown";
import styled from "styled-components";

import Logo from "../Logo";
import MenuSide from "../MenuSide";
import CollapseBtn from "../CollapseBtn";
import TopHeader from "../TopHeader";

import logoSvg from "../../assets/logo.svg";

const ActionSC = styled.a`
  display: flex;
  align-items: center;
  height: 48px;
  padding: 0 12px;
  cursor: pointer;
  transition: all 0.3s;
  color: initial;
  &:hover {
    background: rgba(0, 0, 0, 0.025);
  }
`;

const is = "d1";

const LanguageItems: MenuProps["items"] = [
  {
    key: "d1",
    label: "gegeg",
  },
  {
    key: "d2",
    label: "mmm",
  },
];

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

const TopHeaderSC = styled(TopHeader).attrs<
  { fixedWidth?: number },
  { fixedWidth?: number; fixedStyle?: React.CSSProperties }
>((props) => ({
  fixedStyle: {
    width: `${props.fixed && "calc(100% - " + props.fixedWidth + "px)"}`,
  },
}))``;

const WorkLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  const asideWidth = 208;

  const handleSelect = (value: any) => {
    console.log("gewage", value);
  };

  return (
    <WorkLayoutSC>
      <WorkLayoutSideSC
        width={asideWidth}
        collapsed={collapsed}
        collapsedWidth={48}
      >
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
        <TopHeaderSC
          fixed
          height={48}
          fixedWidth={asideWidth}
          extra={[
            <LanguagePropdown
              selectedKey={is}
              items={LanguageItems}
              onChange={handleSelect}
            >
              <ActionSC>
                <GlobalOutlined />
              </ActionSC>
            </LanguagePropdown>,
          ]}
        />
        <Outlet />
      </Layout>
    </WorkLayoutSC>
  );
};

export default WorkLayout;
