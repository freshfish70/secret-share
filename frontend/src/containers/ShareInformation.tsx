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
      subtext: 'Your URL for submitting secrets'
    },
    retrieval: {
      title: 'View',
      text: `${import.meta.env.VITE_BASE_URL}/${shareDetails.bucketId}`,
      subtext: 'Your URL for retrieving secrets'
    },
    passphrase: {
      title: 'Passphrase',
      text: shareDetails.passphrase,
      subtext: 'Your passphrase required to decrypt the private key'
    },
    retrievalPassphrase: {
      title: 'Retrieval key',
      text: shareDetails.retrievalPassphrase,
      subtext: 'Your key required to access your secret bucket'
    }
  }
  return (
    <section className='flex flex-col text-center'>
      <h2 className='text-lg'>Share created</h2>
      Please save the following
      {Object.values(info).map((v, index) => {
        return <TitledTextContainer key={index} title={v.title} text={v.text} subtext={v.subtext} />
      })}
    </section>
  )
}
