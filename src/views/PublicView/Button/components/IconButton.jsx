import { SearchOutlined } from '@ant-design/icons';
import { Button, Tooltip } from 'antd';
import React from 'react';

const App = () => (
  <>
    <Tooltip title="search">
      <Button type="primary" shape="circle" icon={<SearchOutlined />} />
    </Tooltip>

    <Button type="primary" shape="circle">
      A
    </Button>

    <Button type="primary" icon={<SearchOutlined />}>
      Search
    </Button>

    <Tooltip title="search">
      <Button shape="circle" icon={<SearchOutlined />} />
    </Tooltip>

    <Button icon={<SearchOutlined />}>Search</Button>

    <Tooltip title="search">
      <Button type="dashed" shape="circle" icon={<SearchOutlined />} />
    </Tooltip>

    <Button type="dashed" icon={<SearchOutlined />}>
      Search
    </Button>
    <Button icon={<SearchOutlined />} href="https://www.google.com" />
  </>
);

export default App;