import React from 'react'
import styled from 'styled-components'


function Footer() {
  return (
    <div style={{ margin: '0 60px', marginTop: '100px' }}>
      <GridStyle>
        <div>
          <p>Tìm cửa hàng</p>
          <p>Tìm cửa hàng gần nhất</p>
          <p>Mua hàng từ xa</p>
          <p style={{ color: 'red' }}>Gặp trực tiếp cửa hàng gần nhất (Zalo hoặc gọi điện)</p>
          <p>Phương thức thanh toán</p>
          <ImgStyle src="https://i.imgur.com/TsQF4ru.png" alt="" />
          <ImgStyle src="https://i.imgur.com/xOhLpWY.png" alt="" />
          <ImgStyle style={{ width: '60px', }} src="https://i.imgur.com/CM5p7fF.png" alt="" />
          <ImgStyle style={{ width: '60px' }} src="https://i.imgur.com/xC7Ll1P.png" alt="" />
          <ImgStyle style={{ width: '60px' }} src="https://i.imgur.com/jurKyj9.png" alt="" />
        </div>
        <div>
          <p>Gọi mua hàng: 1800.2044 (8h00 - 22h00)</p>
          <p>Gọi khiếu nại: 1800.2063 (8h00 - 21h30)</p>
          <p>Gọi bảo hành: 1800.2064 (8h00 - 21h00)</p>
          <h6>Đối tác dịch vụ bảo hành</h6>
          <p>Điện Thoại - Máy tính</p>
          <h6>Trung tâm bảo hành uỷ quyền Apple</h6>
          <img style={{ width: '216px' }} src="https://i.imgur.com/0if1jH3.png" alt="" />
        </div>
        <div>
          <p>Mua hàng và thanh toán Online</p>
          <p>Mua hàng trả góp Online</p>
          <p>Tra thông tin đơn hàng</p>
          <p>Tra điểm Smember</p>
          <p>Tra thông tin bảo hành</p>
          <b>Tra cứu hoá đơn VAT điện tử</b>
          <p>Trung tâm bảo hành chính hãng</p>
          <p>Quy định về việc sao lưu dữ liệu</p>
          <p style={{ color: 'red' }}>Dịch vụ bảo hành điện thoại</p>
        </div>
        <div>
          <p>Quy chế hoạt động</p>
          <p>Chính sách Bảo hành</p>
          <p>Liên hệ hợp tác kinh doanh</p>
          <p>Khách hàng doanh nghiệp (B2B)</p>
          <p style={{ color: 'red' }}>Ưu đãi thanh toán</p>
          <p>Tuyển dụng</p>
        </div>
      </GridStyle>
      <Grid2Style>
        <FontStyle>
          Điện thoại iPhone 13
          -
          Điện thoại iPhone 12
          -
          Điện thoại iPhone 11
          Điện thoại iPhone 13 Pro Max
          -
          Điện thoại iPhone 11 Pro Max
          iPhone cũ giá rẻ
          -
          iPhone 13 cũ
          -
          iPhone 12 cũ
          -
          iPhone 11 cũ
        </FontStyle>
        <FontStyle>
          Điện thoại iPhone
          -
          Điện thoại Samsung
          -
          Điện thoại Samsung A
          Điện thoại OPPO
          -
          Điện thoại Xiaomi
          -
          Điện thoại Vivo
          -
          Điện thoại Nokia
          Samsung Fold 3
          -
          Samsung S22
          -
          Samsung A73
          -
          Samsung A53
        </FontStyle>
        <FontStyle>Laptop
          -
          Laptop HP
          -
          Laptop Dell
          -
          Laptop Acer
          Microsoft Surface
          -
          Laptop Lenovo
          -
          Laptop Asus
          Máy tính để bàn
          -
          Màn hình máy tính
          -
          Camera
          -
          Camera hành trình</FontStyle>
      </Grid2Style>
      <FontStyle style={{marginTop: '10px'}}>Công ty TNHH Thương mại và dịch vụ kỹ thuật DIỆU PHÚC - GPĐKKD: 0316172372 do sở KH & ĐT TP. HCM cấp ngày 02/03/2020. Địa chỉ: 350-352 Võ Văn Kiệt, Phường Cô Giang, Quận 1, Thành phố Hồ Chí Minh, Việt Nam. Điện thoại: 028.7108.9666.</FontStyle>
    </div>
  )
}

const GridStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 100px;
`

const ImgStyle = styled.img`
  width: 40px;
  margin: 5px
`
const Grid2Style = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 100px;
  margin-top: 50px;
`

const FontStyle = styled.div`
  font-size: 13px;
`
export default Footer