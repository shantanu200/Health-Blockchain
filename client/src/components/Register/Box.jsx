import React from 'react'
import { data } from '../../api/data'
import Form from './subComponetnts/Form'
import Left_Nav from './subComponetnts/Left_Nav'
import Right_Nav from './subComponetnts/Right_Nav'

const Box = () => {
  return (
    <div className='bg-white w-10/12 rounded-lg flex m-8'>
    <Left_Nav profile={data} />
    <div className='w-full md:w-2/3'>
        <Right_Nav />
        <Form />
    </div>
    </div>
  )
}

export default Box