import * as graphql from "@nestjs/graphql";
import { ActivityTypeResolverBase } from "./base/activityType.resolver.base";
import { ActivityType } from "./base/ActivityType";
import { ActivityTypeService } from "./activityType.service";

@graphql.Resolver(() => ActivityType)
export class ActivityTypeResolver extends ActivityTypeResolverBase {
  constructor(protected readonly service: ActivityTypeService) {
    super(service);
  }
}
