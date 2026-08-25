import { env } from '@/config/env'
import { AUTH_STORAGE_KEYS } from '@/lib/constants/auth'
import { AxiosListResponse, HTTP_METHOD, ResourceMethods } from '@/types/api'

import { ClientFetchApi } from '../../client-fetch'
import { Models } from '../../models'
import { clientResource } from '../../resource'

const path = `/v1/webinars-privates-plans`

const methods = [HTTP_METHOD.GET, HTTP_METHOD.POST, HTTP_METHOD.PUT, HTTP_METHOD.DELETE]

const api = new ClientFetchApi({
  baseURL: String(env.NEXT_PUBLIC_API_URL),
  storageKey: AUTH_STORAGE_KEYS.AUTH_STORAGE,
}).default

// Webinar Private Plan Resources
type WebinarPrivatePlanResource = ResourceMethods<Models.WebinarPrivatePlan> & {
  active: () => Promise<AxiosListResponse<Models.WebinarPrivatePlan>>
}

const resources = (): WebinarPrivatePlanResource => {
  return {
    ...clientResource(path, methods),
    active: () => {
      const url = `${path}/active`
      return api.get(url)
    },
  }
}

export const webinarPrivatePlanService = resources()
