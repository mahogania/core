import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AssetCapitalizationServiceItemService } from "./assetCapitalizationServiceItem.service";
import { AssetCapitalizationServiceItemControllerBase } from "./base/assetCapitalizationServiceItem.controller.base";

@swagger.ApiTags("assetCapitalizationServiceItems")
@common.Controller("assetCapitalizationServiceItems")
export class AssetCapitalizationServiceItemController extends AssetCapitalizationServiceItemControllerBase {
  constructor(
    protected readonly service: AssetCapitalizationServiceItemService
  ) {
    super(service);
  }
}
