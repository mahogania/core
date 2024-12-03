import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AssetCapitalizationStockItemService } from "./assetCapitalizationStockItem.service";
import { AssetCapitalizationStockItemControllerBase } from "./base/assetCapitalizationStockItem.controller.base";

@swagger.ApiTags("assetCapitalizationStockItems")
@common.Controller("assetCapitalizationStockItems")
export class AssetCapitalizationStockItemController extends AssetCapitalizationStockItemControllerBase {
  constructor(protected readonly service: AssetCapitalizationStockItemService) {
    super(service);
  }
}
