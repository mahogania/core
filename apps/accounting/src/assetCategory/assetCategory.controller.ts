import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AssetCategoryService } from "./assetCategory.service";
import { AssetCategoryControllerBase } from "./base/assetCategory.controller.base";

@swagger.ApiTags("assetCategories")
@common.Controller("assetCategories")
export class AssetCategoryController extends AssetCategoryControllerBase {
  constructor(protected readonly service: AssetCategoryService) {
    super(service);
  }
}
