import { env } from '@/config/env'
import { AUTH_STORAGE_KEYS } from '@/lib/constants/auth'
import { AxiosItemResponse, HTTP_METHOD, ResourceMethods } from '@/types/api'

import { ClientFetchApi } from '../../client-fetch'
import { Models } from '../../models'
import { clientResource } from '../../resource'

const path = `/v1/webinars`

const methods = [HTTP_METHOD.GET, HTTP_METHOD.POST, HTTP_METHOD.PUT, HTTP_METHOD.DELETE]

const api = new ClientFetchApi({
  baseURL: String(env.NEXT_PUBLIC_API_URL),
  storageKey: AUTH_STORAGE_KEYS.AUTH_STORAGE,
}).default

// Webinar Resources
type WebinarResources = ResourceMethods<Models.Webinar> & {
  slug: (slug: string) => Promise<AxiosItemResponse<Models.Webinar>>
}

const resources = (): WebinarResources => {
  return {
    ...clientResource(path, methods),
    slug: (slug: string) => {
      const url = `${path}/me/${slug}`
      return api.get(url)
    },
  }
}

export const webinarService = resources()
