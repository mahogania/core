import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AssetRepairConsumedItemService } from "./assetRepairConsumedItem.service";
import { AssetRepairConsumedItemControllerBase } from "./base/assetRepairConsumedItem.controller.base";

@swagger.ApiTags("assetRepairConsumedItems")
@common.Controller("assetRepairConsumedItems")
export class AssetRepairConsumedItemController extends AssetRepairConsumedItemControllerBase {
  constructor(protected readonly service: AssetRepairConsumedItemService) {
    super(service);
  }
}
