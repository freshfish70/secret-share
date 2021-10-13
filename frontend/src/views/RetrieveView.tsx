import {
  EnhancedEncryptionRounded,
  EuroRounded,
  FileCopy,
  FileCopyOutlined,
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
      title: 'Outlook content ',
      content: 'qkleq lkjeql kjeqlkjweljtkergk l;dbkl'
    }
  ]
  return (
    <ContentBox>
      <div className='min-w-full'>
        <h2>Retrieve secrets</h2>
        {secrets.map((s, i) => {
          return <SecretRevealer title={s.title} content={s.content} />
        })}
      </div>
    </ContentBox>
  )
}
