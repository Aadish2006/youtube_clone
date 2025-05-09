import React from 'react'
import { Stack } from '@mui/material'
// stack is container component
import { Link } from 'react-router-dom'
import { logo } from '../utils/constants'
import SearchBar from './SearchBar'
const Navbar = () => {
  return (
    <Stack direction="row" alignItems="center" p="2" sx={{ position: "sticky", background: "#000", top: 0, justifyContent: "space-between", }}>
      <Link to="/" style={{ display: "flex", alignItems: "center", paddingLeft:"20px"}} >
        <img src={logo} alt="logo" height="45"  />
      </Link>
      <SearchBar />
    </Stack>
  )
}

export default Navbar