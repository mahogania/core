import * as graphql from "@nestjs/graphql";
import { AutoRepeatDayResolverBase } from "./base/autoRepeatDay.resolver.base";
import { AutoRepeatDay } from "./base/AutoRepeatDay";
import { AutoRepeatDayService } from "./autoRepeatDay.service";

@graphql.Resolver(() => AutoRepeatDay)
export class AutoRepeatDayResolver extends AutoRepeatDayResolverBase {
  constructor(protected readonly service: AutoRepeatDayService) {
    super(service);
  }
}
