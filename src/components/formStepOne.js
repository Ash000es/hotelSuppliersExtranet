import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  InputNumber,
  TreeSelect,
  Switch,
  Row,
  Col,
  Checkbox,
  AutoComplete
} from 'antd'

export const FormStepOne = (props) => {
  const [componentSize, setComponentSize] = useState('default')
  const {
    accommodationType,
    categoryName,
    contactDetails,
    name,
    city,
    postCode,
    areaName,
    address,
    email,
    phones,
    destinationName
  } = props.formState
  const { setFormState } = props.setFormState

  const onFormLayoutChange = (size, e) => {
    console.log(size, e)
    // setFormState(size)
    // setComponentSize(size)
  }

  const initialValues = {
    accommodationType,
    categoryName,
    contactDetails,
    name,
    city,
    postCode,
    areaName,
    address,
    email,
    phones,
    destinationName
  }

  return (
    <>
      <h4>Welcome</h4>

      <Form
        labelCol={{
          span: 4
        }}
        wrapperCol={{
          span: 14
        }}
        layout='vertical'
        initialValues={{
          size: 'default'
        }}
        onValuesChange={onFormLayoutChange}
        size='default'
      >
        <Form.Item label='name of the hotel' name='name'>
          <Input />
        </Form.Item>
        <Form.Item label='type of accommodation' name='accommodationType'>
          <Select>
            <Select.Option value='hotel'>hotel</Select.Option>
            <Select.Option value='villa'>villa</Select.Option>
            <Select.Option value='Apartment'>Apartment</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label='TreeSelect'>
          <TreeSelect
            treeData={[
              {
                title: 'Light',
                value: 'light',
                children: [
                  {
                    title: 'Bamboo',
                    value: 'bamboo'
                  }
                ]
              }
            ]}
          />
        </Form.Item>
        <Form.Item label='Cascader'>
          <Cascader
            options={[
              {
                value: 'zhejiang',
                label: 'Zhejiang',
                children: [
                  {
                    value: 'hangzhou',
                    label: 'Hangzhou'
                  }
                ]
              }
            ]}
          />
        </Form.Item>
        <Form.Item label='InputNumber'>
          <InputNumber />
        </Form.Item>
      </Form>
    </>
  )
}
