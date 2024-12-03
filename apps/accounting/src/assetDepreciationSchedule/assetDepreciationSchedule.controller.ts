import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AssetDepreciationScheduleService } from "./assetDepreciationSchedule.service";
import { AssetDepreciationScheduleControllerBase } from "./base/assetDepreciationSchedule.controller.base";

@swagger.ApiTags("assetDepreciationSchedules")
@common.Controller("assetDepreciationSchedules")
export class AssetDepreciationScheduleController extends AssetDepreciationScheduleControllerBase {
  constructor(protected readonly service: AssetDepreciationScheduleService) {
    super(service);
  }
}
