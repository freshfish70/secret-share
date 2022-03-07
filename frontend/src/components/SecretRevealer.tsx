import { Tooltip } from '@material-ui/core'
import { FileCopyOutlined, Visibility, VisibilityOff, Warning } from '@material-ui/icons'
import crypto from 'crypto-js'
import React, { useEffect, useState } from 'react'
import { KeyService } from '../lib/KeyService'
import { KeyShuffler } from '../lib/KeyShuffler'
import TextIconAction from './TextIconAction'

interface SecretContent {
  content: string
  privateKey: string
  passphrase: string
}
interface SecretRevealerProps extends SecretContent {
  title: string
}

const keyService = new KeyService()

const decrypt = ({ privateKey, passphrase, content }: SecretContent) => {
  var decryptedPrivateKey = crypto.AES.decrypt(privateKey, passphrase).toString(crypto.enc.Utf8)
  return keyService.decryptWithPrivateKey(decryptedPrivateKey, atob(content), passphrase)
}
export default function SecretRevealer({
  title,
  content,
  privateKey,
  passphrase
}: SecretRevealerProps) {
  const [contentHidden, setContentHidden] = useState(true)
  const [decryptedSecret, setDecryptedSecret] = useState('')
  const [error, setError] = useState(false)
  const [copied, setCopied] = useState(false)
  const [copyIndex, setTimerValue] = useState(-1)

  const copy = () => {
    setError(false)
    try {
      navigator.clipboard.writeText(decrypt({ passphrase, content, privateKey })).then(
        function () {
          setCopied(true)
          window.clearTimeout(copyIndex)
          const q = window.setTimeout(() => {
            setCopied(false)
          }, 1000)
          setTimerValue(q)
        },
        function (err) {}
      )
    } catch (error) {
      setError(true)
    }
  }

  useEffect(() => {
    try {
      setError(false)
      if (!contentHidden) {
        setDecryptedSecret(decrypt({ passphrase, content, privateKey }))
      } else {
        setDecryptedSecret('')
      }
    } catch (error) {
      setError(true)
    }
  }, [contentHidden])

  return (
    <section className='my-3'>
      <div className='flex justify-between mb-2'>
        <div>
          <span className='text-xs my-3 text-chambray-400'>{title}</span>
        </div>
        <div className='flex justify-center items-center'>
          <TextIconAction
            Icon={FileCopyOutlined}
            text={'Copy'}
            showTooltip={copied}
            tooltipText={'Copied'}
            disableTooltipOnHover={true}
            action={() => {
              copy()
            }}
          />
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
        {(error && (
          <div
            onClick={() => setContentHidden(false)}
            className={`
            min-w-full min-h-full absolute flex flex-col justify-center items-center cursor-pointer text-yellow-500 transition-all`}
          >
            <Warning className='text-xs mb-2' fontSize='medium' />
            <span className='text-xs'>Failed to decrypt secret (check passphrase)</span>
          </div>
        )) || (
          <div
            onClick={() => setContentHidden(false)}
            className={`${
              contentHidden ? '' : 'opacity-0 -mt-40'
            } min-w-full min-h-full absolute flex flex-col justify-center items-center cursor-pointer hover:text-chambray-400 text-chambray-500 transition-all`}
          >
            <Visibility className='text-xs mb-2' fontSize='medium' />
            <span className='text-xs'>Click to reveal</span>
          </div>
        )}
        <textarea
          value={contentHidden || error ? '' : decryptedSecret}
          readOnly={true}
          className={`${
            contentHidden ? 'text-opacity-0' : 'text-opacity-100'
          } transition-all min-w-full rounded-md h-28 bg-chambray-900 text-chambray-200 p-3 text-xs bg-opacity-30 focus:outline-none shadow-lg placeholder-chambray-600`}
        ></textarea>
      </div>
    </section>
  )
}
