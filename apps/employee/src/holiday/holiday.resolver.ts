import * as graphql from "@nestjs/graphql";
import { HolidayResolverBase } from "./base/holiday.resolver.base";
import { Holiday } from "./base/Holiday";
import { HolidayService } from "./holiday.service";

@graphql.Resolver(() => Holiday)
export class HolidayResolver extends HolidayResolverBase {
  constructor(protected readonly service: HolidayService) {
    super(service);
  }
}
