import React, { useState, useContext } from 'react'


// Library Imports 
import { FaAngleLeft } from "react-icons/fa";

// Custom Imports 
import PersonalInformation from './PersonalInformation'
import Purpose from './Purpose'
import { GetStartedContext } from '../../context/GetStartedProvider';
import { GET_STARTED_FORM } from '../../constants';
import { UserContext } from '../../context/UserProvider';


const GetStarted = () => {
  const {formData, setFormData} = useContext(GetStartedContext); 

  return (
    <div className='min-h-screen'>
      <div className='p-10 flex gap-8'>
        <p className="text-pink text-2xl">dribble</p>
        <button onClick={() => setFormData(prev => ({...prev, currPage : formData?.currPage - 1}))} className={`${formData?.currPage <= 0 && 'hidden'} bg-gray-200 p-2 rounded-md`}><FaAngleLeft className='text-gray-600' /></button>
      </div>

      {formData?.currPage === 0 && <PersonalInformation data={GET_STARTED_FORM[formData?.currPage]} />}
      {formData?.currPage === 1 && <Purpose data={GET_STARTED_FORM[formData?.currPage]} />}

    </div>
  )
}

export default GetStarted 