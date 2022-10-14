import React from "react";
import { Result, Button } from "antd";
import { FormattedMessage } from "react-intl";

const NotFound: React.FC = () => {
  return (
    <Result
      status="404"
      title="404"
      subTitle={
        <FormattedMessage
          id="system.notfound.desc"
          defaultMessage="抱歉，您访问的页面不存在"
        />
      }
      extra={
        <Button type="primary">
          <FormattedMessage
            id="system.notfound.back"
            defaultMessage="回到首页"
          />
        </Button>
      }
    />
  );
};

export default NotFound;
