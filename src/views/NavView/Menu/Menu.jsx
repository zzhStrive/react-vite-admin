import React, { useState } from 'react'
import { Layout, Divider, Row, Col, Menu, Button, Switch } from 'antd'
import CustomBreadcrumb from '@/components/CustomBreadcrumb'
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  CalendarOutlined,
  LinkOutlined
} from '@ant-design/icons';

const { SubMenu } = Menu

const MenuView = () => {
  const [current, setCurrent] = useState('mail')
  const [collapsed, setCollapsed] = useState(false)
  const [openKeys, setOpenKeys] = useState(['sub1'])
  const [mode, setMode] = useState('inline')
  const [theme, setTheme] = useState('light')

  const rootSubmenuKeys = ['sub1', 'sub2', 'sub4']

  const handleClick = e => {
    console.log('click ', e)
    setCurrent(e.key)
  }

  const onOpenChange = keys => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);

    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  }

  const itemsTop = [
    {
      label: 'Navigation One',
      key: 'mail',
      icon: <MailOutlined />,
    },
    {
      label: 'Navigation Two',
      key: 'app',
      icon: <AppstoreOutlined />,
      disabled: true,
    },
    {
      label: 'Navigation Three - Submenu',
      key: 'SubMenu',
      icon: <SettingOutlined />,
      children: [
        {
          type: 'group',
          label: 'Item 1',
          children: [
            {
              label: 'Option 1',
              key: 'setting:1',
            },
            {
              label: 'Option 2',
              key: 'setting:2',
            },
          ],
        },
        {
          type: 'group',
          label: 'Item 2',
          children: [
            {
              label: 'Option 3',
              key: 'setting:3',
            },
            {
              label: 'Option 4',
              key: 'setting:4',
            },
          ],
        },
      ],
    },
    {
      label: (
        <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
          Navigation Four - Link
        </a>
      ),
      key: 'alipay',
    },
  ];

  function getItem (label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }

  // ????????????
  const itemsEmbedded = [
    getItem('Navigation One', 'sub1', <MailOutlined />, [
      getItem('Item 1', 'g1', null, [getItem('Option 1', '1'), getItem('Option 2', '2')], 'group'),
      getItem('Item 2', 'g2', null, [getItem('Option 3', '3'), getItem('Option 4', '4')], 'group'),
    ]),
    getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
      getItem('Option 5', '5'),
      getItem('Option 6', '6'),
      getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
    ]),
    getItem('Navigation Three', 'sub4', <SettingOutlined />, [
      getItem('Option 9', '9'),
      getItem('Option 10', '10'),
      getItem('Option 11', '11'),
      getItem('Option 12', '12'),
    ]),
  ];

  // ???????????????
  const itemsShrink = [
    getItem('Option 1', '1', <PieChartOutlined />),
    getItem('Option 2', '2', <DesktopOutlined />),
    getItem('Option 3', '3', <ContainerOutlined />),
    getItem('Navigation One', 'sub1', <MailOutlined />, [
      getItem('Option 5', '5'),
      getItem('Option 6', '6'),
      getItem('Option 7', '7'),
      getItem('Option 8', '8'),
    ]),
    getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
      getItem('Option 9', '9'),
      getItem('Option 10', '10'),
      getItem('Submenu', 'sub3', null, [getItem('Option 11', '11'), getItem('Option 12', '12')]),
    ]),
  ];

  // ???????????????????????????
  const itemsFirstLevel = [
    getItem('Navigation One', 'sub1', <MailOutlined />, [
      getItem('Option 1', '1'),
      getItem('Option 2', '2'),
      getItem('Option 3', '3'),
      getItem('Option 4', '4'),
    ]),
    getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
      getItem('Option 5', '5'),
      getItem('Option 6', '6'),
      getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
    ]),
    getItem('Navigation Three', 'sub4', <SettingOutlined />, [
      getItem('Option 9', '9'),
      getItem('Option 10', '10'),
      getItem('Option 11', '11'),
      getItem('Option 12', '12'),
    ]),
  ];

  // ?????????????????????
  const itemsDynamicState = [
    getItem('Navigation One', '1', <MailOutlined />),
    getItem('Navigation Two', '2', <CalendarOutlined />),
    getItem('Navigation Two', 'sub1', <AppstoreOutlined />, [
      getItem('Option 3', '3'),
      getItem('Option 4', '4'),
      getItem('Submenu', 'sub1-2', null, [getItem('Option 5', '5'), getItem('Option 6', '6')]),
    ]),
    getItem('Navigation Three', 'sub2', <SettingOutlined />, [
      getItem('Option 7', '7'),
      getItem('Option 8', '8'),
      getItem('Option 9', '9'),
      getItem('Option 10', '10'),
    ]),
    getItem(
      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
        Ant Design
      </a>,
      'link',
      <LinkOutlined />,
    ),
  ];

  return (
    <Layout className='animated fadeIn'>
      <div>
        <CustomBreadcrumb arr={['??????', '????????????']}></CustomBreadcrumb>
      </div>
      <div className='base-style'>
        <h3>????????????</h3>
        <Divider />
        <p>
          ???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
        </p>
      </div>
      <Row gutter={8}>
        <Col span={12}>
          <div className='base-style'>
            <Divider orientation='left'>????????????</Divider>
            <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal" items={itemsTop} />
          </div>
        </Col>

        <Col span={12}>
          <div className='base-style'>
            <Divider>????????????</Divider>
            <Menu
              onClick={handleClick}
              style={{
                width: 256,
              }}
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              mode="inline"
              items={itemsEmbedded}
            />
          </div>
        </Col>

        <Col span={12}>
          <div className='base-style'>
            <Divider>???????????????????????????</Divider>
            <Menu
              mode="inline"
              openKeys={openKeys}
              onOpenChange={onOpenChange}
              style={{
                width: 256,
              }}
              items={itemsFirstLevel}
            />
          </div>
        </Col>

        <Col span={12}>
          <div className='base-style'>
            <Divider>???????????????</Divider>
            <div
              style={{
                width: 256,
              }}
            >
              <Button
                type="primary"
                onClick={() => setCollapsed(!collapsed)}
                style={{
                  marginBottom: 16,
                }}
              >
                {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              </Button>
              <Menu
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                theme="dark"
                inlineCollapsed={collapsed}
                items={itemsShrink}
              />
            </div>
          </div>
        </Col>

        <Col span={12}>
          <div className='base-style'>
            <Divider>?????????????????????</Divider>
            <div>
              <Switch onChange={val => setMode(() => (val ? 'vertical' : 'inline'))} /> Change Mode
              <span className='ant-divider' style={{ margin: '0 1em' }} />
              <Switch onChange={val => setTheme(() => (val ? 'dark' : 'light'))} /> Change Theme
              <br />
              <br />
              <Menu
                style={{
                  width: 256,
                }}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode={mode}
                theme={theme}
                items={itemsDynamicState}
              />
            </div>
          </div>
        </Col>
      </Row>
    </Layout>
  )
}

export default MenuView
