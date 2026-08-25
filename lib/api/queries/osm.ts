import { queryOptions } from '@tanstack/react-query'

import { services } from '../services'

export const OSM_ADDRESS_QUERY_KEY = 'osm/address'

const getOSMByAddress = (address: string) =>
  queryOptions({
    queryKey: [OSM_ADDRESS_QUERY_KEY, address],
    queryFn: async () => {
      const res = await services.osm.searchByAddress(address)
      return res.data
    },
  })

export const osmQueries = {
  address: getOSMByAddress,
} as const
