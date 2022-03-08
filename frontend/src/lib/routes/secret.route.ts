import { useLocation, useParams } from 'react-router-dom'

// Holds routes related to secrets
export const secretRoute = {
  submitSecret: (id?: string | number) => `/secret/submit/${id ? id : ':submissionId'}`
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
