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
      text: shareDetails.submitUrl,
      subtext: 'For submitting secrets'
    },
    retrieve: {
      title: 'Retrieve',
      text: shareDetails.retrieveUrl,
      subtext: 'For retrieving submitted secrets'
    },
    delete: {
      title: 'Delete',
      text: shareDetails.deleteUrl,
      subtext: 'For deleting the share (requires passphrase)'
    },
    passphrase: {
      title: 'Passphrase',
      text: shareDetails.passphrase,
      subtext: 'Required for retrieving secrets and deleting the share'
    }
  }
  return (
    <section className='flex flex-col text-center'>
      <h2 className='text-lg'>Share created</h2>
      {Object.values(info).map((v, index) => {
        return <TitledTextContainer key={index} title={v.title} text={v.text} subtext={v.subtext} />
      })}
    </section>
  )
}
