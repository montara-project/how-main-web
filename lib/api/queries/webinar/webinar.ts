import { queryOptions } from '@tanstack/react-query'

import { PaginateDto } from '../../dtos/paginate'
import { services } from '../../services'

export const WEBINAR_QUERY_KEY = 'webinars'

const list = (params?: PaginateDto) =>
  queryOptions({
    queryKey: [WEBINAR_QUERY_KEY, params],
    queryFn: async () => {
      const res = await services.webinars.list({
        offset: params?.offset,
        limit: params?.limit,
      })

      return res.data
    },
  })

const slug = (slug: string) =>
  queryOptions({
    queryKey: [`${WEBINAR_QUERY_KEY}/slug`, slug],
    queryFn: async () => {
      const res = await services.webinars.slug(slug)
      return res.data
    },
  })

export const webinarQueries = {
  list,
  slug,
} as const
