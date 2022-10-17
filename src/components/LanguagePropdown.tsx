import { Dropdown, Menu } from "antd";
import type { MenuProps } from "antd";
type Props = {
  items: MenuProps["items"];
  selectedKey: string;
  children: React.ReactElement;
  onChange?: MenuProps["onClick"];
};

const LanguagePropdown: React.FC<Props> = ({
  selectedKey,
  items,
  children,
  onChange,
}) => {
  return (
    <Dropdown
      overlay={
        <Menu
          selectedKeys={[selectedKey]}
          items={items}
          onClick={(item) =>
            item.key !== selectedKey && onChange && onChange(item)
          }
        />
      }
    >
      {children}
    </Dropdown>
  );
};

export default LanguagePropdown;
