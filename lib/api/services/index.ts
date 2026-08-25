import { authServices } from './auth'
import { osmServices } from './osm'
import { collectWebinarServices } from './webinar'

export const services = {
  auth: authServices,
  osm: osmServices,
  webinars: collectWebinarServices,
} as const
