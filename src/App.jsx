import React, { useEffect, useState  } from 'react'
import MainRoutes from './router/MainRoutes'
import Header from './components/Header'
import Footer from './components/Footer'
import { useDispatch } from 'react-redux'
import {  asyncCurrentUser } from './store/actions/userAction'
import { asyncloadProducts } from './store/actions/productsAction'
import PreLoader from './components/preLoader/PreLoader'

const App = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    dispatch(asyncCurrentUser());
    dispatch(asyncloadProducts());

   const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds

    return () => clearTimeout(timer);
  }, [dispatch]);
  
  return loading ?<PreLoader/> :(
    <>
    
    <Header/>
      <MainRoutes/>
      <Footer/>
    </>
  )
}

export default App