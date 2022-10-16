import { Menu } from "antd";
import type { MenuProps } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import React from "react";
import styled from "styled-components";

const CollapseBtnSC = styled.div``;

type Props = {
  collapsed: boolean;
  onChange: (collapsed: boolean) => void;
};

const CollapseBtn: React.FC<Props> = ({ collapsed, onChange, ...props }) => {
  const items: MenuProps["items"] = [
    {
      key: "collapse",
      icon: collapsed ? <MenuFoldOutlined /> : <MenuUnfoldOutlined />,
    },
  ];

  return (
    <CollapseBtnSC {...props}>
      <Menu
        selectable={false}
        theme="dark"
        items={items}
        onClick={() => onChange(!collapsed)}
      />
    </CollapseBtnSC>
  );
};

export default CollapseBtn;
