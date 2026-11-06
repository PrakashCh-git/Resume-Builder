import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { dummyResumeData } from '../assets/assets'
import ResumePreview from '../components/ResumePreview'
import { ArrowLeftIcon, Loader } from 'lucide-react'

const Preview = () => {
  const {resumeId} = useParams()

  // Fixed the spelling of the state setter for consistency
  const [resumeData, setResumeData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  const loadResume = async () => {
    setResumeData(dummyResumeData.find(resume => resume._id === resumeId) || null);
    setIsLoading(false)
  }

  useEffect(()=>{
    loadResume();
  },[])

  return resumeData ? (
    <div className='bg-slate-100'>
      {/* FIX 1: Added missing 'className=' attribute */}
      <div className='max-w-3xl mx-auto py-10'>
        
        {/* FIX 2: Changed resumeData.accentColor to resumeData.accent_color */}
        <ResumePreview 
          data={resumeData} 
          template={resumeData.template} 
          accentColor={resumeData.accent_color} 
          classes='py-4 bg-white'
        />
        
      </div>
    </div>
  ):
  (
    <div>
      {isLoading ? <Loader/> : (
        <div className='flex flex-col items-center justify-center'>
          <p className='text-center text-6xl text-slate-400'>Resume not found</p>
          <a href="/" className='mt-6 bg-green-500 hover:bg-green-600 text-white rounded-full px-6 h-9 m-1 ring-offset-1 ring-1 ring-green-400 flex items-center transition-colors'>
            <ArrowLeftIcon className='mr-1 size-4 '/>
            go to home page
          </a>
        </div>
      )}
    </div>
  )
}

export default Preview