import * as graphql from "@nestjs/graphql";
import { JobCardOperationResolverBase } from "./base/jobCardOperation.resolver.base";
import { JobCardOperation } from "./base/JobCardOperation";
import { JobCardOperationService } from "./jobCardOperation.service";

@graphql.Resolver(() => JobCardOperation)
export class JobCardOperationResolver extends JobCardOperationResolverBase {
  constructor(protected readonly service: JobCardOperationService) {
    super(service);
  }
}
