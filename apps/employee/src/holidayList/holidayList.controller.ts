import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { HolidayListService } from "./holidayList.service";
import { HolidayListControllerBase } from "./base/holidayList.controller.base";

@swagger.ApiTags("holidayLists")
@common.Controller("holidayLists")
export class HolidayListController extends HolidayListControllerBase {
  constructor(protected readonly service: HolidayListService) {
    super(service);
  }
}
