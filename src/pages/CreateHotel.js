import React, { useState } from 'react'
import { NavBar } from '../components/Navbar'
import { Steps, Button, message } from 'antd'
import { FormStepOne } from '../components/formStepOne'
import { FormStepTwo } from '../components/formStepTwo'

export const CreateHotelPage = () => {
  const [current, setCurrent] = useState(0)
  const [formState, setFormState] = useState({
    accommodationType: '',
    categoryName: '',
    contactDetails: {},
    name: '',
    city: '',
    postCode: '',
    areaName: '',
    address: {},
    email: '',
    phones: '',
    destinationName: '',
    // latitude: { type: String, required: false },
    // longitude: { type: String, required: false },
    images: [],
    amenities: [],
    rooms: []
    // minRate: { type: String, required: false },
    // maxRate: { type: String, required: false },
    // currency: { type: String, required: false },
    // license: { type: String, required: false },
    // label: { type: String, required: false },
    // Extras: [{ type: Object, required: false }],
  })
  const handleChange = (input) => (e) => {
    console.log(input, e)
    // setFormState({ [input]: e.target.value })
  }
  const { Step } = Steps
  console.log(formState, 'state')
  const steps = [
    {
      title: 'First',
      content: <FormStepOne formState={formState} setFormState={setFormState} />
    },
    {
      title: 'Second',
      content: <FormStepTwo handleChange={handleChange} />
    },
    {
      title: 'Last',
      content: 'Last-content'
    }
  ]

  const next = () => {
    setCurrent(current + 1)
  }

  const prev = () => {
    setCurrent(current - 1)
  }
  return (
    <div>
      <NavBar />
      <h1>I am create Hotel page</h1>
      <Steps current={current}>
        {steps.map((item) => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div className='steps-content'>{steps[current].content}</div>
      <div className='steps-action'>
        {current < steps.length - 1 && (
          <Button type='primary' onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type='primary' onClick={() => message.success('Processing complete!')}>
            Done
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
            Previous
          </Button>
        )}
      </div>
    </div>
  )
}
