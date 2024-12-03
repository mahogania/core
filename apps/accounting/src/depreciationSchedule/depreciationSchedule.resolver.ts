import * as graphql from "@nestjs/graphql";
import { DepreciationScheduleResolverBase } from "./base/depreciationSchedule.resolver.base";
import { DepreciationSchedule } from "./base/DepreciationSchedule";
import { DepreciationScheduleService } from "./depreciationSchedule.service";

@graphql.Resolver(() => DepreciationSchedule)
export class DepreciationScheduleResolver extends DepreciationScheduleResolverBase {
  constructor(protected readonly service: DepreciationScheduleService) {
    super(service);
  }
}
