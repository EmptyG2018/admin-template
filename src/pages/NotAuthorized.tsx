import React from "react";
import { Result, Button } from "antd";
import { FormattedMessage } from "react-intl";

const NotFound: React.FC = () => {
  return (
    <Result
      status="403"
      title="403"
      subTitle={
        <FormattedMessage
          id="system.notauthorized.desc"
          defaultMessage="抱歉，您无法访问该页面"
        />
      }
      extra={
        <Button type="primary">
          <FormattedMessage
            id="system.notauthorized.back"
            defaultMessage="回到首页"
          />
        </Button>
      }
    />
  );
};

export default NotFound;
