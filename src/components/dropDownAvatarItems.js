import React, { useContext, useEffect, useRef, useState } from 'react'
import { Menu, Dropdown } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import { firstLetterAvatars } from './Avatar'
import { AuthContext } from '../providers/AuthProvider'
import { useHistory } from 'react-router-dom'

export const DropDownAvatarItems = () => {
  const authContext = useContext(AuthContext)

  const menu = (
    <Menu>
      <Menu.Item key='0'>
        <a onClick={(e) => authContext.LogOut()}>log out</a>
      </Menu.Item>
      {/* <Menu.Item key='1'>
        <a href='http://www.taobao.com/'>2nd menu item</a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key='3'>3rd menu item</Menu.Item> */}
    </Menu>
  )
  return (
    <Dropdown overlay={menu} trigger={['click']}>
      {/* <a className='ant-dropdown-link' onClick={(e) => e.preventDefault()}> */}
      <DownOutlined />
      {/* </a> */}
    </Dropdown>
  )
}
