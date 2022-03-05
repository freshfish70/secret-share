import React from 'react'
import ContentBox from '../components/ContentBox'
import { BucketDisplay } from '../containers/BucketDisplay'
import { useViewBucketRoute } from '../lib/routes/bucket.route'

/**
 * This view is for retrieving data when data has been submitted to the share id.
 */
export default function RetrieveView() {
  const { params } = useViewBucketRoute()
  return (
    <ContentBox>
      <div className='min-w-full'>
        <h2>Retrieve secrets</h2>
        <BucketDisplay bucketId={params.bucketId} />
      </div>
    </ContentBox>
  )
}
