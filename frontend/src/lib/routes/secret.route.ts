import { useLocation, useParams } from 'react-router-dom'

// Holds routes related to secrets
export const secretRoute = {
  submitSecret: '/secret/submit/:submissionId'
}
// ROUTES SPECIFIC
//

// Submit secret routes
interface SubmitSecretRouteParams {
  submissionId: string
}
export const useSubmitSecretRoute = () => {
  const location = useLocation()
  const params = useParams<SubmitSecretRouteParams>()
  return { location, params }
}
