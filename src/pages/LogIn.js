import React, { useContext, useState, useEffect } from 'react'
import { Form, Input, Button, Checkbox, Card } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { AuthContext } from '../providers/AuthProvider'
import { Redirect } from 'react-router-dom'
// import Axios from 'axios'
import { publicFetch } from '../Helpers/Helpers'
import { FetchContext } from '../providers/FetchProvider'
import axios from 'axios'

export const LogIn = () => {
  const fetchContext = useContext(FetchContext)
  const authContext = useContext(AuthContext)
  const [loginSuccess, setLoginSuccess] = useState()
  const [loginError, setLoginError] = useState()
  const [loginLoading, setLoginLoading] = useState(false)
  const [redirectOnLogin, setRedirectOnLogin] = useState(false)
  const authAxios = axios.create({
    baseURL: process.env.REACT_APP_API_URL
  })
  const submitCredentials = async (values) => {
    try {
      setLoginLoading(true)
      const { data } = await authAxios.post('users/login', values, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      authContext.setAuthState(data)
      setLoginSuccess(data.message)
      setLoginError('')
      setRedirectOnLogin(true)
    } catch (error) {
      console.log(error, 'erro')
      setLoginLoading(false)
      const { data } = error.response
      setLoginError(data.message)
      console.log(data.message, 'mesag')
      setLoginSuccess('')
    }
  }

  return (
    <>
      {redirectOnLogin && <Redirect to='./dashboard' />}
      <Card style={{ width: '50%' }}>
        <Form
          name='normal_login'
          className='login-form'
          initialValues={{
            remember: true
          }}
          onFinish={submitCredentials}
        >
          <Form.Item
            name='username'
            rules={[
              {
                required: true,
                message: 'Please input your Username!'
              }
            ]}
          >
            <Input
              prefix={<UserOutlined className='site-form-item-icon' />}
              placeholder='Username'
            />
          </Form.Item>
          <Form.Item
            name='password'
            rules={[
              {
                required: true,
                message: 'Please input your Password!'
              }
            ]}
          >
            <Input
              prefix={<LockOutlined className='site-form-item-icon' />}
              type='password'
              placeholder='Password'
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name='remember' valuePropName='checked' noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <a className='login-form-forgot' href=''>
              Forgot password
            </a>
          </Form.Item>
          <Form.Item>
            <Button type='primary' htmlType='submit' className='login-form-button'>
              Log in
            </Button>
            Or <a href=''>register now!</a>
          </Form.Item>
        </Form>
      </Card>
    </>
  )
}
