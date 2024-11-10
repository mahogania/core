import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AssetCapitalizationAssetItemService } from "./assetCapitalizationAssetItem.service";
import { AssetCapitalizationAssetItemControllerBase } from "./base/assetCapitalizationAssetItem.controller.base";

@swagger.ApiTags("assetCapitalizationAssetItems")
@common.Controller("assetCapitalizationAssetItems")
export class AssetCapitalizationAssetItemController extends AssetCapitalizationAssetItemControllerBase {
  constructor(protected readonly service: AssetCapitalizationAssetItemService) {
    super(service);
  }
}
