import { LockRounded } from '@material-ui/icons'
import React, { useState } from 'react'
import CreateShare from '../containers/CreateShare'
import ShareInformation from '../containers/ShareInformation'
import { ShareDetails } from '../lib/share/ShareDetails'

/**
 * This is the default view when accessing this frontend.
 */
export default function IndexView() {
  const [shareDetails, setShareDetails] = useState<undefined | ShareDetails>({
    deleteUrl: 'https://secret-share.no/delete/jwelr-123123wer-123fwer234-r21321',
    submitUrl: 'https://secret-share.no/delete/jwelr-123123wer-123fwer234-r21321',
    retrieveUrl: 'https://secret-share.no/delete/jwelr-123123wer-123fwer234-r21321',
    passphrase: 'abcdef123456789'
  })

  const onShareCreated = (shareDetails: ShareDetails) => {}

  return (
    <div className='w-3/4'>
      <div className='max-w-3xl h-96 shadow-2xl bg-chambray-800 flex justify-center align-middle rounded-xl'>
        {(shareDetails && <ShareInformation shareDetails={shareDetails} />) || (
          <CreateShare onCreated={onShareCreated} />
        )}
      </div>
    </div>
  )
}
