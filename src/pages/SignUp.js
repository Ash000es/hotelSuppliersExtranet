import React, { useState } from 'react'
import { Form, Input, Button, Checkbox, Card } from 'antd'
import Axios from 'axios'
import { publicFetch } from '../Helpers/Helpers'
import { Redirect } from 'react-router-dom'
const layout = {
  labelCol: {
    span: 8
  },
  wrapperCol: {
    span: 16
  }
}
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16
  }
}

export const SignUp = () => {
  const [signupSuccess, setSignupSuccess] = useState()
  const [signupError, setSignupError] = useState()
  const [loginLoading, setLoginLoading] = useState(false)
  const [redirectOnLogin, setRedirectOnLogin] = useState(false)

  const submitCredentials = async (values) => {
    try {
      setLoginLoading(true)
      console.log('Success:', values)
      // console.log(publicFetch, 'fetch')
      const { data } = await Axios.post('http://localhost:5000/users/signup', values, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      setSignupSuccess(data.message)
      setSignupError('')

      console.log('Success:', data)
      setRedirectOnLogin(true)
    } catch (error) {
      setLoginLoading(false)
      const { data } = error.response
      setSignupError(data.message)
      console.log(data.message)
      setSignupSuccess('')
    }
  }
  const onFinish = (values) => {
    console.log('Success:', values)
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <>
      {redirectOnLogin && <Redirect to='./dashboard' />}
      <Card style={{ width: '50%' }}>
        <Form
          {...layout}
          name='basic'
          initialValues={{
            remember: true
          }}
          onFinish={submitCredentials}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label='First Name'
            name='firstName'
            rules={[
              {
                required: true,
                message: 'Please input your name!'
              }
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label='Last Name'
            name='lastName'
            rules={[
              {
                required: true,
                message: 'Please input your last name!'
              }
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label='Username'
            name='username'
            rules={[
              {
                required: true,
                message: 'Please input your username!'
              }
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label='Password'
            name='password'
            rules={[
              {
                required: true,
                message: 'Please input your password!'
              }
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item {...tailLayout} name='remember' valuePropName='checked'>
            <Checkbox> Remember me </Checkbox>{' '}
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button type='primary' htmlType='submit'>
              Submit{' '}
            </Button>{' '}
          </Form.Item>{' '}
        </Form>
      </Card>
    </>
  )
}
