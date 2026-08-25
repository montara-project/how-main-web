import { webinarLogAttendanceService } from './log-attendance'
import { webinarPrivatePlanService } from './private-plan'
import { webinarService } from './webinar'

export const collectWebinarServices = {
  ...webinarService,
  attendances: {
    logs: webinarLogAttendanceService,
  },
  privates: {
    plans: webinarPrivatePlanService,
  },
}
