import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { MdOutlinePushPin } from 'react-icons/md'
import { useStateContext } from '../../Context/ContextProvider'

const Sidebar = () => {
  const [user, setUsers] = useState([])
  const [usersList, setUsersList] = useState([])
  const [filteredUsers, setFilteredUsers] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  

  const { users, toggleSearchBar, handleParentClick, isSearchOpen } = useStateContext()


console.log(users)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get('https://randomuser.me/api/?results=1')
        setUsers(response.data.results)
        setLoading(false)
      } catch (err) {
        setError('Error fetching user data')
        setLoading(false)
      }
    }
  

    fetchUser()
    setFilteredUsers(users);
  }, [users])

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
  
    // If query is empty, show all users
    if (query === "") {
      setFilteredUsers(users);
      return;
    }
  
    // Filter users based on the query
    const filtered = users.filter(
      (user) =>
        user.name.first.toLowerCase().includes(query) ||
        user.name.last.toLowerCase().includes(query) ||
        user.email.toLowerCase().includes(query)
    );
    setFilteredUsers(filtered);
  };
  
  return (
    <div
      onClick={handleParentClick}
      style={{
        boxShadow: '0px 0px 40px rgba(0, 0, 0, 0.3)'
      }}
      className={`flex relative items-start py-5 justify-center   rounded-md xl:w-[60%] lg:w-[60%] md:w-[40%] w-[90%]  bg-stone-100 h-[100%] `}
    >
      {isSearchOpen && (
        <div
          onClick={e => e.stopPropagation()}
          className='absolute top-0 bg-black z-30 h-[20vh] opacity-90 flex items-center justify-center left-0 right-0 mx-auto w-[100%]   shadow-lg rounded-lg p-4  transition-transform transform origin-top animate-fade-in-down'
        >
          <input
            type='text'
            value={searchQuery}
            onChange={handleSearch}
            placeholder='Search...'
            className='w-full px-4 py-2 text-primary4  border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
        </div>
      )}
      <div className='flex flex-col w-full h-[100%] px-[22px] z-20 '>
        <div className='flex  items-center z-40 mb-10 mt-[10px]  bg-transparent w-full  h-[60px]   justify-between '>
          <div className='flex items-center justify-between w-full'>
            {user.map((user, index) => (
              <div className='flex items-center  gap-[20px]' key={index}>
                <img
                  src={user.picture.thumbnail}
                  width={90}
                  className='object-contain rounded-full'
                  alt={user.name.first}
                />
                <div className='flex flex-col gap-[10px]'>
                  <p className='text-[20px] font-[600]'>{`${user.name.first} ${user.name.last}`}</p>
                  <Link className='text-[20px] text-stone-600'>
                    Account info
                  </Link>
                </div>
              </div>
            ))}

            <div className='flex'>
              <FaSearch onClick={toggleSearchBar} className='cursor-pointer' />
            </div>
          </div>
        </div>
        <div className='flex mb-10 items-center justify-between px-4 w-full bg-stone-300 h-[70px] rounded-3xl'>
          <button
            className='bg-white px-[30px] py-2 rounded-3xl'
            style={{
              boxShadow: '0px 0px 14px rgba(0, 0, 0, 0.3)'
            }}
          >
            All
          </button>
          <button className='px-[30px] py-2 rounded-3xl'>Personal</button>
          <button className='px-[30px] py-2 rounded-3xl'>Groups</button>
        </div>

        <div className='flex flex-col w-full'>
          <div className='flex items-center justify-between w-full mb-5'>
            <p className='text-[20px] text-stone-600'>Pinned Message</p>
            <MdOutlinePushPin />
          </div>

          <div className='flex flex-col w-full h-96 py-2 gap-[30px] overflow-auto'>
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user, index) => (
                <Link to={`/chat/${user.id.name}`}
                  className='flex items-center cursor-pointer gap-[10px] pr-[10px]'
                  key={index}
                >
                  <img
                    src={user.picture.thumbnail}
                    width={50}
                    className='object-contain rounded-full'
                    alt={user.name.first}
                  />
                  <div className='flex flex-col w-full'>
                    <div className='flex items-center justify-between w-full'>
                      <p className='text-[18px] font-[600]'>{`${user.name.first} ${user.name.last}`}</p>
                      <p>9:12AM</p>
                    </div>
                    <div className='flex items-center justify-between w-full'>
                      <p>Hello this is the first message</p>
                      <div className='flex items-center justify-center h-[30px] w-[30px] rounded-full bg-[#ff4549]'>
                        <p className='text-white'>2</p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <div className='flex items-center justify-center w-full h-full'>
                <p className='text-[18px] text-stone-600'>No user found</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
