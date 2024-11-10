import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CalendarViewService } from "./calendarView.service";
import { CalendarViewControllerBase } from "./base/calendarView.controller.base";

@swagger.ApiTags("calendarViews")
@common.Controller("calendarViews")
export class CalendarViewController extends CalendarViewControllerBase {
  constructor(protected readonly service: CalendarViewService) {
    super(service);
  }
}
