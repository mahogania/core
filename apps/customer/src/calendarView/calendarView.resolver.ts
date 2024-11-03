import * as graphql from "@nestjs/graphql";
import { CalendarViewResolverBase } from "./base/calendarView.resolver.base";
import { CalendarView } from "./base/CalendarView";
import { CalendarViewService } from "./calendarView.service";

@graphql.Resolver(() => CalendarView)
export class CalendarViewResolver extends CalendarViewResolverBase {
  constructor(protected readonly service: CalendarViewService) {
    super(service);
  }
}
