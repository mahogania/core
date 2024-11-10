import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { HolidayService } from "./holiday.service";
import { HolidayGrpcControllerBase } from "./base/holiday.grpc.controller.base";

@swagger.ApiTags("holidays")
@common.Controller("holidays")
export class HolidayGrpcController extends HolidayGrpcControllerBase {
  constructor(protected readonly service: HolidayService) {
    super(service);
  }
}
