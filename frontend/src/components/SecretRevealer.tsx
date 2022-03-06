import { FileCopyOutlined, Visibility, VisibilityOff } from '@material-ui/icons'
import crypto from 'crypto-js'
import React, { useEffect, useState } from 'react'
import { KeyService } from '../lib/KeyService'
import { KeyShuffler } from '../lib/KeyShuffler'
import TextIconAction from './TextIconAction'

interface SecretRevealerProps {
  title: string
  content: string
  privateKey: string
  passphrase: string
}

export default function SecretRevealer({
  title,
  content,
  privateKey,
  passphrase
}: SecretRevealerProps) {
  const [contentHidden, setContentHidden] = useState(true)
  const [decryptedSecret, setDecryptedSecret] = useState('')

  useEffect(() => {
    try {
      if (!contentHidden) {
        const ks = new KeyService()
        var decryptedPrivateKey = crypto.AES.decrypt(privateKey, passphrase).toString(
          crypto.enc.Utf8
        )
        setDecryptedSecret(ks.decryptWithPrivateKey(decryptedPrivateKey, atob(content), passphrase))
      } else {
        setDecryptedSecret('')
      }
    } catch (error) {}
  }, [contentHidden])

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
          value={contentHidden ? '' : decryptedSecret}
          readOnly={true}
          className={`${
            contentHidden ? 'text-opacity-0' : 'text-opacity-100'
          } transition-all min-w-full rounded-md h-28 bg-chambray-900 text-chambray-200 p-3 text-xs bg-opacity-30 focus:outline-none shadow-lg placeholder-chambray-600`}
        ></textarea>
      </div>
    </section>
  )
}
