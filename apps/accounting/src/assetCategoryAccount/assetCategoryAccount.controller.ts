import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AssetCategoryAccountService } from "./assetCategoryAccount.service";
import { AssetCategoryAccountControllerBase } from "./base/assetCategoryAccount.controller.base";

@swagger.ApiTags("assetCategoryAccounts")
@common.Controller("assetCategoryAccounts")
export class AssetCategoryAccountController extends AssetCategoryAccountControllerBase {
  constructor(protected readonly service: AssetCategoryAccountService) {
    super(service);
  }
}
