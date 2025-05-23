import React from 'react'
import {Stack} from '@mui/material'
import { categories } from '../utils/constants'
import { Opacity } from '@mui/icons-material';
const SideBar = ({selectedCategory, setSelectedCategory}) => {
  return (
    <Stack 
        direction="row" 
        sx={{ overflowY: 'auto', height: { sx: 'auto', md: '95%' }, flexDirection: { md: 'column' } }}>
        
        {categories.map((category)=>(
            <button
            className='category-btn'
            onClick={() => setSelectedCategory(category.name)}
            style={{background: category.name === selectedCategory && '#FC1503', color: '#fff'}}
            key={category.name}>
                <span style={{color : category.name === selectedCategory ? '#fff' : 'red',marginRight:'15px'}}>{category.icon}</span>
                <span style={{Opacity: category.name === selectedCategory ? '1' : '0.8'}}>{category.name}</span>
            </button>
        ))}
    </Stack>
  )
}

export default SideBar