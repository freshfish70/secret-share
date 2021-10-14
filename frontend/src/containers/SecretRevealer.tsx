import { FileCopyOutlined, Visibility, VisibilityOff } from '@material-ui/icons'
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
          <TextIconAction
            Icon={contentHidden ? Visibility : VisibilityOff}
            text={contentHidden ? 'show' : 'hide'}
            action={() => {
              setContentHidden(!contentHidden)
            }}
          />
        </div>
      </div>
      <div className='min-w-full min-h-full relative transition-all overflow-hidden'>
        <div
          onClick={() => setContentHidden(false)}
          className={`${
            contentHidden ? '' : 'opacity-0 -mt-40'
          } min-w-full min-h-full absolute flex flex-col justify-center items-center cursor-pointer hover:text-chambray-400 text-chambray-500 transition-all`}
        >
          <Visibility className='text-xs' fontSize='large' />
          <span className='text-xs'>Click to reveal</span>
        </div>
        <textarea
          value={contentHidden ? '' : content}
          readOnly={true}
          className={`${
            contentHidden ? 'text-opacity-0' : 'text-opacity-100'
          } transition-all min-w-full rounded-md h-28 bg-chambray-900 text-chambray-200 p-3 text-xs bg-opacity-30 focus:outline-none shadow-lg placeholder-chambray-600`}
        ></textarea>
      </div>
    </section>
  )
}
