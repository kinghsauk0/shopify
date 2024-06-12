import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter,createRoutesFromElements, RouterProvider,Route } from 'react-router-dom';
import Home from './pages/Home';
import Man from './pages/Man';
import Woman from './pages/Woman';
import About from './pages/About';
import Singup from './pages/Singup';
import Checkout from './pages/Checkout';
import { CheckoutDataProvider } from './context/CheckoutData.context';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
       <Route path='' element={<Home/>}/>
       <Route path='man' element={<Man/>}/>
       <Route path='woman' element={<Woman/>}/>
       <Route path='about' element={<About/>}/>
       <Route path='singup' element={<Singup/>}/>
       <Route path='checkout' element={<Checkout/>}/>
    </Route>
  )
)





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CheckoutDataProvider>
    <RouterProvider router={router}/>
    </CheckoutDataProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
