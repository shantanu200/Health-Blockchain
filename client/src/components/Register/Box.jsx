import React from 'react'
import { useState } from 'react'
import { DoctorProfile, Profile } from '../../api/api'
import { data } from '../../api/data'
import DocData from '../Doctor/DocData'
import DocLogin from '../Doctor/DocLogin'
import DocRegister from '../Doctor/DocRegister'
import Search from '../SearchPatient/Search'
import UserData from '../UserData/UserData'
import Form from './subComponetnts/Form'
import Left_Nav from './subComponetnts/Left_Nav'
import Right_Nav from './subComponetnts/Right_Nav'

const Box = () => {
  const [step,setStep] = useState(1);

 
  const RenderComponent = () => {
    let choice = step;

    switch(choice){
      case 1:
      //User Profile / User Form Comp
      return Profile ? <UserData setStep={setStep} /> : <><Right_Nav /><Form /></>;

      case 2:
      //User Form for New Registration
      return <><Right_Nav /><Form /></>
      
      case 3:
        //Doctor Form / Doctor Profile
        return DoctorProfile ? <DocData setStep={setStep} /> : <DocRegister setStep={setStep} />;

      case 4:
        return <h1>Appointment Form</h1>

      case 5:
        return <h1>Chats</h1>

      case 6:
        return <h1>Settings</h1>

      case 7:
        return <h1>Logout</h1>
      
      case 8:
        //Doctor Register Page
        return <DocRegister setStep={setStep} />
      
      case 9:
        //Doctor Login Page
        return <DocLogin setStep={setStep} />
      
      case 10:
        //Search Patient User
        return <Search />
      
    }
  }
  return (
    <div className='bg-white w-10/12 rounded-lg flex m-8'>
    <Left_Nav profile={data} setStep={setStep} />
    <div className='w-full md:w-2/3'>
        {RenderComponent()}
    </div>
    </div>
  )
}

export default Box