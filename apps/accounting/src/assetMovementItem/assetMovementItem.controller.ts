import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AssetMovementItemService } from "./assetMovementItem.service";
import { AssetMovementItemControllerBase } from "./base/assetMovementItem.controller.base";

@swagger.ApiTags("assetMovementItems")
@common.Controller("assetMovementItems")
export class AssetMovementItemController extends AssetMovementItemControllerBase {
  constructor(protected readonly service: AssetMovementItemService) {
    super(service);
  }
}
