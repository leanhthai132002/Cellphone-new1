import React from 'react'
import { Breadcrumb, Col, Layout, Menu, MenuProps, Row } from "antd";
import { Link } from 'react-router-dom';
import { LaptopOutlined } from "@ant-design/icons";
import cartSlice from "./cartSlice.js";
import { currency } from "../../../helper.js";
import { Divider, Typography, Button, InputNumber } from 'antd'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Header from '../../../components/Header/index.js';
const { Title } = Typography
const { Content, Sider } = Layout;
interface Icart{
    cart: any[],
    total: number
}

interface IState {
    cart: Icart
    product: any
}

function CartPage() {
    const  cart: Icart  = useSelector((store: IState)  => store.cart)
    const dispatch = useDispatch()
    const decreaseProduct = (id: string) => {
        dispatch(cartSlice.actions.decrease(id))
    }
    const increaseProduct = (id: string) => {
        dispatch(cartSlice.actions.increase(id))
    }
    const deleteProduct = (id: string) => {
        dispatch(cartSlice.actions.delete(id))
    }
    return (
        <div>
            <>
                <Layout>
                    <Layout>
                        <Header/>
                        <Layout style={{ padding: "0 24px 24px", backgroundColor: '#fff' }}>
                            <Content
                                className="site-layout-background"
                                style={{
                                    padding: 24,
                                    margin: 0,
                                    minHeight: 280,
                                }}
                            >

                                <CartStyle className="cart">
                                    <Link style={{ color: 'red' }} to='/'>Trở lại</Link>
                                    <Title style={{ color: 'red', textAlign: 'center' }} level={3}>Giỏ hàng</Title>
                                    {cart.cart?.map(product => (
                                        <><Row key={product.id}>
                                            <Col span={20}>
                                                <Row>
                                                    <Col>
                                                        <img width="50%" src={product.image} />
                                                    </Col>
                                                    <Col>
                                                        <Title level={5}>{product.name}</Title>
                                                        <div style={{ display: 'flex' }}>
                                                            <h4 style={{ color: 'red', fontSize: '18px' }}>{product?.saleOffPrice.toLocaleString()}đ</h4>
                                                            <h5 style={{ marginLeft: '10px', fontSize: '13px' }}>{product?.originalPrice.toLocaleString()}đ</h5>
                                                        </div>
                                                        <Typography>Số lượng</Typography>
                                                        <Row>
                                                            <Col><Button onClick={() => decreaseProduct(product.id)}>-</Button></Col>
                                                            <Col><InputNumber value={product.amount ? product.amount : 1} /></Col>
                                                            <Col><Button onClick={() => increaseProduct(product.id)}>+</Button></Col>
                                                        </Row>
                                                    </Col>
                                                </Row>

                                            </Col>
                                            <Col span={4}>
                                                <Title><Button onClick={() => deleteProduct(product.id)}>X</Button></Title>
                                                <Title></Title>
                                            </Col>
                                            
                                        </Row>
                                            <Divider />
                                        </>
                                    ))}

                                    <Row>
                                        <Col span={20}>Tổng số tiền tạm tính</Col>
                                        <Col span={4}><Title level={4} style={{ color: "red" }}>{currency(cart.total)}</Title></Col>
                                    </Row>

                                    <>
                                        <BGStyle>
                                            <ButtonStyle >Tiến hành đặt hàng</ButtonStyle>
                                        </BGStyle>
                                        <BG2Style>
                                            <ButtonStyle style={{ color: 'red' }}><Link style={{ color: 'red' }} to='/'>Chọn thêm sản phẩm khác</Link></ButtonStyle>
                                        </BG2Style>
                                    </>
                                </CartStyle>
                            </Content>
                        </Layout>
                    </Layout>
                </Layout>
            </>
        </div>
    )
}

const CartStyle = styled.div`
    width: 800px;
    margin: auto;
`
const ButtonStyle = styled.p`

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    margin-bottom: 0px;
    line-height: 24px;
    text-align: center;
    text-transform: uppercase;
    color: #fff;
    padding: 10px;
    
`

const BGStyle = styled.div`
    background: #D70018;
    border: 1px solid #DC3545;
    border-radius: 4px;
    margin-bottom: 5px;
`
const BG2Style = styled.div`
    border: 1px solid #DC3545;
    border-radius: 4px;
`

export default CartPage