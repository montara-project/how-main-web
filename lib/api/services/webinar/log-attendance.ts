import { env } from '@/config/env'
import { AUTH_STORAGE_KEYS } from '@/lib/constants/auth'
import { AxiosListResponse, HTTP_METHOD, ResourceMethods } from '@/types/api'

import { ClientFetchApi } from '../../client-fetch'
import { PaginateDto } from '../../dtos/paginate'
import { Models } from '../../models'
import { clientResource } from '../../resource'

const path = `/v1/webinars-attendances-logs`

const methods = [HTTP_METHOD.GET, HTTP_METHOD.POST, HTTP_METHOD.PUT, HTTP_METHOD.DELETE]

const api = new ClientFetchApi({
  baseURL: String(env.NEXT_PUBLIC_API_URL),
  storageKey: AUTH_STORAGE_KEYS.AUTH_STORAGE,
}).default

// Webinar Log Attendance Resources
type WebinarLogAttendanceResource = ResourceMethods<Models.WebinarLogAttendance> & {
  me: (params: PaginateDto) => Promise<AxiosListResponse<Models.WebinarLogAttendance>>
}

const resources = (): WebinarLogAttendanceResource => {
  return {
    ...clientResource(path, methods),
    me: (params) => {
      const url = `${path}/me`
      return api.get(url, { params })
    },
  }
}

export const webinarLogAttendanceService = resources()
