import React from 'react'
import ContentBox from '../components/ContentBox'
import CreateSecret from '../containers/CreateSecret'
import { useGetSubmissionDetails } from '../lib/hooks/buckets'
import { useSubmitSecretRoute } from '../lib/routes/secret.route'

/**
 * This is the view for submitting the secret data.
 */
export default function SubmitView() {
  const { params } = useSubmitSecretRoute()
  const { data } = useGetSubmissionDetails(params.submissionId)
  return (
    <ContentBox>
      <div className='flex flex-col min-w-full'>
        <h2 className='mb-6'>SHARE A SECRET</h2>
        <CreateSecret publicKey={data?.data.publicKey} submissionId={params.submissionId} />
      </div>
    </ContentBox>
  )
}
