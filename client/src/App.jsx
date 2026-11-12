import Layout from './pages/Layout'
import React, { useEffect } from 'react'
import { Routes,Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import ResumeBuilder from './pages/ResumeBuilder'
import Preview from './pages/Preview'
import Home from './pages/Home'
import Login from './pages/Login'
import { useDispatch } from 'react-redux'
import api from './config/api'
import {login, setLoading,logout} from './app/features/authSlice'
import {Toaster} from 'react-hot-toast'


const App = () => {

  const dispatch = useDispatch()
  const getUserData = async () => {
      try {
          const { data } = await api.get("/api/users/data");

          if (data.user) {
              dispatch(login({ user: data.user }));
          }

      } catch (err) {
          console.log(err.response?.data?.message || err.message);
          dispatch(logout());
      } finally {
          dispatch(setLoading(false));
      }
  };


  useEffect(()=>{
    getUserData()
  },[])
  return (
    <>
    <Toaster/>
     <Routes>
        <Route path='/' element={<Home/>}/>

        <Route path='/app' element={<Layout/>}>
           <Route index element={<Dashboard/>}/>
           <Route path='builder/:resumeId' element={<ResumeBuilder/>}/>
        </Route>

        <Route path='/view/:resumeId' element={<Preview/>}/>
        
     </Routes>
     
    </>
  )
}

export default App
