import * as graphql from "@nestjs/graphql";
import { JobCardScheduledTimeResolverBase } from "./base/jobCardScheduledTime.resolver.base";
import { JobCardScheduledTime } from "./base/JobCardScheduledTime";
import { JobCardScheduledTimeService } from "./jobCardScheduledTime.service";

@graphql.Resolver(() => JobCardScheduledTime)
export class JobCardScheduledTimeResolver extends JobCardScheduledTimeResolverBase {
  constructor(protected readonly service: JobCardScheduledTimeService) {
    super(service);
  }
}
