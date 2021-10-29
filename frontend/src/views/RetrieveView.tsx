import {
  EnhancedEncryptionRounded,
  Error,
  EuroRounded,
  FileCopy,
  FileCopyOutlined,
  Keyboard,
  PanoramaFishEye,
  RemoveRedEye,
  RemoveRedEyeOutlined
} from '@material-ui/icons'
import React from 'react'
import ContentBox from '../components/ContentBox'
import SecretRevealer from '../containers/SecretRevealer'

/**
 * This view is for retrieving data when data has been submitted to the share id.
 */
export default function RetrieveView() {
  const secrets = [
    {
      title: 'Password for gmail',
      content: 'eqjheqh khjqe khqwke hqwkehqkwheqwkjhckjhqkjhwerkhwervkjkwerv'
    },
    {
      title: 'Password for gmail',
      content: 'eqjheqh khjqe khqwke '
    },
    {
      title: 'Password for gmail',
      content: 'eqjheqh khjqe khqwke '
    },
    {
      title: 'Outlook content ',
      content: 'qkleq lkjeql kjeqlkjweljtkergk l;dbkl'
    }
  ]
  return (
    <ContentBox>
      <div className='min-w-full'>
        <h2>Retrieve secrets</h2>
        <section className='my-3'>
          <div className='min-w-full min-h-full relative transition-all overflow-hidden'>
            <div
              className={`animate-pulse min-w-full min-h-full absolute flex flex-col justify-center items-center text-yellow-500 transition-all`}
            >
              <Error className='' />
              <span className='text-xs'>This bucket is empty</span>
            </div>
            <div
              className={`${
                true ? 'text-opacity-0' : 'text-opacity-100'
              } transition-all min-w-full rounded-md h-28 bg-chambray-900 text-chambray-200 p-3 text-xs bg-opacity-30 focus:outline-none shadow-lg placeholder-chambray-600`}
            ></div>
          </div>
        </section>
        {secrets.map((s, i) => {
          return <SecretRevealer key={i} title={s.title} content={s.content} />
        })}
      </div>
    </ContentBox>
  )
}
