import React, { useState } from 'react'
import { Snack } from '../components/Snack'
import TitledTextContainer from '../components/TitledTextContainer'
import { bucketRoute } from '../lib/routes/bucket.route'
import { secretRoute } from '../lib/routes/secret.route'
import { ShareDetails } from '../lib/share/ShareDetails'

interface ShareInformationProps {
  shareDetails: ShareDetails
}

export default function ShareInformation({ shareDetails }: ShareInformationProps) {
  const info = {
    submit: {
      title: 'Submit',
      text: `${import.meta.env.VITE_BASE_URL}${secretRoute.submitSecret(
        shareDetails.submissionId
      )}`,
      subtext: 'For adding secrets to the bucket (share this)'
    },
    retrieval: {
      title: 'Bucket',
      text: `${import.meta.env.VITE_BASE_URL}${bucketRoute.viewBucket(shareDetails.bucketId)}`,
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

  const [copied, setCopied] = useState(false)

  const copy = (value: string) => {
    navigator.clipboard.writeText(value).then(() => {
      setCopied(true)
    })
  }
  return (
    <section className='flex flex-col text-center animate-fadeIn'>
      <Snack isOpen={copied} onCloseHandler={() => setCopied(false)} message='Copied' />
      <h2>BUCKET CREATED</h2>
      <span className='mb-3 text-xs text-chambray-300 animate-pulse'>Save these entries </span>
      {Object.values(info).map((v, index) => {
        return (
          <div
            key={index}
            onClick={() => {
              if (copied) {
                setTimeout(() => {
                  copy(v.text)
                }, 200)
                setCopied(false)
              } else {
                copy(v.text)
              }
            }}
          >
            <TitledTextContainer key={index} {...v} />
          </div>
        )
      })}
    </section>
  )
}
