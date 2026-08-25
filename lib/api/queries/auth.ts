import { queryOptions } from '@tanstack/react-query'

import { services } from '../services'

const AUTH_PROFILE_QUERY_KEY = 'auth/profile'

const getProfile = () =>
  queryOptions({
    queryKey: [AUTH_PROFILE_QUERY_KEY],
    queryFn: async () => {
      const res = await services.auth.profile()
      return res.data
    },
  })

export const authQueries = {
  profile: getProfile,
} as const
