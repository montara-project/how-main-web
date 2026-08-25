import { webinarLogAttendanceQueries } from './log-attendance'
import { webinarPrivatePlanQueries } from './private-plan'
import { webinarQueries } from './webinar'

export const collectWebinarQueries = {
  ...webinarQueries,
  attendances: {
    logs: webinarLogAttendanceQueries,
  },
  privates: {
    plans: webinarPrivatePlanQueries,
  },
}
