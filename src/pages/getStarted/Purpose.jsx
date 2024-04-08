import React, { useContext, useState, useEffect } from 'react'
// Library imports 
import { useNavigate } from 'react-router-dom';

// Custom imports
import { GetStartedContext } from '../../context/GetStartedProvider';
import { GET_STARTED_FORM_PURPOSE } from '../../constants';

const Purpose = ({ data }) => {
  const { setFormData } = useContext(GetStartedContext);
  const [purposes, setPurposes] = useState(GET_STARTED_FORM_PURPOSE); 
  const [isAnyOptionSelected, setIsAnyOptionSelected] = useState(false);
  const navigate = useNavigate(); 

  useEffect(() => {
    const anySelected = purposes.some(item => item.isSelected);
    setIsAnyOptionSelected(anySelected);
  }, [purposes]);

  const handlePurposeClick = (itemId) => {
    setPurposes(prevPurposes => prevPurposes.map(purpose => {
      if (purpose.id === itemId) {
        return { ...purpose, isSelected: !purpose?.isSelected };
      }
      return purpose;
    }));
  };

  const handleFinishProcess = () => {
    const selectedPurposes = purposes.filter(item => item?.isSelected); 
    setFormData(prev => ({...prev, userDetails : {...prev.userDetails, purposes : [...selectedPurposes]}})); 
    navigate("/"); 
  }

  return (
    <div className='w-2/3 mx-auto text-center'>
      <p className='text-4xl font-bold mb-5'>{data?.title}</p>
      <p className='text-gray-600'>{data?.description}</p>
      <div className='md:grid grid-cols-3 my-14 gap-4 tracking-tight'>
        {purposes.map(item => (
          <div
            key={item.id}
            onClick={() => handlePurposeClick(item.id)}
            className={`border-[2px] ${item.isSelected ? 'border-pink' : 'border-gray-300'} rounded-xl flex justify-center flex-col items-center p-5`}
          >
            <img className='w-36 mb-4' src={item.img} alt="img" />
            <p className='text-xl font-bold'>{item.purpose}</p>
            <div className={`mt-3 w-6 h-6 rounded-full border-[2px] border-gray-300 ${item.isSelected && 'bg-pink'}`}></div>
          </div>
        ))}
      </div>
      <button onClick={handleFinishProcess} className={`bg-pink px-20 py-2 text-white rounded-md ${!isAnyOptionSelected && 'opacity-60'}`}  disabled={!isAnyOptionSelected}>Finish</button>
    </div>
  )
}

export default Purpose;
