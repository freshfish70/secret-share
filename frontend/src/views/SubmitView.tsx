import { SendRounded } from '@material-ui/icons'
import React from 'react'
import { useForm } from 'react-hook-form'
import ContentBox from '../components/ContentBox'

/**
 * This is the view for submitting the secret data.
 */
export default function SubmitView() {
  const { handleSubmit } = useForm()
  return (
    <ContentBox>
      <div className='flex flex-col min-w-full'>
        <h2 className='mb-5 uppercase'>Share secret</h2>
        <input
          type='text'
          name='title-secret'
          id='title-secret'
          placeholder='Title'
          className='min-w-full rounded-md mb-5 bg-chambray-900 text-chambray-200 p-3 text-xs bg-opacity-30 focus:outline-none shadow-lg placeholder-chambray-600'
        />
        <textarea
          placeholder='Paste your secret here...'
          name='secret-content'
          id='secret-content'
          className='min-w-full rounded-md mb-5 h-28 bg-chambray-900 text-chambray-200 p-3 text-xs bg-opacity-30 focus:outline-none shadow-lg placeholder-chambray-600'
        ></textarea>
        <button className='flex justify-center items-center bg-chambray-400 px-6 py-2 rounded-md text-white uppercase hover:bg-chambray-300 transition-all flex-none text-xs'>
          share
          <SendRounded className='ml-3 text-xs' fontSize='small' />
        </button>
      </div>
    </ContentBox>
  )
}
