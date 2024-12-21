import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Account/Login'
import SignUp from './components/Account/SignUp'
import MainLayout from './Layout/MainLayout'
import Index from './Pages/Index'
import Chat from './components/Chats/Chat'

function App () {
  return (
    <div className='bg-[#efeff846]'>
      <Routes>
        <Route path='/' element={<MainLayout />}>
        <Route path='/' element={<Chat />} />
        <Route path="/chat/:idName" element={<Chat />} />
         
          <Route path='login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
