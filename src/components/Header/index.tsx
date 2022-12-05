import React, { useState } from "react";
import { SubmitHandler } from "react-hook-form";
import { Link, Navigate, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { signin } from "../../api/auth";
import LogoImage from "../../assets/images/logo.png";
import AutoComplete from "../Input/AutoComplete";

if (localStorage.getItem("user")) {
  Header.defaultProps = {
    name: "Chào mừng " + JSON.parse(localStorage.getItem("user")|| '{}').user.email,
  };
}


function Header(props: any) {
  const navigate = useNavigate();
  const [isLoggedin, setIsLoggedin] = useState(false);
  const info = localStorage.getItem("user");

  const logout = () => {
    localStorage.removeItem("user");
    setIsLoggedin(false);
    navigate("/");
  };

  return (
    <Wrapper>
      <Container>
        <Link to={"/"}>
          <Logo src={LogoImage} />
        </Link>
        <AutoComplete />
        <ul>
          <UlStyle>Gọi mua hàng</UlStyle>
          <UlStyle>Cửa hàng gần bạn</UlStyle>
          <UlStyle>Tra cứu đơn hàng</UlStyle>
          <UlStyle>
            <Link style={{ color: "#fff" }} to="/cart">
              Giỏ hàng
            </Link>
          </UlStyle>
          <UlStyle>
            {!info ? (
              <Link style={{ color: "#fff" }} to="/signin">
                Đăng nhập
              </Link>
            ) : (
              <>
                <h5 style={{ color: "#fff" }}>{props.name}</h5>{" "}
                <OutStyle onClickCapture={logout}>Đăng xuất</OutStyle>
              </>
            )}
          </UlStyle>
        </ul>
      </Container>
    </Wrapper>
  );
}

export default Header;

const UlStyle = styled.li`
  display: inline-block;
  padding: 0 10px;
  padding-top: 10px;
  color: #fff;
`;

const Logo = styled.img`
  width: 200px;
  height: auto;
  margin-right: 100px;
`;

const Wrapper = styled.div`
  background-color: #e0052b;
`;

const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;
const OutStyle = styled.p`

  :hover {
    cursor: pointer;
  }
`;
