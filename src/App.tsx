import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import ProductAdminPage from './pages/Admin/Product/product'
import AdminLayout from './components/Layout/admin'
import UserLayout from './components/Layout/user'
import HomePage from './pages/Home/home'
import DetailPage from './pages/Home/Detail'
import FormProduct from './pages/Admin/Product/form'
import Signin from './pages/auth/Signin';
import CartPage from './pages/Home/Cart'
import Signup from './pages/auth/Signup'
import UsersAdmin from './pages/Admin/user'

function App(props: any) {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <Routes>
        <Route path='signin' element={<Signin />}> </Route>
        <Route path='signup' element={<Signup />}></Route>
        <Route path='cart' element={<CartPage />}></Route>
        {/* User layout */}
        <Route path='/' element={<UserLayout  />}>
          <Route index element={<HomePage />} />
          <Route path='detail/:id' element={<DetailPage />} />
          
        </Route>
        {/* Admin layout */}
        <Route path='admin' element={<AdminLayout />}>
          <Route index element={<ProductAdminPage />} />
          <Route path='users' element={<UsersAdmin />} />
          <Route path='products/add' element={<FormProduct />} />
          <Route path='products/edit/:id' element={<FormProduct />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
