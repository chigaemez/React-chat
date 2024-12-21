import React, { createContext, useContext, useEffect, useState } from 'react'

const StateContext = createContext()
 



export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true)
  const [deleteModal, setDeleteModal] = useState(false)
  const [deactivateModal, setDeactivateModal] = useState(false)
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [successMessage, setSuccessMessage] = useState('')
  const [openProfileUpdate, setOpenProfileUpdate] = useState(false)
  const [openImageUpdate, setOpenImageUpdate] = useState(false)
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=10")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
        setLoading(false);
      });
  }, []);


  const toggleSearchBar = () => {
    setIsSearchOpen(!isSearchOpen)
  }

  const handleParentClick = () => {
    if (isSearchOpen) {
      setIsSearchOpen(false)
    }
  }

  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        deleteModal,
        setDeleteModal,
        deactivateModal,
        setDeactivateModal,
        email,
        setEmail,
        error,
        setError,
        successMessage,
        setSuccessMessage,
        openProfileUpdate,
        setOpenProfileUpdate,
        openImageUpdate,
        setOpenImageUpdate,
        users,
        loading,
        setUsers,
        loading,
        setLoading,
        isSearchOpen,
        setIsSearchOpen,
        handleParentClick,
        toggleSearchBar,
       
      }}
    >
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext)
