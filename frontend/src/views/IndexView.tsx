import { LockRounded } from '@material-ui/icons'
import React, { useState } from 'react'
import CreateShare from '../containers/CreateShare'
import ShareInformation from '../containers/ShareInformation'
import { KeyShuffler } from '../lib/KeyShuffler'
import { KeyService } from '../lib/KeyService'
import { ShareDetails } from '../lib/share/ShareDetails'
import ContentBox from '../components/ContentBox'
import { useHistory } from 'react-router-dom'

/**
 * This is the default view when accessing this frontend.
 */
export default function IndexView() {
  const [shareDetails, setShareDetails] = useState<undefined | ShareDetails>()
  const onShareCreated = (shareDetails: ShareDetails) => {
    setShareDetails(shareDetails)
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
