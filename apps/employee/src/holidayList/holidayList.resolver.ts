import * as graphql from "@nestjs/graphql";
import { HolidayListResolverBase } from "./base/holidayList.resolver.base";
import { HolidayList } from "./base/HolidayList";
import { HolidayListService } from "./holidayList.service";

@graphql.Resolver(() => HolidayList)
export class HolidayListResolver extends HolidayListResolverBase {
  constructor(protected readonly service: HolidayListService) {
    super(service);
  }
}
