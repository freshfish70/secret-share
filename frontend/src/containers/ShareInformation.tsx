import React from 'react'
import { ShareDetails } from '../lib/share/ShareDetails'

interface ShareInformationProps {
  shareDetails: ShareDetails
}

export default function ShareInformation({ shareDetails }: ShareInformationProps) {
  return (
    <section className='flex flex-col'>
      <div>
        <span>Submit: </span>
        {shareDetails.submitUrl}
      </div>
      <div>
        <span>Retrieve: </span>
        {shareDetails.retrieveUrl}
      </div>
      <div>
        <span>Delete: </span>
        {shareDetails.deleteUrl}
      </div>
      <div>
        <span>Passphrase: </span>
        {shareDetails.passphrase}
      </div>
    </section>
  )
}
