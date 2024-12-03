import * as graphql from "@nestjs/graphql";
import { JobCardItemResolverBase } from "./base/jobCardItem.resolver.base";
import { JobCardItem } from "./base/JobCardItem";
import { JobCardItemService } from "./jobCardItem.service";

@graphql.Resolver(() => JobCardItem)
export class JobCardItemResolver extends JobCardItemResolverBase {
  constructor(protected readonly service: JobCardItemService) {
    super(service);
  }
}
