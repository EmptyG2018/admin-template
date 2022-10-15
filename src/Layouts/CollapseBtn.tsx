import { Menu } from "antd";
import type { MenuProps } from "antd";
import { MailOutlined } from "@ant-design/icons";
import React from "react";
import styled from "styled-components";

const CollapseBtnSC = styled.div``;

const items: MenuProps["items"] = [
  {
    label: "Navigation One",
    key: "mail",
    icon: <MailOutlined />,
  },
];

const CollapseBtn: React.FC = ({ ...props }) => {
  return (
    <CollapseBtnSC {...props}>
      <Menu theme="dark" items={items} />
    </CollapseBtnSC>
  );
};

export default CollapseBtn;
