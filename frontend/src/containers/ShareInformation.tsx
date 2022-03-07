import React from 'react'
import TitledTextContainer from '../components/TitledTextContainer'
import { ShareDetails } from '../lib/share/ShareDetails'

interface ShareInformationProps {
  shareDetails: ShareDetails
}

export default function ShareInformation({ shareDetails }: ShareInformationProps) {
  const info = {
    submit: {
      title: 'Submit',
      text: `${import.meta.env.VITE_BASE_URL}/${shareDetails.submissionId}`,
      subtext: 'For adding secrets to the bucket (share this)'
    },
    retrieval: {
      title: 'Bucket',
      text: `${import.meta.env.VITE_BASE_URL}/${shareDetails.bucketId}`,
      subtext: 'For retrieving secrets from the bucket'
    },
    passphrase: {
      title: 'Passphrase',
      text: shareDetails.passphrase,
      subtext: 'Your passphrase required to decrypt the private key'
    },
    retrievalPassphrase: {
      title: 'Retrieval key',
      text: shareDetails.retrievalPassphrase,
      subtext: 'Your key required to access your bucket'
    }
  }
  return (
    <section className='flex flex-col text-center animate-fadeIn'>
      <h2>BUCKET CREATED</h2>
      <span className='mb-3 text-xs text-chambray-300 animate-pulse'>Save these entries </span>
      {Object.values(info).map((v, index) => {
        return <TitledTextContainer key={index} title={v.title} text={v.text} subtext={v.subtext} />
      })}
    </section>
  )
}
