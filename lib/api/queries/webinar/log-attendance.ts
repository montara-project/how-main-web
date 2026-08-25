import { queryOptions } from '@tanstack/react-query'

import { PaginateDto } from '../../dtos/paginate'
import { services } from '../../services'

export const WEBINAR_LOG_ATTENDANCE_QUERY_KEY = 'webinar/attendances/logs'

const list = (params?: PaginateDto) =>
  queryOptions({
    queryKey: [WEBINAR_LOG_ATTENDANCE_QUERY_KEY, params],
    queryFn: async () => {
      const res = await services.webinars.attendances.logs.me({
        offset: params?.offset,
        limit: params?.limit,
      })

      return res.data
    },
  })

export const webinarLogAttendanceQueries = {
  list,
} as const
