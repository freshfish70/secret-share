import { FileCopyOutlined, RemoveRedEye, Visibility, VisibilityOff } from '@material-ui/icons'
import React, { useState } from 'react'
import TextIconAction from '../components/TextIconAction'

interface SecretRevealerProps {
  title: string
  content: string
}

export default function SecretRevealer({ title, content }: SecretRevealerProps) {
  const [contentHidden, setContentHidden] = useState(true)

  return (
    <section className='my-3'>
      <div className='flex justify-between mb-2'>
        <div>
          <span className='text-xs my-3 text-chambray-400'>{title}</span>
        </div>
        <div className='flex justify-center items-center'>
          <TextIconAction Icon={FileCopyOutlined} text={'Copy'} action={() => {}} />
          <FileCopyOutlined fontSize='inherit' className='mr-1' />
          <span className='text-xs mr-3 text-chambray-500 hover:text-chambray-400 transition-colors cursor-pointer'>
            Copy
          </span>
          <span className='text-xs mr-1 text-chambray-500 hover:text-chambray-400 transition-colors cursor-pointer'>
            {contentHidden ? (
              <>
                <Visibility fontSize='inherit' className='mr-2' />
                Reveal
              </>
            ) : (
              <>
                <VisibilityOff fontSize='inherit' className='mr-2' />
                Hide
              </>
            )}
          </span>
        </div>
      </div>
      <div className='min-w-full min-h-full relative'>
        {contentHidden ? (
          <div
            onClick={() => setContentHidden(false)}
            className='min-w-full min-h-full absolute flex flex-col justify-center items-center cursor-pointer hover:text-chambray-400 text-chambray-500 transition-colors'
          >
            <Visibility className='text-xs' fontSize='large' />
            <span className='text-xs'>Click to reveal</span>
          </div>
        ) : (
          <></>
        )}
        <textarea
          value={contentHidden ? '' : content}
          className='min-w-full rounded-md h-28 bg-chambray-900 text-chambray-200 p-3 text-xs bg-opacity-30 focus:outline-none shadow-lg placeholder-chambray-600'
        ></textarea>
      </div>
    </section>
  )
}
