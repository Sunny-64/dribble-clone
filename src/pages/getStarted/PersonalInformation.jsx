import React, { useContext, useState, useEffect } from 'react'

// Library imports 
import { FaAngleRight, FaCamera } from "react-icons/fa6";

// Custom imports 
import { GetStartedContext } from '../../context/GetStartedProvider';


const PersonalInformation = ({ data }) => {
    const { formData, setFormData } = useContext(GetStartedContext);
    const [disableNext, setDisableNext] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData?.userDetails?.avatar || !formData?.userDetails?.location) {
            setDisableNext(true);
            return;
        }
        setFormData(prev => ({ ...prev, currPage: formData?.currPage + 1 }))
    }

    return (
        <div className='w-1/2 mx-auto'>
            <p className='text-4xl font-bold mb-5'>{data?.title}</p>
            <p className='text-gray-600'>{data?.description}</p>
            <div className='mt-10'>
                <p className='text-xl font-bold mb-4'>Add an Avatar</p>
                <div className='flex gap-8'>
                    <label htmlFor='file-upload' className={`w-36 h-36 ${!formData?.userDetails?.avatar && 'border-[4px] border-gray-300 border-dotted'}  rounded-full flex justify-center items-center`}><FaCamera className={`${formData?.userDetails?.avatar && 'hidden'} text-gray-400`} size={22} />
                        <img className={`w-36 h-36 rounded-full object-cover ${!formData?.userDetails?.avatar && 'hidden'}`} src={formData?.userDetails?.avatar} alt="" />
                    </label>
                    <div className='py-6'>
                        <label htmlFor="file-upload" className='text-sm border-[1px] border-gray-300 px-3 py-2 rounded-md'>Choose image</label>

                        <input
                            type="file"
                            id='file-upload'
                            onChange={e => setFormData(prev => ({ ...prev, userDetails: { ...prev?.userDetails, avatar: URL.createObjectURL(e.target.files[0]) } }))}
                            className='hidden'
                        />

                        <p className='text-gray-400 mt-6 flex items-center gap-2'> <FaAngleRight size={12} /> Or Choose one of our defaults</p>
                    </div>
                </div>
            </div>
            <div className='my-10'>
                <p className="text-xl font-bold mb-4">Add your location</p>
                <input
                    onChange={(e) => setFormData(prev => ({ ...prev, userDetails: { ...prev.userDetails, location: e.target.value } }))}
                    value={formData?.userDetails?.location}
                    type="text"
                    placeholder='Enter a location'
                    className='outline-none border-b-[2px] border-gray-200 w-full py-2'
                />
            </div>

            <button onClick={handleSubmit} className={`bg-pink py-2 px-16 rounded-md text-white ${!formData?.userDetails?.avatar || !formData?.userDetails?.location && 'opacity-60'}`} disabled={!formData?.userDetails?.avatar || !formData?.userDetails?.location}>Next</button>
        </div>
    )
}

export default PersonalInformation