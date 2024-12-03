import * as graphql from "@nestjs/graphql";
import { JobCardResolverBase } from "./base/jobCard.resolver.base";
import { JobCard } from "./base/JobCard";
import { JobCardService } from "./jobCard.service";

@graphql.Resolver(() => JobCard)
export class JobCardResolver extends JobCardResolverBase {
  constructor(protected readonly service: JobCardService) {
    super(service);
  }
}
