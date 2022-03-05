import { useLocation, useParams } from 'react-router-dom'

// Holds routes related to bucket
export const bucketRoute = {
  viewBucket: '/bucket/view/:bucketId'
}
// ROUTES SPECIFIC
//

// ViewBucketRoute
interface ViewBucketRouteParams {
  bucketId: string
}
export const useViewBucketRoute = () => {
  const location = useLocation()
  const params = useParams<ViewBucketRouteParams>()
  return { location, params }
}
