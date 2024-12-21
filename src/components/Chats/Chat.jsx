import React, { useContext } from 'react'
import { useStateContext } from '../../Context/ContextProvider'
import { useParams } from 'react-router-dom'
import { MdOutlineVideoCall } from 'react-icons/md'
import { MdOutlinePhoneForwarded } from 'react-icons/md'
import { CiMenuKebab } from 'react-icons/ci'

const Chat = () => {
  const { users } = useStateContext()
  const { idName } = useParams()
  const user = users.find(user => user.id.name === idName)

  console.log(user)

  if (!user) {
    return <p>User not found.</p>
  }
  return (
    <div
      style={{
        boxShadow: '0px 0px 40px rgba(0, 0, 0, 0.3)'
      }}
      className={`flex relative ml-[30px] items-start py-5 justify-center   rounded-md xl:w-[100%] lg:w-[60%] md:w-[40%] w-[90%]  bg-stone-100 h-[100%] `}
    >
      <div className='flex border-b-[1px] border-stone-300 pb-[30px]  px-[20px] w-full items-center justify-between'>
        <div className='flex gap-[20px]'>
          <img
            src={user.picture.large}
            alt={`${user.name.first} ${user.name.last}`}
            className='w-[70px] h-[70px] rounded-full'
          />
          <div className='flex flex-col gap-2'>
            <p className='text-[20px] font-[500]'>{`${user.name.first} ${user.name.last}`}</p>
            <p className='text-green-700 text-[15px] font-[400]'>typing...</p>
          </div>
        </div>
        <div className='flex items-center gap-3 justify-between'>
          <MdOutlineVideoCall className='text-[30px] text-stone-500 cursor-pointer' />
          <MdOutlinePhoneForwarded className='text-[25px] text-stone-500 cursor-pointer' />
          <CiMenuKebab className='text-[25px] text-stone-500 cursor-pointer' />
        </div>
      </div>
      
    </div>
  )
}

export default Chat
