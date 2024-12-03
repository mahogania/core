import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AssetValueAdjustmentService } from "./assetValueAdjustment.service";
import { AssetValueAdjustmentControllerBase } from "./base/assetValueAdjustment.controller.base";

@swagger.ApiTags("assetValueAdjustments")
@common.Controller("assetValueAdjustments")
export class AssetValueAdjustmentController extends AssetValueAdjustmentControllerBase {
  constructor(protected readonly service: AssetValueAdjustmentService) {
    super(service);
  }
}
