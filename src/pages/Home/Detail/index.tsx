import {
    LaptopOutlined,
    NotificationOutlined,
    UserOutlined,
    ShoppingCartOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { useParams } from 'react-router-dom';
import { Breadcrumb, Layout, Menu } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { getAll, getProduct } from '../../../api/product';
import { useDispatch } from "react-redux";
import cartSlice from "../Cart/cartSlice.js";
import { Col, Row } from 'antd';
import { Typography } from "antd";
import Card from "react-bootstrap/Card";
type PRODUCT_TYPE = {
    _id: string;
    name: string;
    saleOffPrice: number;
    feature: string;
    descriptionS: string;
    descriptionL: string;
    originalPrice: number;
    image: string;
    categories: string
};
const { Content, Sider } = Layout;

const items1: MenuProps["items"] = ["1", "2", "3"].map((key) => ({
    key,
    label: `nav ${key}`,
}));


const DetailPage = () => {
    const [products, setProducts] = useState<PRODUCT_TYPE[]>([]);
    const handleGetProducts = async () => {
        const response = await getAll();
        setProducts(response.data);
    };

    useEffect(() => {
        handleGetProducts();
    }, []);

    const dispatch = useDispatch();
    const addToCart = (product: any) => {
        alert("Thêm giỏ hàng thành công")
        dispatch(cartSlice.actions.add(product))

    }
    const { id } = useParams();
    const [product, setProduct] = useState<PRODUCT_TYPE>();
    const handleGetProductDetail = async () => {
        const response = await getProduct(id);
        setProduct(response.data);
    }

    useEffect(() => {
        handleGetProductDetail();
    }, []);
    return (
        <>
            <Layout>
                <Layout>
                    <Sider width={200} className="site-layout-background">
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={["1"]}
                            defaultOpenKeys={["sub1"]}
                            style={{ height: "100%", borderRight: 0 }}
                        />
                    </Sider>
                    <Layout style={{ padding: "0 24px 24px",paddingRight: '200px' ,backgroundColor: '#fff' }}>
                        <Breadcrumb style={{ margin: "16px 0" }}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb>
                        <Content
                            className="site-layout-background"
                            style={{
                                padding: 24,
                                margin: 0,
                                minHeight: 280,
                            }}
                        >
                            <LayoutStyle>
                                <div>
                                    <h4>{product?.name}</h4>
                                    <img
                                        style={{ marginBottom: "10px" }}
                                        src={product?.image}
                                        alt=""
                                    />
                                </div>

                                <div>
                                    <div style={{ display: 'flex' }}>
                                        <h4 style={{ color: 'red' }}>{product?.saleOffPrice.toLocaleString()}đ</h4>
                                        <h5 style={{ marginLeft: '10px', fontSize: '18px' }}>{product?.originalPrice.toLocaleString()}đ</h5>
                                    </div>

                                    <p>
                                        {product?.descriptionS}
                                    </p>
                                    <div style={{ marginTop: '160px' }}>
                                        <ButtonStyle type="submit">Mua ngay</ButtonStyle>

                                        <CartStyle onClick={() => addToCart(product)} type="submit">
                                            <ShoppingCartOutlined />
                                        </CartStyle>
                                        <p style={{display: 'inline', width: '2px'}}>Thêm giỏ</p>
                                    </div>
                                </div>
                            </LayoutStyle>
                        </Content>
                        <div>
                            
                            <div style={{backgroundColor: '#F2F2F2', padding: '10px', marginTop: '10px'}}>
                                <h4>Đặc điểm nổi bật</h4>
                                {product?.feature}
                            </div>
                            <h4>Chi tiết</h4>
                            {product?.descriptionL}
                        </div>
                    </Layout>
                </Layout>
            </Layout>
        </>
    );
};

const ButtonStyle = styled.button`
  background: #FF3945;
  border-radius: 4px;
  color: #fff;
  border: none;
  padding: 10px 40px;
  
`;
const CartStyle = styled.button`
  background: #FFFFFF;
  border: 1px solid #D70018;  
  border-radius: 4px;
  color: red;
  padding: 9px;
  margin: 0 10px;
`;
const LayoutStyle = styled.div`
    display: grid;
    grid-template-columns: 250px 1fr;
    
`;
export default DetailPage;
