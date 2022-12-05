import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { signin } from '../../api/auth';
type FormInputs = {
  _id: string,
  phone: string;
  roll: string;
  email: string;
  password: string;
}
const Signin = () => {
  const { register, handleSubmit, formState } = useForm<FormInputs>();
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<FormInputs> = async data => {
    
    try {
      const { data: user } = await signin(data);
      if (user.user.roll === 'user') {
        
        alert("Đăng nhập thành công")
        localStorage.setItem('user', JSON.stringify(user))
        navigate("/")
        
      }else{
        alert("Đăng nhập thành công")
        localStorage.setItem('user', JSON.stringify(user))
        navigate("/admin")
      }
      
    } catch (error) {
      alert("Sai toàn khoản hoặc mật khẩu")
    }
    
  }
  return (
    <BodyStyle>
      <br />
      <br />
      <br />
      <FormStyle style={{paddingBottom: '128px'}} action="" method="POST" onSubmit={handleSubmit(onSubmit)}>
        <div>
        <div className="form-group">
          <input type="email" placeholder='Email' className="form-control form-control-user" id="exampleInputEmail" aria-describedby="emailHelp"{...register('email', { required: true })} />
        </div>
        <br />
        <div className="form-group">
          <input type="password" placeholder='Mật khẩu' className="form-control form-control-user" id="exampleInputPassword" {...register('password', { required: true })} />
        </div>
        <span></span>
        <section />
        <br />
        <input type="submit" name="dangnhap" value="Đăng nhập" className="btn btn-primary form-control btn-user btn-block" defaultValue="Đăng nhập" />
        <section />
        <br />
        <p>Chưa có tài khoản? <Link to='/signup'>Đăng kí ngay</Link></p>
        <div className='form-group'>
          <p style={{ textAlign: 'center' }} >Hoặc đăng nhập bằng</p>
          <div style={{textAlign: 'center'}}>
            <ImgStyle src="https://i.imgur.com/IDObCCF.png" alt="" />
            <ImgStyle src="https://i.imgur.com/rHtLcZG.png" alt="" />
          </div>
        </div>
        </div>
      </FormStyle>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
  
    </BodyStyle>

  )
}

const FormStyle = styled.form`
  border-radius: 20px;
  padding: 100px;
  width: 50%;
  margin: auto;
  background-color: #fff;
  padding-top: 100px;
`
const BodyStyle = styled.div`
  background-color: #E5E5E5;
`

const ImgStyle = styled.img`
  width: 58px;
  margin: 10px;
  margin-bottom: 0px;
`
export default Signin