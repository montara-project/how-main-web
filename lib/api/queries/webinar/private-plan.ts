import { queryOptions } from '@tanstack/react-query'

import { services } from '../../services'

export const WEBINAR_PRIVATE_PLAN_QUERY_KEY = 'webinars/privates/plans'

const active = () =>
  queryOptions({
    queryKey: [WEBINAR_PRIVATE_PLAN_QUERY_KEY],
    queryFn: async () => {
      const res = await services.webinars.privates.plans.active()
      return res.data
    },
  })

export const webinarPrivatePlanQueries = {
  active,

} as const