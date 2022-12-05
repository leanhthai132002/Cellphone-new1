import React, { useEffect, useState } from "react";
import { getAll } from "../../api/product";
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Typography } from "antd";
import { Link } from "react-router-dom";
import styled from "styled-components";
interface DataType {
  _id: string;
  name: string;
  saleOffPrice: number;
  feature: string;
  description: string;
  originalPrice: number;
  image: string;
}

function GroupExample() {
  const [products, setProducts] = useState<DataType[]>([]);
  const handleGetProducts = async () => {
    const response = await getAll();
    setProducts(response.data);
  };

  useEffect(() => {
    handleGetProducts();
  }, []);

  return (
    <>
      <Typography.Title
        level={2}
        style={{ marginLeft: "100px", marginTop: "10px" }}
      >
        Điện thoại nổi bật
      </Typography.Title>

      <Row xs={1} md={6} className="g-2">
        {Array.from({ length: 1 }).map((_, idx) => (
          <>
            {products.map((product) => (
              <Col>
                <Card style={{ padding: "5px" }}>
                  <Card.Img
                    variant="top"
                    style={{ width: "227px" }}
                    src={product.image}
                  />
                  <Card.Body>
                    <Card.Title>
                      <Link to={`/detail/${product._id}`}>{product.name}</Link>
                    </Card.Title>
                  </Card.Body>
                  <Card.Footer>
                    <div className="price-group" style={{ display: "flex" }}>
                      <p
                        className="old-price"
                        style={{ color: "#d71a00", textAlign: "left" }}
                      >
                        {product.saleOffPrice.toLocaleString()}.đ
                      </p>
                      <p
                        className="price sale-price"
                        style={{ textAlign: "right", marginLeft: "50px" }}
                      >
                        {product.originalPrice.toLocaleString()}đ
                      </p>
                    </div>
                    <div>
                      <p>Thu cũ lên đời - Trợ giá 1 triệu</p>
                      <StarStyle className="fa fa-star"></StarStyle>
                      <StarStyle className="fa fa-star"></StarStyle>
                      <StarStyle className="fa fa-star"></StarStyle>
                      <span className="fa fa-star"></span>
                      <span className="fa fa-star"></span>
                    </div>
                  </Card.Footer>

                </Card>

              </Col>

            ))}
          </>
        ))}
      </Row>

      <Typography.Title
        level={2}
        style={{ marginLeft: "100px", marginTop: "10px" }}
      >
        Phụ kiện
      </Typography.Title>
      <div className="categories-content">

        <div style={{ textAlign: 'center' }} className="categories-content-wrapper is-flex">
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="item-categories-outer"><AStyle href="https://cellphones.com.vn/phu-kien.html?doc_quyen=1644" className="item-categories " data-src="https://cdn2.cellphones.com.vn/180x/https://cdn.cellphones.com.vn/media/icons/category/cate-1644.svg" style={{ backgroundColor: 'rgb(255, 163, 163)', backgroundImage: 'url("https://cdn2.cellphones.com.vn/180x/https://cdn.cellphones.com.vn/media/icons/category/cate-1644.svg")' }}><span>Nổi bật</span></AStyle> {/**/}</div>
            <div className="item-categories-outer"><AStyle href="https://cellphones.com.vn/phu-kien/apple.html" className="item-categories " data-src="https://cdn2.cellphones.com.vn/180x/https://cdn.cellphones.com.vn/media/icons/category/cate-43.svg" style={{ backgroundColor: 'rgb(255, 184, 184)', backgroundImage: 'url("https://cdn2.cellphones.com.vn/180x/https://cdn.cellphones.com.vn/media/icons/category/cate-43.svg")' }}><span>Phụ kiện Apple</span></AStyle> {/**/}</div>
            <div className="item-categories-outer"><AStyle href="https://cellphones.com.vn/phu-kien/dan-man-hinh.html" className="item-categories " data-src="https://cdn2.cellphones.com.vn/180x/https://cdn.cellphones.com.vn/media/icons/category/cate-286.svg" style={{ backgroundColor: 'rgb(255, 148, 235)', backgroundImage: 'url("https://cdn2.cellphones.com.vn/180x/https://cdn.cellphones.com.vn/media/icons/category/cate-286.svg")' }}><span>Dán màn hình</span></AStyle> {/**/}</div>
            <div className="item-categories-outer"><AStyle href="https://cellphones.com.vn/phu-kien/bao-da-op-lung.html" className="item-categories " data-src="https://cdn2.cellphones.com.vn/180x/https://cdn.cellphones.com.vn/media/icons/category/cate-108.svg" style={{ backgroundColor: 'rgb(224, 179, 255)', backgroundImage: 'url("https://cdn2.cellphones.com.vn/180x/https://cdn.cellphones.com.vn/media/icons/category/cate-108.svg")' }}><span>Ốp lưng - Bao da</span></AStyle> {/**/}</div>
            <div className="item-categories-outer"><AStyle href="https://cellphones.com.vn/phu-kien/sac-dien-thoai.html" className="item-categories " data-src="https://cdn2.cellphones.com.vn/180x/https://cdn.cellphones.com.vn/media/icons/category/cate-114.svg" style={{ backgroundColor: 'rgb(198, 216, 251)', backgroundImage: 'url("https://cdn2.cellphones.com.vn/180x/https://cdn.cellphones.com.vn/media/icons/category/cate-114.svg")' }}><span>Cáp, sạc</span></AStyle> {/**/}</div>
            <div className="item-categories-outer"><AStyle href="https://cellphones.com.vn/phu-kien/pin-du-phong.html" className="item-categories " data-src="https://cdn2.cellphones.com.vn/180x/https://cdn.cellphones.com.vn/media/icons/category/cate-122.svg" style={{ backgroundColor: 'rgb(77, 145, 255)', backgroundImage: 'url("https://cdn2.cellphones.com.vn/180x/https://cdn.cellphones.com.vn/media/icons/category/cate-122.svg")' }}><span>Pin dự phòng</span></AStyle> {/**/}</div>
            <div className="item-categories-outer"><AStyle href="https://cellphones.com.vn/phu-kien/thiet-bi-mang.html" className="item-categories " data-src="https://cdn2.cellphones.com.vn/180x/https://cdn.cellphones.com.vn/media/icons/category/cate-676.svg" style={{ backgroundColor: 'rgb(133, 255, 177)', backgroundImage: 'url("https://cdn2.cellphones.com.vn/180x/https://cdn.cellphones.com.vn/media/icons/category/cate-676.svg")' }}><span>Thiết bị mạng</span></AStyle> {/**/}</div>
            <div className="item-categories-outer"><AStyle href="https://cellphones.com.vn/phu-kien/camera.html" className="item-categories " data-src="https://cdn2.cellphones.com.vn/180x/https://cdn.cellphones.com.vn/media/icons/category/cate-363.svg" style={{ backgroundColor: 'rgb(245, 214, 61)', backgroundImage: 'url("https://cdn2.cellphones.com.vn/180x/https://cdn.cellphones.com.vn/media/icons/category/cate-363.svg")' }}><span>Camera</span></AStyle> {/**/}</div>
            <div className="item-categories-outer"><AStyle href="https://cellphones.com.vn/phu-kien/chuot-ban-phim-may-tinh.html" className="item-categories " data-src="https://cdn2.cellphones.com.vn/180x/https://cdn.cellphones.com.vn/media/icons/category/cate-663.svg" style={{ backgroundColor: 'rgb(253, 163, 99)', backgroundImage: 'url("https://cdn2.cellphones.com.vn/180x/https://cdn.cellphones.com.vn/media/icons/category/cate-663.svg")' }}><span>Chuột, bàn phím</span></AStyle> {/**/}</div>
            <div className="item-categories-outer"><AStyle href="https://cellphones.com.vn/phu-kien/the-nho-usb-otg.html" className="item-categories " data-src="https://cdn2.cellphones.com.vn/180x/https://cdn.cellphones.com.vn/media/icons/category/cate-109.svg" style={{ backgroundColor: 'rgb(255, 102, 102)', backgroundImage: 'url("https://cdn2.cellphones.com.vn/180x/https://cdn.cellphones.com.vn/media/icons/category/cate-109.svg")' }}><span>Thẻ nhớ, USB</span></AStyle> {/**/}</div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="item-categories-outer"><AStyle href="https://cellphones.com.vn/phu-kien/apple-care.html" className="item-categories " data-src="https://cdn2.cellphones.com.vn/180x/https://cdn.cellphones.com.vn/media/icons/category/cate-966.svg" style={{ backgroundColor: 'rgb(214, 214, 214)', backgroundImage: 'url("https://cdn2.cellphones.com.vn/180x/https://cdn.cellphones.com.vn/media/icons/category/cate-966.svg")' }}><span>Apple Care</span></AStyle> {/**/}</div>
            <div className="item-categories-outer"><AStyle href="https://cellphones.com.vn/phu-kien/bao-da-op-lung/airtag.html" className="item-categories " data-src="https://cdn2.cellphones.com.vn/180x/https://cdn.cellphones.com.vn/media/icons/category/cate-929.svg" style={{ backgroundColor: 'rgb(255, 173, 182)', backgroundImage: 'url("https://cdn2.cellphones.com.vn/180x/https://cdn.cellphones.com.vn/media/icons/category/cate-929.svg")' }}><span>Dây đeo Airtag</span></AStyle> {/**/}</div>
            <div className="item-categories-outer"><AStyle href="https://cellphones.com.vn/phu-kien/gaming-gear.html" className="item-categories " data-src="https://cdn2.cellphones.com.vn/180x/https://cdn.cellphones.com.vn/media/icons/category/cate-669.svg" style={{ backgroundColor: 'rgb(150, 253, 181)', backgroundImage: 'url("https://cdn2.cellphones.com.vn/180x/https://cdn.cellphones.com.vn/media/icons/category/cate-669.svg")' }}><span>Gaming Gear</span></AStyle> {/**/}</div>
            <div className="item-categories-outer"><AStyle href="https://cellphones.com.vn/phu-kien/camera/gimbal.html" className="item-categories " data-src="https://cdn2.cellphones.com.vn/180x/https://cdn.cellphones.com.vn/media/icons/category/cate-852.svg" style={{ backgroundColor: 'rgb(107, 206, 255)', backgroundImage: 'url("https://cdn2.cellphones.com.vn/180x/https://cdn.cellphones.com.vn/media/icons/category/cate-852.svg")' }}><span>Phụ kiện chụp ảnh</span></AStyle> {/**/}</div>
            <div className="item-categories-outer"><AStyle href="https://cellphones.com.vn/phu-kien/may-tinh-laptop.html" className="item-categories " data-src="https://cdn2.cellphones.com.vn/180x/https://cdn.cellphones.com.vn/media/icons/category/cate-44.svg" style={{ backgroundColor: 'rgb(216, 168, 255)', backgroundImage: 'url("https://cdn2.cellphones.com.vn/180x/https://cdn.cellphones.com.vn/media/icons/category/cate-44.svg")' }}><span>Phụ kiện Laptop</span></AStyle> {/**/}</div>
            <div className="item-categories-outer"><AStyle href="https://cellphones.com.vn/phu-kien/phu-kien-tien-ich/quat-mini.html" className="item-categories " data-src="https://cdn2.cellphones.com.vn/180x/https://cdn.cellphones.com.vn/media/icons/category/cate-775.svg" style={{ backgroundColor: 'rgb(239, 194, 255)', backgroundImage: 'url("https://cdn2.cellphones.com.vn/180x/https://cdn.cellphones.com.vn/media/icons/category/cate-775.svg")' }}><span>Quạt mini</span></AStyle> {/**/}</div>
            <div className="item-categories-outer"><AStyle href="https://cellphones.com.vn/phu-kien/balo-tui-chong-soc-laptop.html" className="item-categories " data-src="https://cdn2.cellphones.com.vn/180x/https://cdn.cellphones.com.vn/media/icons/category/cate-70.svg" style={{ backgroundColor: 'rgb(255, 133, 192)', backgroundImage: 'url("https://cdn2.cellphones.com.vn/180x/https://cdn.cellphones.com.vn/media/icons/category/cate-70.svg")' }}><span>Balo, túi chống sốc</span></AStyle> {/**/}</div>
            <div className="item-categories-outer"><AStyle href="https://cellphones.com.vn/do-choi-cong-nghe/day-deo-dong-ho.html" className="item-categories " data-src="https://cdn2.cellphones.com.vn/180x/https://cdn.cellphones.com.vn/media/icons/category/cate-707.svg" style={{ backgroundColor: 'rgb(255, 189, 189)', backgroundImage: 'url("https://cdn2.cellphones.com.vn/180x/https://cdn.cellphones.com.vn/media/icons/category/cate-707.svg")' }}><span>Dây đeo đồng hồ</span></AStyle> {/**/}</div>
            <div className="item-categories-outer"><AStyle href="https://cellphones.com.vn/linh-kien/o-cung/di-dong.html" className="item-categories " data-src="https://cdn2.cellphones.com.vn/180x/https://cdn.cellphones.com.vn/media/icons/category/cate-750.svg" style={{ backgroundColor: 'rgb(255, 209, 225)', backgroundImage: 'url("https://cdn2.cellphones.com.vn/180x/https://cdn.cellphones.com.vn/media/icons/category/cate-750.svg")' }}><span>Ổ cứng đi động</span></AStyle> {/**/}</div>
            <div className=""><FakeStyle> </FakeStyle> {/**/}</div>
          </div>
        </div>
      </div>
      <div>
        
        <div className="categories-content">
          <Typography.Title
          level={2}
          style={{ marginLeft: "100px", marginTop: "10px" }}
        >
          Linh kiện máy tính
        </Typography.Title>
          <div style={{ display: 'flex', justifyContent: 'center' }} className="categories-content-wrapper is-flex">
            <div className="item-categories-outer"><AStyle href="https://cellphones.com.vn/may-tinh-de-ban/lap-rap.html" className="item-categories " data-src="https://cdn2.cellphones.com.vn/180x/https://cellphones.com.vn/media/icons/category/cate-868.svg" style={{ backgroundColor: 'rgb(252, 165, 165)', backgroundImage: 'url("https://cdn2.cellphones.com.vn/180x/https://cellphones.com.vn/media/icons/category/cate-868.svg")' }}><span>PC ráp sẵn CellphoneS</span></AStyle> {/**/}</div>
            <div className="item-categories-outer"><AStyle href="https://cellphones.com.vn/linh-kien/cpu.html" className="item-categories " data-src="https://cdn2.cellphones.com.vn/180x/https://cdn.cellphones.com.vn/media/catalog/product/c/p/cpu_1.png" style={{ backgroundColor: 'rgb(253, 164, 175)', backgroundImage: 'url("https://cdn2.cellphones.com.vn/180x/https://cdn.cellphones.com.vn/media/catalog/product/c/p/cpu_1.png")' }}><span>CPU</span></AStyle> {/**/}</div>
            <div className="item-categories-outer"><AStyle href="https://cellphones.com.vn/linh-kien/mainboard-bo-mach-chu.html" className="item-categories " data-src="https://cdn2.cellphones.com.vn/180x/https://cdn.cellphones.com.vn/media/catalog/product/m/a/mainboard_1.png" style={{ backgroundColor: 'rgb(249, 168, 212)', backgroundImage: 'url("https://cdn2.cellphones.com.vn/180x/https://cdn.cellphones.com.vn/media/catalog/product/m/a/mainboard_1.png")' }}><span>Mainboard</span></AStyle> {/**/}</div>
            <div className="item-categories-outer"><AStyle href="https://cellphones.com.vn/linh-kien/ram.html" className="item-categories " data-src="https://cdn2.cellphones.com.vn/180x/https://cdn.cellphones.com.vn/media/catalog/product/r/a/ram_2.png" style={{ backgroundColor: 'rgb(196, 181, 253)', backgroundImage: 'url("https://cdn2.cellphones.com.vn/180x/https://cdn.cellphones.com.vn/media/catalog/product/r/a/ram_2.png")' }}><span>RAM</span></AStyle> {/**/}</div>
            <div className="item-categories-outer"><AStyle href="https://cellphones.com.vn/linh-kien/o-cung.html" className="item-categories " data-src="https://cdn2.cellphones.com.vn/180x/https://cdn.cellphones.com.vn/media/catalog/product/s/s/ssd_2.png" style={{ backgroundColor: 'rgb(165, 180, 252)', backgroundImage: 'url("https://cdn2.cellphones.com.vn/180x/https://cdn.cellphones.com.vn/media/catalog/product/s/s/ssd_2.png")' }}><span>Ổ cứng</span></AStyle> {/**/}</div>
            <div className="item-categories-outer"><AStyle href="https://cellphones.com.vn/linh-kien/card-man-hinh-vga.html" className="item-categories " data-src="https://cdn2.cellphones.com.vn/180x/https://cdn.cellphones.com.vn/media/catalog/product/v/g/vga.png" style={{ backgroundColor: 'rgb(147, 197, 253)', backgroundImage: 'url("https://cdn2.cellphones.com.vn/180x/https://cdn.cellphones.com.vn/media/catalog/product/v/g/vga.png")' }}><span>Card màn hình</span></AStyle> {/**/}</div>
            <div className="item-categories-outer"><AStyle href="https://cellphones.com.vn/linh-kien/nguon-may-tinh-psu.html" className="item-categories " data-src="https://cdn2.cellphones.com.vn/180x/https://cdn.cellphones.com.vn/media/catalog/product/p/s/psu.png" style={{ backgroundColor: 'rgb(110, 231, 183)', backgroundImage: 'url("https://cdn2.cellphones.com.vn/180x/https://cdn.cellphones.com.vn/media/catalog/product/p/s/psu.png")' }}><span>Nguồn máy tính</span></AStyle> {/**/}</div>
            <div className="item-categories-outer"><AStyle href="https://cellphones.com.vn/linh-kien/tan-nhiet.html" className="item-categories " data-src="https://cdn2.cellphones.com.vn/180x/https://cdn.cellphones.com.vn/media/catalog/product/t/_/t_n_nhi_t_2.png" style={{ backgroundColor: 'rgb(252, 211, 75)', backgroundImage: 'url("https://cdn2.cellphones.com.vn/180x/https://cdn.cellphones.com.vn/media/catalog/product/t/_/t_n_nhi_t_2.png")' }}><span>Tản nhiệt</span></AStyle> {/**/}</div>
            <div className="item-categories-outer"><AStyle href="https://cellphones.com.vn/linh-kien/vo-case-may-tinh.html" className="item-categories " data-src="https://cdn2.cellphones.com.vn/180x/https://cdn.cellphones.com.vn/media/catalog/product/c/a/case_1.png" style={{ backgroundColor: 'rgb(253, 186, 116)', backgroundImage: 'url("https://cdn2.cellphones.com.vn/180x/https://cdn.cellphones.com.vn/media/catalog/product/c/a/case_1.png")' }}><span>Case máy tính</span></AStyle> {/**/}</div>
            <div className=""><FakeStyle> </FakeStyle> {/**/}</div>
          </div>
        </div>
      </div>
    </>
  );
}
const FakeStyle = styled.div`
  display: block;
    overflow: hidden;
    text-decoration: none;
    min-height: 125px;
    width: 100px;
    color: #fff;
    margin: 10px;
`

const AStyle = styled.a`
  width: 100%;
    display: block;
    overflow: hidden;
    text-decoration: none;
    border-radius: 10px;
    background-repeat: no-repeat;
    background-position: 100% 100%;
    background-size: 80px;
    box-shadow: 0 1px 2px 0 rgb(60 64 67 / 10%), 0 2px 6px 2px rgb(60 64 67 / 15%);
    min-height: 125px;
    width: 100px;
    margin: 10px;
    color: #fff;
    text-align: left;
    font-weight: bold ;
    padding: 5px
`;

const StarStyle = styled.span`
  color: orange;

`
export default GroupExample;
