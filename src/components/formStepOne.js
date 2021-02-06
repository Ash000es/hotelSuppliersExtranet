import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import { coreArray, rezArray, bdcPhotosTag, avail } from '../Helpers/Constants'
import {
  findDayDifference,
  filterRatesByDateRange,
  filterAvilabByDateRange
} from '../Helpers/Helpers'
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
  const [form] = Form.useForm()
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
  } = props.fieldValues
  const { setFieldsValue } = props.setFieldsValue

  const onFormLayoutChange = (size, trigger) => {
    console.log(size, trigger)
    form.setFieldsValue(size)
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
  const rates = [
    {
      '2021-03-10': 201.58,
      '2021-03-11': 201.58,
      '2021-03-12': 241.91,
      '2021-03-13': 241.91,
      '2021-03-14': 201.58,
      '2021-03-15': 201.58,
      '2021-03-16': 201.58,
      '2021-03-17': 201.58,
      '2021-03-18': 201.58,
      '2021-03-19': 241.91,
      '2021-03-20': 241.91,
      '2021-03-21': 201.58,
      '2021-03-22': 201.58,
      '2021-03-23': 201.58,
      '2021-03-24': 201.58,
      '2021-03-25': 201.58,
      '2021-03-26': 241.91,
      '2021-03-27': 241.91,
      '2021-03-28': 201.58,
      '2021-03-29': 201.58,
      '2021-03-30': 201.58
    },
    {
      '2021-03-10': 201.58,
      '2021-03-11': 201.58,
      '2021-03-12': 241.91,
      '2021-03-13': 241.91,
      '2021-03-14': 201.58,
      '2021-03-15': 201.58,
      '2021-03-16': 201.58,
      '2021-03-17': 201.58,
      '2021-03-18': 201.58,
      '2021-03-19': 241.91,
      '2021-03-20': 241.91,
      '2021-03-21': 201.58,
      '2021-03-22': 201.58,
      '2021-03-23': 201.58,
      '2021-03-24': 201.58,
      '2021-03-25': 201.58,
      '2021-03-26': 241.91,
      '2021-03-27': 241.91,
      '2021-03-28': 201.58,
      '2021-03-29': 201.58,
      '2021-03-30': 201.58
    }
  ]
  const allowed = ['2021-03-19', '2021-03-24']
  useEffect(() => {
    const checkin = Date.parse(allowed[0])
    const checkout = Date.parse(allowed[1])
    const los = findDayDifference(checkin, checkout)
    const { list } = avail
    const firstAvailbCheck = filterAvilabByDateRange(allowed[0], allowed[1], list)
    const secoundCheckByLos = firstAvailbCheck.filter(
      ({ availability }) => Object.keys(availability).length === los
    )

    console.log(secoundCheckByLos, 'here214')
  }, [])

  return (
    <>
      <h4>Welcome</h4>

      {/* <Form
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
        <Form.Item label='accommodation name' name='name'>
          <Input />
        </Form.Item>
        <Form.Item label='accommodation type' name='accommodationType'>
          <Select>
            <Select.Option value='hotel'>hotel</Select.Option>
            <Select.Option value='villa'>villa</Select.Option>
            <Select.Option value='Apartment'>Apartment</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label='rating type' name='categoryName'>
          <Select>
            <Select.Option value='3 Stars'>3 Stars</Select.Option>
            <Select.Option value='4 Stars'>4 Stars</Select.Option>
            <Select.Option value='5 Stars'>5 Stars</Select.Option>
            <Select.Option value='Not applicable'>Not applicable</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label='InputNumber'>
          <InputNumber />
        </Form.Item>
      </Form> */}
    </>
  )
}
