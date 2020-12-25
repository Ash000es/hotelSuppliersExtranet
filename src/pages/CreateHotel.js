import React, { useState } from 'react'
import { NavBar } from '../components/Navbar'
import { Steps, Button, message } from 'antd'
import { FormStepOne } from '../components/formStepOne'
import { FormStepTwo } from '../components/formStepTwo'
const { Step } = Steps

const steps = [
  {
    title: 'First',
    content: <FormStepOne />
  },
  {
    title: 'Second',
    content: <FormStepTwo />
  },
  {
    title: 'Last',
    content: 'Last-content'
  }
]

export const CreateHotelPage = () => {
  const [current, setCurrent] = React.useState(0)

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
