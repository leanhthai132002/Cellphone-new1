import React from "react";
import { PhoneOutlined, LaptopOutlined,DesktopOutlined,RotateLeftOutlined, TabletFilled, AudioOutlined, SettingOutlined, ClockCircleOutlined,HomeOutlined, SoundOutlined, PaperClipOutlined} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu } from 'antd';
import { Link, Outlet } from 'react-router-dom'
import styled from 'styled-components';
import Banner from "./banner";
import ProductHomePage from "./product";
import Header from "../../components/Header";
const { Content, Sider } = Layout;

const item3: MenuProps['items'] = [
  { key: "cellphone", icon: <PhoneOutlined />, label: <Link to="/admin">Điện thoại</Link> },
  { key: "laptop", icon: <LaptopOutlined />, label: "Laptop" },
  { key: "tablet", icon: <TabletFilled />, label: "Máy tính bảng" },
  { key: "audio", icon: <AudioOutlined />, label: "Âm thanh" },
  { key: "watch", icon: <ClockCircleOutlined />, label: "Đồng hồ" },
  { key: "smarthome", icon: <HomeOutlined />, label: "Nhà thông minh" },
  { key: "accessory", icon: <AudioOutlined />, label: "Phụ kiện" },
  { key: "PC", icon: <DesktopOutlined />, label: "PC - Màn hình" },
  { key: "TV", icon: <DesktopOutlined />, label: "Tivi" },
  { key: "buy2nd", icon: <RotateLeftOutlined />, label: "Thu cũ" },
  { key: "sell2nd", icon: <RotateLeftOutlined />, label: "Hàng cũ" },
  { key: "KM", icon: <SoundOutlined />, label: "Khuyến mại" },
  { key: "news", icon: <PaperClipOutlined />, label: "Tin công nghệ" },
  {
    key: "categories", icon: <SettingOutlined />,
    label: <Link to="/admin/categories">Categories</Link>
  },
]

const HomePage: React.FC = () => (
  <>
  <Layout>
    <Layout>
      <Sider style={{ paddingBottom: '0px' }}

        width={200}
        className="site-layout">
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0, padding: '0px', fontSize: '15px' }}
          items={item3} />
      </Sider>
      <Banner />
    </Layout>
    <ProductHomePage />

  </Layout>

  </>


);



export default HomePage;