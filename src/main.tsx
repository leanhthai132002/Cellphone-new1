import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'antd/dist/antd.css';
import { Provider } from "react-redux";
import {BrowserRouter} from 'react-router-dom'
import store from './pages/Home/redux/store';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter> 
     <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
)
