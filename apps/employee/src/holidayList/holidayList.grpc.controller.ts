import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { HolidayListService } from "./holidayList.service";
import { HolidayListGrpcControllerBase } from "./base/holidayList.grpc.controller.base";

@swagger.ApiTags("holidayLists")
@common.Controller("holidayLists")
export class HolidayListGrpcController extends HolidayListGrpcControllerBase {
  constructor(protected readonly service: HolidayListService) {
    super(service);
  }
}
