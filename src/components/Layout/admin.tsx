import { PhoneOutlined, LaptopOutlined, TabletFilled, AudioOutlined, UserOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu } from 'antd';
import React, { useEffect } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom'
import styled from 'styled-components';

import LogoImage from '../../assets/images/logo.png'

const { Header, Content, Sider } = Layout;

const item3: MenuProps['items'] = [
  { key: "cellphone", icon: <PhoneOutlined />, label: <Link to="/admin">Điện thoại</Link> },
  { key: "user", icon: <UserOutlined />, label: <Link to="/admin/users">User</Link> },
]

const App = () => {
  const navigate = useNavigate()
  useEffect(() => {
    if(!localStorage.getItem('user')){
      navigate("/signin")
    }else if(JSON.parse(localStorage.getItem('user')|| '{}').user.roll == 'admin' && localStorage.getItem('user')){
      navigate("/admin")
    }else{
      alert("Bạn không có quyền")
      navigate('/')
    }
  }, []);

  return (
    <Layout>  
      <HeaderCustom>
        <Logo src={LogoImage} />
        {/* <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} /> */}
      </HeaderCustom>
      <Layout>
        <Sider
          collapsible={true}
          width={200}
          className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
            items={item3}
          />
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <ContentCustom>
            <Outlet />
          </ContentCustom>
        </Layout>
      </Layout>
    </Layout>
  )
}

const HeaderCustom = styled(Header)`
    background-color: #00B0D7;
    height: 64px;
    display: flex;
    align-items: center;
`

const Logo = styled.img`
    width: 64px;
    height: auto;
`

const ContentCustom = styled(Content)`
  min-height: 100vh;
`

export default App;