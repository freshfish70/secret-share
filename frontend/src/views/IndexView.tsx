import { LockRounded } from '@material-ui/icons'
import React, { useState } from 'react'
import CreateShare from '../containers/CreateShare'
import ShareInformation from '../containers/ShareInformation'
import { KeyShuffler } from '../lib/KeyShuffler'
import { KeyService } from '../lib/KeyService'
import { ShareDetails } from '../lib/share/ShareDetails'
import ContentBox from '../components/ContentBox'

/**
 * This is the default view when accessing this frontend.
 */
export default function IndexView() {
  let pass = 'ReqwQW wqke QWE 213!@$-684wkjr2#erjSRQ!@##49012erkewrSDRF#@$23923$!#$!@kjwer'
  // const a = new KeyService()
  // const { publicKeyPem, privateKeyPem } = a.createKeyPair(pass)
  // const encrypted = a.encryptWithPublicKey(publicKeyPem, 'I AM DECODED')
  // console.log(a.decryptWithPrivateKey(privateKeyPem, encrypted, pass))

  const [shareDetails, setShareDetails] = useState<undefined | ShareDetails>()
  // const scrambler = new KeyShuffler()
  // const scrambled = scrambler.shuffle(privateKeyPem, pass)
  // const unscrambled = scrambler.unShuffle(scrambled, pass)
  // const q = a.decryptWithPrivateKey(unscrambled, encrypted, pass)
  const onShareCreated = (shareDetails: ShareDetails) => {
    setShareDetails({
      deleteUrl: 'https://secret-share.no/delete/jwelr-123123wer-123fwer234-r21321',
      submitUrl: 'https://secret-share.no/submit/jwelr-123123wer-123fwer234-r21321',
      retrieveUrl: 'https://secret-share.no/retrieve/jwelr-123123wer-123fwer234-r21321',
      passphrase: 'abcdef123456789'
    })
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
