import React, { useState } from 'react'
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
  Row,
  Col,
  Checkbox,
  AutoComplete
} from 'antd'

export const FormStepOne = () => {
  const [componentSize, setComponentSize] = useState('default')
  const { Option } = Select
  const AutoCompleteOption = AutoComplete.Option
  const prefixSelector = (
    <Form.Item name='prefix' noStyle>
      <Select
        style={{
          width: 70
        }}
      >
        <Option value='86'>+86</Option>
        <Option value='87'>+87</Option>
      </Select>
    </Form.Item>
  )
  const [autoCompleteResult, setAutoCompleteResult] = useState([])

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size)
  }
  const onWebsiteChange = (value) => {
    if (!value) {
      setAutoCompleteResult([])
    } else {
      setAutoCompleteResult(['.com', '.org', '.net'].map((domain) => `${value}${domain}`))
    }
  }

  const websiteOptions = autoCompleteResult.map((website) => ({
    label: website,
    value: website
  }))

  return (
    <>
      <h4>Welcome to ladybirdy.com, within minutes you could be selling your unsold inventory</h4>
      <Form
        labelCol={{
          span: 4
        }}
        wrapperCol={{
          span: 14
        }}
        layout='vertical'
        initialValues={{
          size: componentSize
        }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
      >
        <Form.Item label='Form Size' name='size'>
          <Radio.Group>
            <Radio.Button value='small'>Small</Radio.Button>
            <Radio.Button value='default'>Default</Radio.Button>
            <Radio.Button value='large'>Large</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label='name of your accomodation'>
          <Input />
        </Form.Item>
        <Form.Item label='number of stars'>
          <Select>
            <Select.Option value='demo'>3 stars</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          name='website'
          label='Website'
          rules={[
            {
              required: true,
              message: 'Please input website!'
            }
          ]}
        >
          <AutoComplete options={websiteOptions} onChange={onWebsiteChange} placeholder='website'>
            <Input />
          </AutoComplete>
        </Form.Item>
        <Form.Item label='name of contact person'>
          <Input />
        </Form.Item>
        <Form.Item
          name='phone'
          label='Phone Number'
          rules={[{ required: true, message: 'Please input your phone number!' }]}
        >
          <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
        </Form.Item>
        <Form.Item name='radio-group' label='are you using a channel manager'>
          <Radio.Group>
            <Radio value='a'>Yes</Radio>
            <Radio value='b'>No</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label='name of channel manager'>
          <Input />
        </Form.Item>
        <Form.Item
          name='select'
          label='Select'
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Please select your country!'
            }
          ]}
        >
          <Form.Item label='street name'>
            <Input />
          </Form.Item>
          <Select placeholder='Please select a country'>
            <Option value='china'>China</Option>
            <Option value='usa'>U.S.A</Option>
          </Select>
        </Form.Item>
        <Form.Item label='city name'>
          <Input />
        </Form.Item>
        <Form.Item label='post code'>
          <Input />
        </Form.Item>
      </Form>
    </>
  )
}
