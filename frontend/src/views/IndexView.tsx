import React, { useState } from 'react'
import CreateShare from '../containers/CreateShare'
import ShareInformation from '../containers/ShareInformation'
import { ShareDetails } from '../lib/share/ShareDetails'
import ContentBox from '../components/ContentBox'

/**
 * This is the default view when accessing this frontend.
 */
export default function IndexView() {
  const [shareDetails, setShareDetails] = useState<undefined | ShareDetails>()
  const onShareCreated = (newShareDetails: ShareDetails): void => {
    setShareDetails(newShareDetails)
  }

  return (
    <ContentBox>
      {(shareDetails && <ShareInformation shareDetails={shareDetails} />) || (
        <div className='h-96'>
          <CreateShare onCreated={onShareCreated} />
        </div>
      )}
    </ContentBox>
  )
}
