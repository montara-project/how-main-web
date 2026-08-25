import { authQueries } from './auth'
import { osmQueries } from './osm'
import { collectWebinarQueries } from './webinar'

export const queries = {
  auth: authQueries,
  osm: osmQueries,
  webinars: collectWebinarQueries,
} as const
